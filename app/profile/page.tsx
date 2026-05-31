'use client';

import { useState } from 'react';

export default function ProfilePage() {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({
    name: '',
    spoonLevel: 2,
    dietary: [] as string[],
    budget: 'medium',
    selectiveEating: false,
  });

  const handleDietaryChange = (diet: string) => {
    setProfile(prev => ({
      ...prev,
      dietary: prev.dietary.includes(diet)
        ? prev.dietary.filter(d => d !== diet)
        : [...prev.dietary, diet]
    }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Set Up Your Profile</h1>
      <p className="text-gray-600 mb-8">Let's personalize NourishU for you</p>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {[1, 2, 3, 4].map(s => (
            <div
              key={s}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
                s <= step
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {s}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-600 h-2 rounded-full transition-all"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's your name?</h2>
            <input
              type="text"
              placeholder="Enter your name"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How many spoons do you typically have?</h2>
            <p className="text-gray-600 mb-6">Spoons represent your daily energy level</p>
            <div className="space-y-4">
              {[
                { value: 0, label: '🥄 Very Low (0-1 spoons)', description: 'Minimal energy, need simple recipes' },
                { value: 1, label: '🥄🥄 Low (2-3 spoons)', description: 'Limited energy, need moderate recipes' },
                { value: 2, label: '🥄🥄🥄 Medium (4+ spoons)', description: 'Good energy, can handle complex recipes' },
              ].map(option => (
                <label key={option.value} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-green-50 transition" style={{borderColor: profile.spoonLevel === option.value ? '#16a34a' : '#e5e7eb'}}>
                  <input
                    type="radio"
                    name="spoons"
                    value={option.value}
                    checked={profile.spoonLevel === option.value}
                    onChange={(e) => setProfile({ ...profile, spoonLevel: parseInt(e.target.value) })}
                    className="w-4 h-4 text-green-600"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{option.label}</p>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dietary Preferences</h2>
            <p className="text-gray-600 mb-6">Select all that apply</p>
            <div className="space-y-3">
              {['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut-Free', 'Low-FODMAP'].map(diet => (
                <label key={diet} className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                  <input
                    type="checkbox"
                    checked={profile.dietary.includes(diet)}
                    onChange={() => handleDietaryChange(diet)}
                    className="w-4 h-4 text-green-600 rounded"
                  />
                  <span className="ml-3 font-semibold text-gray-900">{diet}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Preferences</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Budget per meal</h3>
                <div className="space-y-3">
                  {[
                    { value: 'low', label: 'Low ($2-3 per serving)' },
                    { value: 'medium', label: 'Medium ($4-6 per serving)' },
                    { value: 'high', label: 'High ($7+ per serving)' },
                  ].map(option => (
                    <label key={option.value} className="flex items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                      <input
                        type="radio"
                        name="budget"
                        value={option.value}
                        checked={profile.budget === option.value}
                        onChange={(e) => setProfile({ ...profile, budget: e.target.value })}
                        className="w-4 h-4 text-green-600"
                      />
                      <span className="ml-3 font-semibold text-gray-900">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                  <input
                    type="checkbox"
                    checked={profile.selectiveEating}
                    onChange={(e) => setProfile({ ...profile, selectiveEating: e.target.checked })}
                    className="w-4 h-4 text-green-600 rounded"
                  />
                  <span className="ml-3 font-semibold text-gray-900">I have selective eating patterns</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleBack}
          disabled={step === 1}
          className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={step === 4}
          className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {step === 4 ? 'Complete' : 'Next'}
        </button>
      </div>

      {step === 4 && (
        <div className="mt-6 p-6 bg-green-50 border-2 border-green-200 rounded-lg text-center">
          <p className="text-green-900 font-semibold">✓ Profile setup complete! Start exploring recipes.</p>
        </div>
      )}
    </div>
  );
}
