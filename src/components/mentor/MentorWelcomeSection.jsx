import React from 'react';

const MentorWelcomeSection = ({ user, handleSectionClick }) => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">
            Welcome Back, {user ? user.firstName : 'Mentor'}! 🎯
          </h2>
          <p className="text-green-100 text-lg mb-6">
            Empower minds, shape futures. Manage your courses, track student progress, and schedule impactful sessions.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={() => handleSectionClick('sessions')}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Schedule Session
            </button>
            <button 
              onClick={() => handleSectionClick('students')}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View Students
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="w-64 h-48 bg-white bg-opacity-10 rounded-2xl flex items-center justify-center">
            <i className="fas fa-chalkboard-teacher text-6xl text-white opacity-80"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorWelcomeSection;
