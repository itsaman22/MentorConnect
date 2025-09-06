import React from 'react';

const MentorSidebar = ({ 
  sidebarCollapsed, 
  toggleSidebar, 
  user, 
  activeSection, 
  handleSectionClick, 
  handleLogout,
  handleQuickAction 
}) => {
  return (
    <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white shadow-lg fixed h-full z-10 transition-all duration-300`}>
      {/* Sidebar Toggle Button - Top positioned */}
      <div className="p-4 border-b border-gray-200 flex justify-center">
        <button 
          onClick={toggleSidebar}
          className="bg-blue-600 text-white rounded-lg p-2 shadow-lg hover:bg-blue-700 transition-colors"
          title={sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          <div className="flex flex-col space-y-1">
            <div className="w-4 h-0.5 bg-white rounded"></div>
            <div className="w-4 h-0.5 bg-white rounded"></div>
            <div className="w-4 h-0.5 bg-white rounded"></div>
          </div>
        </button>
      </div>

      {/* Profile Section */}
      <div className={`p-6 border-b border-gray-200 ${sidebarCollapsed ? 'flex justify-center' : ''}`}>
        <div className={`flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'}`}>
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {user ? user.firstName.charAt(0) : 'M'}
            </span>
          </div>
          {!sidebarCollapsed && (
            <div>
              <h3 className="font-semibold text-gray-900">
                {user ? `${user.firstName} ${user.lastName}` : 'Mentor'}
              </h3>
              <p className="text-sm text-gray-500">Mentor</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="py-4">
        <div className="px-6 py-2">
          <button 
            onClick={() => handleSectionClick('dashboard')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left transition-colors ${
              activeSection === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
            title={sidebarCollapsed ? 'Dashboard' : ''}
          >
            <i className="fas fa-tachometer-alt w-5"></i>
            {!sidebarCollapsed && <span>Dashboard</span>}
          </button>
        </div>

        <div className="px-6 py-1">
          {!sidebarCollapsed && (
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Teaching</h4>
          )}
          
          <button 
            onClick={() => handleSectionClick('courses')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors`}
            title={sidebarCollapsed ? 'My Courses' : ''}
          >
            <i className="fas fa-book w-5"></i>
            {!sidebarCollapsed && <span>My Courses</span>}
          </button>
          
          <button 
            onClick={() => handleSectionClick('sessions')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors mt-1`}
            title={sidebarCollapsed ? 'Sessions' : ''}
          >
            <i className="fas fa-video w-5"></i>
            {!sidebarCollapsed && (
              <>
                <span>Sessions</span>
                <span className="ml-auto bg-green-500 text-white text-xs rounded-full px-2 py-1">5</span>
              </>
            )}
          </button>
          
          <button 
            onClick={() => handleSectionClick('students')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors mt-1`}
            title={sidebarCollapsed ? 'My Students' : ''}
          >
            <i className="fas fa-user-graduate w-5"></i>
            {!sidebarCollapsed && <span>My Students</span>}
          </button>

          <button 
            onClick={() => handleSectionClick('schedule')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors mt-1`}
            title={sidebarCollapsed ? 'Schedule' : ''}
          >
            <i className="fas fa-calendar-alt w-5"></i>
            {!sidebarCollapsed && <span>Schedule</span>}
          </button>
        </div>

        <div className="px-6 py-1 mt-4">
          {!sidebarCollapsed && (
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Management</h4>
          )}
          
          <button 
            onClick={() => handleSectionClick('assignments')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors`}
            title={sidebarCollapsed ? 'Assignments' : ''}
          >
            <i className="fas fa-tasks w-5"></i>
            {!sidebarCollapsed && <span>Assignments</span>}
          </button>
          
          <button 
            onClick={() => handleSectionClick('progress')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors mt-1`}
            title={sidebarCollapsed ? 'Progress Tracking' : ''}
          >
            <i className="fas fa-chart-line w-5"></i>
            {!sidebarCollapsed && <span>Progress Tracking</span>}
          </button>

          <button 
            onClick={() => handleSectionClick('resources')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors mt-1`}
            title={sidebarCollapsed ? 'Resources' : ''}
          >
            <i className="fas fa-folder w-5"></i>
            {!sidebarCollapsed && <span>Resources</span>}
          </button>
        </div>

        <div className="px-6 py-1 mt-4">
          {!sidebarCollapsed && (
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Account</h4>
          )}
          
          <button 
            onClick={() => handleSectionClick('profile')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors`}
            title={sidebarCollapsed ? 'Profile' : ''}
          >
            <i className="fas fa-user w-5"></i>
            {!sidebarCollapsed && <span>Profile</span>}
          </button>
          
          <button 
            onClick={() => handleSectionClick('settings')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors mt-1`}
            title={sidebarCollapsed ? 'Settings' : ''}
          >
            <i className="fas fa-cog w-5"></i>
            {!sidebarCollapsed && <span>Settings</span>}
          </button>
          
          <button 
            onClick={handleLogout}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors mt-1`}
            title={sidebarCollapsed ? 'Logout' : ''}
          >
            <i className="fas fa-sign-out-alt w-5"></i>
            {!sidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </nav>

      {/* Help Section */}
      <div className={`absolute bottom-6 ${sidebarCollapsed ? 'left-2 right-2' : 'left-6 right-6'} transition-all duration-300`}>
        <div className={`bg-green-50 rounded-lg ${sidebarCollapsed ? 'p-2' : 'p-4'} transition-all duration-300`}>
          {!sidebarCollapsed ? (
            <>
              <div className="flex items-center space-x-2 mb-2">
                <i className="fas fa-question-circle text-green-600"></i>
                <span className="font-medium text-green-900">Need Help?</span>
              </div>
              <p className="text-sm text-green-700 mb-3">Teaching guides and resources</p>
              <button 
                onClick={() => handleQuickAction('help-center')}
                className="w-full bg-green-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
              >
                Help Center
              </button>
            </>
          ) : (
            <div className="flex justify-center">
              <button 
                onClick={() => handleQuickAction('help-center')}
                className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
                title="Help Center"
              >
                <i className="fas fa-question-circle"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorSidebar;
