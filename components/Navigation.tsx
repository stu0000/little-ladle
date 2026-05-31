'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <span className="font-bold text-lg text-gray-900">NourishU</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/recipes" className="text-gray-700 hover:text-green-600 transition">
              Recipes
            </Link>
            <Link href="/meal-planner" className="text-gray-700 hover:text-green-600 transition">
              Meal Planner
            </Link>
            <Link href="/budgeting" className="text-gray-700 hover:text-green-600 transition">
              Budgeting
            </Link>
            <Link href="/quests" className="text-gray-700 hover:text-green-600 transition">
              Quests
            </Link>
            <Link href="/profile" className="text-gray-700 hover:text-green-600 transition">
              Profile
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/recipes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Recipes
            </Link>
            <Link href="/meal-planner" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Meal Planner
            </Link>
            <Link href="/budgeting" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Budgeting
            </Link>
            <Link href="/quests" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Quests
            </Link>
            <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Profile
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
