'use client';

import { useState } from 'react';

const SAMPLE_RECIPES = [
  {
    id: 1,
    name: 'Simple Pasta with Tomato Sauce',
    spoons: 1,
    prepTime: '15 mins',
    calories: 450,
    protein: 15,
    dietary: ['vegetarian'],
    cost: '$3.50',
    image: '🍝'
  },
  {
    id: 2,
    name: 'Grilled Chicken & Rice Bowl',
    spoons: 2,
    prepTime: '30 mins',
    calories: 650,
    protein: 45,
    dietary: ['gluten-free'],
    cost: '$5.00',
    image: '🍗'
  },
  {
    id: 3,
    name: 'Vegetable Stir Fry',
    spoons: 2,
    prepTime: '25 mins',
    calories: 350,
    protein: 12,
    dietary: ['vegan', 'gluten-free'],
    cost: '$4.00',
    image: '🥘'
  },
  {
    id: 4,
    name: 'Slow Cooker Beef Stew',
    spoons: 0,
    prepTime: '4 hours',
    calories: 550,
    protein: 40,
    dietary: ['gluten-free'],
    cost: '$6.50',
    image: '🍲'
  },
];

export default function RecipesPage() {
  const [selectedSpoons, setSelectedSpoons] = useState<number | null>(null);
  const [selectedDietary, setSelectedDietary] = useState<string | null>(null);

  const filteredRecipes = SAMPLE_RECIPES.filter(recipe => {
    if (selectedSpoons !== null && recipe.spoons !== selectedSpoons) return false;
    if (selectedDietary && !recipe.dietary.includes(selectedDietary)) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Recipe Browser</h1>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Filter Recipes</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Spoon Level Filter */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Energy Level (Spoons)</h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedSpoons(null)}
                className={`block w-full text-left px-4 py-2 rounded ${
                  selectedSpoons === null ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Levels
              </button>
              {[0, 1, 2].map(spoons => (
                <button
                  key={spoons}
                  onClick={() => setSelectedSpoons(spoons)}
                  className={`block w-full text-left px-4 py-2 rounded ${
                    selectedSpoons === spoons ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {'🥄'.repeat(spoons + 1)} - {spoons === 0 ? 'Very Low Energy' : spoons === 1 ? 'Low Energy' : 'Medium Energy'}
                </button>
              ))}
            </div>
          </div>

          {/* Dietary Filter */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Dietary Preferences</h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedDietary(null)}
                className={`block w-full text-left px-4 py-2 rounded ${
                  selectedDietary === null ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Diets
              </button>
              {['vegetarian', 'vegan', 'gluten-free'].map(diet => (
                <button
                  key={diet}
                  onClick={() => setSelectedDietary(diet)}
                  className={`block w-full text-left px-4 py-2 rounded capitalize ${
                    selectedDietary === diet ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {diet}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 text-center text-6xl">
              {recipe.image}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{recipe.name}</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Energy Level:</span>
                  <span className="font-semibold">{'🥄'.repeat(recipe.spoons + 1)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Prep Time:</span>
                  <span className="font-semibold">{recipe.prepTime}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Cost:</span>
                  <span className="font-semibold text-green-600">{recipe.cost}</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-4">
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <p className="text-gray-600">Calories</p>
                    <p className="font-semibold text-lg">{recipe.calories}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Protein</p>
                    <p className="font-semibold text-lg">{recipe.protein}g</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Type</p>
                    <p className="font-semibold text-lg">{recipe.dietary[0]}</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No recipes match your filters. Try adjusting them!</p>
        </div>
      )}
    </div>
  );
}
