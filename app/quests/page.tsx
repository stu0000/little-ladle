'use client';

import { useState } from 'react';

export default function QuestsPage() {
  const [points, setPoints] = useState(2450);
  const [level, setLevel] = useState('Adventurer');

  const quests = [
    {
      id: 1,
      title: 'Log 5 Meals',
      description: 'Track your meals for 5 days',
      progress: 3,
      total: 5,
      reward: 100,
      completed: false,
      icon: '📝'
    },
    {
      id: 2,
      title: 'Try a New Recipe',
      description: 'Cook a recipe you\'ve never tried before',
      progress: 1,
      total: 1,
      reward: 50,
      completed: true,
      icon: '🍽️'
    },
    {
      id: 3,
      title: 'Weekly Planner',
      description: 'Plan your meals for the entire week',
      progress: 0,
      total: 1,
      reward: 75,
      completed: false,
      icon: '📅'
    },
    {
      id: 4,
      title: 'Budget Master',
      description: 'Keep meals under $5 per serving',
      progress: 2,
      total: 3,
      reward: 125,
      completed: false,
      icon: '💰'
    },
  ];

  const badges = [
    { name: 'First Meal', icon: '🥘', unlocked: true },
    { name: 'Week Warrior', icon: '⚔️', unlocked: true },
    { name: 'Budget Saver', icon: '🏦', unlocked: false },
    { name: 'Recipe Master', icon: '👨‍🍳', unlocked: false },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Flavor Quest</h1>

      {/* Player Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-lg shadow-lg">
          <p className="text-purple-100 mb-2">Current Level</p>
          <p className="text-4xl font-bold">{level}</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-8 rounded-lg shadow-lg">
          <p className="text-yellow-100 mb-2">Total Points</p>
          <p className="text-4xl font-bold">{points}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-lg shadow-lg">
          <p className="text-green-100 mb-2">Current Streak</p>
          <p className="text-4xl font-bold">7 days 🔥</p>
        </div>
      </div>

      {/* Quests Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Quests</h2>
        <div className="space-y-4">
          {quests.map(quest => (
            <div key={quest.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{quest.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{quest.title}</h3>
                    <p className="text-gray-600">{quest.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-yellow-600">+{quest.reward}</p>
                  <p className="text-sm text-gray-600">points</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">Progress</span>
                  <span className="text-sm text-gray-600">{quest.progress}/{quest.total}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${quest.completed ? 'bg-green-600' : 'bg-blue-600'}`}
                    style={{ width: `${(quest.progress / quest.total) * 100}%` }}
                  />
                </div>
              </div>

              {quest.completed && (
                <button className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition">
                  Claim Reward
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Badges Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Badges</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg text-center transition ${
                badge.unlocked
                  ? 'bg-gradient-to-br from-yellow-100 to-yellow-50 border-2 border-yellow-400'
                  : 'bg-gray-100 border-2 border-gray-300 opacity-50'
              }`}
            >
              <p className="text-5xl mb-3">{badge.icon}</p>
              <p className="font-semibold text-gray-900">{badge.name}</p>
              {!badge.unlocked && <p className="text-xs text-gray-600 mt-2">Locked</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
