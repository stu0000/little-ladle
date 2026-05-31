'use client';

export default function MealPlannerPage() {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const mealPlan = {
    Monday: { breakfast: 'Oatmeal', lunch: 'Pasta', dinner: 'Grilled Chicken' },
    Tuesday: { breakfast: 'Toast', lunch: 'Salad', dinner: 'Fish & Rice' },
    Wednesday: { breakfast: 'Eggs', lunch: 'Soup', dinner: 'Stir Fry' },
    Thursday: { breakfast: 'Yogurt', lunch: 'Sandwich', dinner: 'Tacos' },
    Friday: { breakfast: 'Smoothie', lunch: 'Leftovers', dinner: 'Pizza' },
    Saturday: { breakfast: 'Pancakes', lunch: 'Burger', dinner: 'Steak' },
    Sunday: { breakfast: 'Brunch', lunch: 'BBQ', dinner: 'Roast' },
  };

  const weeklyStats = {
    totalCost: '$52.50',
    avgCalories: 2150,
    avgProtein: 85,
    mealCount: 21,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Weekly Meal Planner</h1>

      {/* Weekly Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 text-sm mb-2">Total Weekly Cost</p>
          <p className="text-3xl font-bold text-green-600">{weeklyStats.totalCost}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 text-sm mb-2">Avg Daily Calories</p>
          <p className="text-3xl font-bold text-blue-600">{weeklyStats.avgCalories}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 text-sm mb-2">Avg Daily Protein</p>
          <p className="text-3xl font-bold text-orange-600">{weeklyStats.avgProtein}g</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 text-sm mb-2">Total Meals</p>
          <p className="text-3xl font-bold text-purple-600">{weeklyStats.mealCount}</p>
        </div>
      </div>

      {/* Weekly Plan */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Day</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Breakfast</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Lunch</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Dinner</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {weekDays.map((day, idx) => (
                <tr key={day} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 font-semibold text-gray-900">{day}</td>
                  <td className="px-6 py-4 text-gray-700">{mealPlan[day as keyof typeof mealPlan].breakfast}</td>
                  <td className="px-6 py-4 text-gray-700">{mealPlan[day as keyof typeof mealPlan].lunch}</td>
                  <td className="px-6 py-4 text-gray-700">{mealPlan[day as keyof typeof mealPlan].dinner}</td>
                  <td className="px-6 py-4">
                    <button className="text-green-600 hover:text-green-700 font-semibold">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Shopping List */}
      <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shopping List</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Produce</h3>
            <ul className="space-y-2">
              {['Tomatoes', 'Lettuce', 'Carrots', 'Onions', 'Garlic'].map(item => (
                <li key={item} className="flex items-center text-gray-700">
                  <input type="checkbox" className="w-4 h-4 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Proteins & Dairy</h3>
            <ul className="space-y-2">
              {['Chicken Breast', 'Ground Beef', 'Fish Fillets', 'Eggs', 'Milk'].map(item => (
                <li key={item} className="flex items-center text-gray-700">
                  <input type="checkbox" className="w-4 h-4 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
