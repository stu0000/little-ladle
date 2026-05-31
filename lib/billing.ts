import Stripe from 'stripe';

/**
 * Flexible Billing System for NourishU
 * Supports:
 * - Annual upfront payment (best for NDIS trial)
 * - Monthly subscription (standard)
 * - Trial period without feature lockout
 */

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export interface BillingPlan {
  id: string;
  name: string;
  description: string;
  price_aud: number;
  billing_period: 'annual' | 'monthly';
  trial_days: number;
  features: string[];
  recommended: boolean;
}

// Billing plans available
export const BILLING_PLANS: BillingPlan[] = [
  {
    id: 'trial',
    name: 'NDIS Trial',
    description: 'Free trial for NDIS participants',
    price_aud: 0,
    billing_period: 'annual',
    trial_days: 30,
    features: [
      'Full access to recipe library',
      'Meal planning tools',
      'Budget tracking',
      'Gamification system',
      'Support for selective eating',
      'Email support',
    ],
    recommended: true,
  },
  {
    id: 'annual',
    name: 'Annual Plan',
    description: 'Best value - pay once per year',
    price_aud: 249.95,
    billing_period: 'annual',
    trial_days: 14,
    features: [
      'All trial features',
      'AI recipe adaptation',
      'Supermarket price integration',
      'Advanced analytics',
      'Priority support',
      'Export meal plans to PDF',
      'Family sharing (up to 3 users)',
    ],
    recommended: true,
  },
  {
    id: 'monthly',
    name: 'Monthly Plan',
    description: 'Flexible month-to-month billing',
    price_aud: 24.95,
    billing_period: 'monthly',
    trial_days: 7,
    features: [
      'All annual features',
      'Cancel anytime',
      'No long-term commitment',
    ],
    recommended: false,
  },
];

/**
 * Create Stripe customer
 */
export async function createStripeCustomer(
  email: string,
  name: string,
  ndisParticipantId?: string
) {
  try {
    const customer = await stripe.customers.create({
      email,
      name,
      metadata: {
        ndis_participant_id: ndisParticipantId || 'none',
        data_residency: 'AU-NSW',
        compliance_level: 'NDIS',
      },
    });

    return customer;
  } catch (error) {
    console.error('Error creating Stripe customer:', error);
    throw error;
  }
}

/**
 * Create annual subscription (upfront payment)
 */
export async function createAnnualSubscription(
  customerId: string,
  planId: string = 'annual'
) {
  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: planId }],
      payment_settings: {
        payment_method_types: ['card'],
        save_default_payment_method: 'on_subscription',
      },
      metadata: {
        billing_type: 'annual',
        data_residency: 'AU-NSW',
      },
    });

    return subscription;
  } catch (error) {
    console.error('Error creating annual subscription:', error);
    throw error;
  }
}

/**
 * Create monthly subscription
 */
export async function createMonthlySubscription(
  customerId: string,
  planId: string = 'monthly'
) {
  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: planId }],
      payment_settings: {
        payment_method_types: ['card'],
        save_default_payment_method: 'on_subscription',
      },
      metadata: {
        billing_type: 'monthly',
        data_residency: 'AU-NSW',
      },
    });

    return subscription;
  } catch (error) {
    console.error('Error creating monthly subscription:', error);
    throw error;
  }
}

/**
 * Create trial subscription (no payment required)
 */
export async function createTrialSubscription(
  customerId: string,
  trialDays: number = 90
) {
  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: 'trial' }],
      trial_period_days: trialDays,
      metadata: {
        billing_type: 'trial',
        data_residency: 'AU-NSW',
        trial_days: trialDays.toString(),
      },
    });

    return subscription;
  } catch (error) {
    console.error('Error creating trial subscription:', error);
    throw error;
  }
}

/**
 * Get subscription status
 */
export async function getSubscriptionStatus(subscriptionId: string) {
  try {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    return {
      id: subscription.id,
      status: subscription.status,
      current_period_start: new Date(subscription.current_period_start * 1000),
      current_period_end: new Date(subscription.current_period_end * 1000),
      trial_end: subscription.trial_end
        ? new Date(subscription.trial_end * 1000)
        : null,
      items: subscription.items.data.map((item) => ({
        price_id: item.price.id,
        amount: item.price.unit_amount,
        currency: item.price.currency,
      })),
    };
  } catch (error) {
    console.error('Error getting subscription status:', error);
    throw error;
  }
}

/**
 * Cancel subscription
 */
export async function cancelSubscription(subscriptionId: string) {
  try {
    const subscription = await stripe.subscriptions.del(subscriptionId);

    return subscription;
  } catch (error) {
    console.error('Error cancelling subscription:', error);
    throw error;
  }
}

/**
 * Update subscription plan (e.g., annual to monthly or vice versa)
 */
export async function updateSubscriptionPlan(
  subscriptionId: string,
  newPriceId: string
) {
  try {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    const updatedSubscription = await stripe.subscriptions.update(
      subscriptionId,
      {
        items: [
          {
            id: subscription.items.data[0].id,
            price: newPriceId,
          },
        ],
        proration_behavior: 'create_prorations',
      }
    );

    return updatedSubscription;
  } catch (error) {
    console.error('Error updating subscription:', error);
    throw error;
  }
}

/**
 * Verify trial eligibility
 * Trial phase: Core features unlocked, no payment required
 */
export function isTrialEligible(user: any): boolean {
  if (!user) return false;

  // Check if user is in trial period
  if (user.billing?.status === 'trial') {
    return true;
  }

  // Check if trial hasn't expired
  if (user.billing?.trial_end_date) {
    const trialEnd = new Date(user.billing.trial_end_date);
    return new Date() < trialEnd;
  }

  return false;
}

/**
 * Get available features based on billing status
 */
export function getAvailableFeatures(user: any): string[] {
  const trialFeatures = [
    'recipe-browser',
    'meal-planner',
    'budget-tracker',
    'gamification',
    'selective-eating',
  ];

  const paidFeatures = [
    ...trialFeatures,
    'ai-adaptation',
    'supermarket-pricing',
    'advanced-analytics',
    'family-sharing',
    'pdf-export',
  ];

  if (isTrialEligible(user)) {
    return trialFeatures;
  }

  if (user.billing?.status === 'active') {
    return paidFeatures;
  }

  return [];
}

/**
 * Webhook handler for Stripe events
 */
export async function handleStripeWebhook(event: Stripe.Event) {
  switch (event.type) {
    case 'customer.subscription.created':
      console.log('Subscription created:', event.data.object);
      break;
    case 'customer.subscription.updated':
      console.log('Subscription updated:', event.data.object);
      break;
    case 'customer.subscription.deleted':
      console.log('Subscription cancelled:', event.data.object);
      break;
    case 'invoice.payment_succeeded':
      console.log('Payment succeeded:', event.data.object);
      break;
    case 'invoice.payment_failed':
      console.log('Payment failed:', event.data.object);
      break;
    default:
      console.log('Unhandled event type:', event.type);
  }
}
