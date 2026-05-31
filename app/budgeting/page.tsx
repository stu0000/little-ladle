'use client';

export default function BudgetingPage() {
  const budget = {
    weeklyBudget: 60,
    spent: 52.50,
    remaining: 7.50,
    percentage: 87.5,
  };

  const expenses = [
    { date: 'Mon', meal: 'Pasta', cost: 3.50, spoons: 1 },
    { date: 'Tue', meal: 'Salad', cost: 4.00, spoons: 2 },
    { date: 'Wed', meal: 'Stir Fry', cost: 5.50, spoons: 2 },
    { date: 'Thu', meal: 'Tacos', cost: 6.00, spoons: 2 },
    { date: 'Fri', meal: 'Pizza', cost: 8.00, spoons: 1 },
    { date: 'Sat', meal: 'Steak', cost: 12.00, spoons: 3 },
    { date: 'Sun', meal: 'Roast', cost: 13.50, spoons: 2 },
  ];

  const supermarketDeals = [
    { store: 'Whole Foods', item: 'Organic Chicken', price: '$8.99/lb', savings: '-$2.00' },
    { store: 'Trader Joe\'s', item: 'Frozen Vegetables', price: '$2.99', savings: '-$1.50' },
    { store: 'Costco', item: 'Bulk Rice', price: '$12.99/10lb', savings: '-$5.00' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Budget Tracker</h1>

      {/* Budget Overview */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Weekly Budget</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Budget</span>
              <span className="text-2xl font-bold text-green-600">${budget.weeklyBudget}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Spent</span>
              <span className="text-2xl font-bold text-red-600">${budget.spent}</span>
            </div>
            <div className="border-t pt-4 flex justify-between items-center">
              <span className="text-gray-600">Remaining</span>
              <span className="text-2xl font-bold text-blue-600">${budget.remaining}</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">Budget Used</span>
              <span className="text-sm font-semibold text-gray-700">{budget.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-green-500 to-red-500 h-3 rounded-full transition-all"
                style={{ width: `${budget.percentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Supermarket Deals */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏪 Local Deals</h2>
          <div className="space-y-4">
            {supermarketDeals.map((deal, idx) => (
              <div key={idx} className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
                <p className="font-semibold text-gray-900">{deal.store}</p>
                <p className="text-sm text-gray-600">{deal.item}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-semibold text-gray-900">{deal.price}</span>
                  <span className="text-green-600 font-semibold">{deal.savings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expense Breakdown */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Weekly Expense Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Day</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Meal</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Cost</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Energy Level</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Cost/Spoon</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 font-semibold text-gray-900">{expense.date}</td>
                  <td className="px-6 py-4 text-gray-700">{expense.meal}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">${expense.cost}</td>
                  <td className="px-6 py-4">{'🥄'.repeat(expense.spoons + 1)}</td>
                  <td className="px-6 py-4 text-gray-700">${(expense.cost / (expense.spoons + 1)).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Budget Tips */}
      <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
        <h3 className="font-bold text-blue-900 mb-3">💡 Budget Tips</h3>
        <ul className="text-blue-800 space-y-2">
          <li>• Buy in bulk for items you use frequently</li>
          <li>• Check supermarket deals for discounts on your favorite ingredients</li>
          <li>• Plan meals around what's on sale</li>
          <li>• Cook in batches to reduce per-meal costs</li>
        </ul>
      </div>
    </div>
  );
}
