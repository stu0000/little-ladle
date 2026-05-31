import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Recipes Adapted For <span className="text-green-600">You</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get personalized recipes based on your energy levels, dietary preferences, and budget. 
            Track your meals, earn rewards, and discover what works best for your body.
          </p>
          <Link
            href="/recipes"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Explore Recipes
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How NourishU Works</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Recipe Adaptation */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🍽️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Recipe Adaptation</h3>
            <p className="text-gray-600">
              Our AI adapts recipes based on your spoon levels (energy), dietary restrictions, and preferences. 
              Get recipes that work for your body, not against it.
            </p>
          </div>

          {/* Meal Planning */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Meal Planning</h3>
            <p className="text-gray-600">
              Plan your week with recipes that fit your energy levels and budget. 
              Get automatic shopping lists and nutritional breakdowns.
            </p>
          </div>

          {/* Budget Tracking */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Budget Optimization</h3>
            <p className="text-gray-600">
              Track meal costs, find supermarket deals, and optimize your grocery budget. 
              See real-time pricing from local stores.
            </p>
          </div>

          {/* Nutrition Tracking */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Nutrition Insights</h3>
            <p className="text-gray-600">
              Track macros, vitamins, and minerals. Understand how each recipe contributes to your daily nutrition goals.
            </p>
          </div>

          {/* Gamification */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎮</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Earn Rewards</h3>
            <p className="text-gray-600">
              Complete quests, earn badges, and build streaks. Make healthy eating fun with our gamification system.
            </p>
          </div>

          {/* Selective Eating */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🚫</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Selective Eating Support</h3>
            <p className="text-gray-600">
              For those with selective eating patterns, we provide safe, familiar recipes and gradual exposure challenges.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Meals?</h2>
          <p className="text-lg mb-8 opacity-90">
            Start with your profile to get personalized recommendations
          </p>
          <Link
            href="/profile"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Set Up Your Profile
          </Link>
        </div>
      </section>
    </div>
  );
}
