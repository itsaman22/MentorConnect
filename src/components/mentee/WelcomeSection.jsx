import React from 'react';

const WelcomeSection = ({ user, handleSectionClick }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">
            Welcome Back, {user ? user.firstName : 'Mentee'}!
          </h2>
          <p className="text-blue-100 text-lg mb-6">
            Manage all the things from single Dashboard. See latest info sessions, recent conversations and update your recommendations.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={() => handleSectionClick('browse-mentors')}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Browse Mentors
            </button>
            <button 
              onClick={() => handleSectionClick('goals')}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Goals
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="w-64 h-48 bg-white bg-opacity-10 rounded-2xl flex items-center justify-center">
            <i className="fas fa-graduation-cap text-6xl text-white opacity-80"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
