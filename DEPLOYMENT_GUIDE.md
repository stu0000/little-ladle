# NourishU Web MVP - Deployment Guide

## Quick Start: Deploy to Vercel

### Step 1: Connect GitHub Repository

1. Push code to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/nourishu-web.git
git branch -M main
git push -u origin main
```

2. Go to https://vercel.com/new
3. Select "Import Git Repository"
4. Paste your GitHub URL
5. Click "Import"

### Step 2: Configure Environment Variables

In Vercel dashboard, go to **Settings → Environment Variables** and add:

```
NEXT_PUBLIC_SUPABASE_URL=https://tewrgzynzaeyyyjtarvt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_o3YcPZL38rHafjcrJRuFgA_Udib6-yO
SUPABASE_SERVICE_ROLE_KEY=sb_secret_GDk8r8fUBJNrfDGa21dkXA_9pLesr4S
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=[YOUR_STRIPE_KEY]
STRIPE_SECRET_KEY=[YOUR_STRIPE_SECRET]
```

### Step 3: Configure Deployment Region

1. Go to **Settings → Regions**
2. Select **Sydney (syd1)** as primary region
3. Save

### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete (2-3 minutes)
3. Your app will be live at: `https://nourishu.vercel.app`

---

## Post-Deployment Checklist

- [ ] App loads successfully
- [ ] HTTPS working (green lock icon)
- [ ] Security headers present
- [ ] Supabase connection verified
- [ ] Trial phase accessible
- [ ] Billing page accessible
- [ ] Mobile responsive design working
- [ ] All navigation links working

---

## Supabase Database Setup

### Create Tables

Run these SQL commands in Supabase SQL Editor:

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  spoon_level INTEGER DEFAULT 2,
  dietary_preferences TEXT[],
  budget_tier TEXT DEFAULT 'medium',
  selective_eating BOOLEAN DEFAULT false,
  ndis_participant_id TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Recipes table
CREATE TABLE recipes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  ingredients TEXT[],
  instructions TEXT[],
  prep_time INTEGER,
  cook_time INTEGER,
  servings INTEGER,
  calories NUMERIC,
  protein NUMERIC,
  cost NUMERIC,
  spoon_level INTEGER,
  dietary_tags TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Meal plans table
CREATE TABLE meal_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  week_start DATE,
  meals JSONB,
  total_cost NUMERIC,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Quests table
CREATE TABLE quests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  title TEXT NOT NULL,
  description TEXT,
  quest_type TEXT,
  points_reward INTEGER,
  progress INTEGER DEFAULT 0,
  target INTEGER,
  completed BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Billing table
CREATE TABLE user_billing (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  billing_type TEXT,
  status TEXT,
  trial_end_date TIMESTAMP,
  subscription_start_date TIMESTAMP,
  subscription_end_date TIMESTAMP,
  amount_aud NUMERIC,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE quests ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_billing ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can read own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);
```

### Enable Encryption

1. Go to Supabase Dashboard
2. Settings → Database
3. Verify "Encryption at rest" is enabled
4. Verify region is "ap-southeast-2" (Sydney)

---

## Stripe Billing Setup

### Create Products

1. Go to https://dashboard.stripe.com
2. Create product "NourishU Annual"
   - Price: $199.99 AUD
   - Billing period: Annual
   - Trial: 14 days

3. Create product "NourishU Monthly"
   - Price: $19.99 AUD
   - Billing period: Monthly
   - Trial: 7 days

4. Create product "NourishU Trial"
   - Price: $0 AUD
   - Trial: 90 days

### Get API Keys

1. Go to Developers → API Keys
2. Copy "Publishable key"
3. Copy "Secret key"
4. Add to Vercel environment variables

---

## Security Verification

### Check HTTPS/TLS
```bash
curl -I https://nourishu.vercel.app
# Should show: Strict-Transport-Security header
```

### Check Security Headers
```bash
curl -I https://nourishu.vercel.app | grep -E "X-|Content-Security|Strict"
```

### Verify Supabase Connection
- Go to app home page
- Check browser console for any errors
- Verify database connection in Supabase logs

---

## Monitoring & Maintenance

### Vercel Analytics
- Monitor performance in Vercel dashboard
- Check build logs for errors
- Monitor function execution times

### Supabase Monitoring
- Check database logs
- Monitor API usage
- Check backup status

### Error Tracking
- Set up Sentry (optional)
- Monitor error rates
- Set up alerts

---

## Troubleshooting

### Build Fails
- Check environment variables are set
- Verify Node.js version compatibility
- Check for TypeScript errors: `npm run check`

### App Won't Load
- Check Supabase connection
- Verify environment variables in Vercel
- Check browser console for errors

### Database Connection Error
- Verify Supabase URL is correct
- Check API keys are valid
- Verify Sydney region (ap-southeast-2)

### Billing Not Working
- Verify Stripe keys are set
- Check Stripe test mode vs live mode
- Verify webhook configuration

---

## Support

- **Technical Issues:** support@nourishu.com.au
- **Billing Issues:** billing@nourishu.com.au
- **Security Issues:** security@nourishu.com.au

---

**Last Updated:** May 31, 2026  
**Status:** Ready for Production
