import React, { useState } from 'react';
import Card from './Card';

import brokerage from "../assets/brokerage.png";
import fruits from "../assets/fruits.png";
import hotel from "../assets/hotel.jpg";
import hotel2 from "../assets/hotel2.jpg";
import indianDelivery from "../assets/indian delivery.png";
import insurance from "../assets/insurance.jpg";
import traveling from "../assets/traveling.webp";
import sandwich from "../assets/sandwich.png";

const BrowseCompany = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Featured');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const cardsArray = [
    { image: brokerage, title: 'TechSpark', industry: 'AI & ML', description: 'AI-driven insights for smarter investments.' },
    { image: fruits, title: 'GreenHive', industry: 'Sustainability', description: 'Eco-friendly solutions for tomorrow.' },
    { image: hotel, title: 'HealthBridge', industry: 'HealthTech', description: 'Modern healthcare technology platform.' },
    { image: hotel2, title: 'TravelNinja', industry: 'Travel', description: 'Affordable journeys made easy.' },
    { image: indianDelivery, title: 'SpiceKart', industry: 'FoodTech', description: 'Authentic Indian meals at your doorstep.' },
    { image: insurance, title: 'CoverWise', industry: 'InsurTech', description: 'Smart insurance for modern life.' },
    { image: traveling, title: 'GlobeGo', industry: 'Exploration', description: 'Explore the world on your terms.' },
    { image: sandwich, title: 'DeliFresh', industry: 'Food & Beverage', description: 'Fresh sandwiches made daily.' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="h-80 bg-gray-950 border-b-4 border-black">
        <div className="pt-14 text-center">
          <h1 className="text-white text-5xl font-bold">Browse Companies on FUNDO</h1>
          <div className="pt-12">
            <form className="max-w-xl mx-auto">
              <div className="flex gap-2 relative">
                {/* Dropdown Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-white bg-gray-700 border border-gray-600 rounded-s-lg hover:bg-gray-600"
                >
                  {selectedOption}
                  <svg
                    className="w-3 h-3 ml-2"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute z-30 mt-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-56 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      {['Featured', 'Trending', 'Recently Funded', 'New & Noteworthy'].map((option) => (
                        <li key={option}>
                          <button
                            type="button"
                            onClick={() => handleOptionClick(option)}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {option}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Search Field */}
                <div className="relative w-full">
                  <input
                    type="search"
                    placeholder="Search companies..."
                    className="block w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-e-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-600 rounded-e-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-gray-100 dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsArray.map((company, index) => (
              <Card
                key={index}
                image={company.image}
                title={company.title}
                description={company.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCompany;
