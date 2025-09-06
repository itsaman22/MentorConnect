import React from 'react';

const MentorHeader = ({ activeSection, handleSectionClick, user }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {activeSection === 'dashboard' ? 'Dashboard' : 
             activeSection === 'courses' ? 'My Courses' :
             activeSection === 'sessions' ? 'Sessions' :
             activeSection === 'students' ? 'My Students' :
             activeSection === 'schedule' ? 'Schedule' :
             activeSection === 'assignments' ? 'Assignments' :
             activeSection === 'progress' ? 'Progress Tracking' :
             activeSection === 'resources' ? 'Resources' :
             activeSection === 'profile' ? 'Profile' :
             activeSection === 'settings' ? 'Settings' :
             'Dashboard'}
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => handleSectionClick('notifications')}
            className="p-2 text-gray-400 hover:text-gray-600 relative"
          >
            <i className="fas fa-bell text-xl"></i>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </button>
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              {user ? user.firstName.charAt(0) : 'M'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MentorHeader;
