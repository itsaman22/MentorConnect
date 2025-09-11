import React from 'react';

const MenteeSidebar = ({ 
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
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {user ? user.firstName.charAt(0) : 'M'}
            </span>
          </div>
          {!sidebarCollapsed && (
            <div>
              <h3 className="font-semibold text-gray-900">
                {user ? `${user.firstName} ${user.lastName}` : 'Mentee'}
              </h3>
              <p className="text-sm text-gray-500">Mentee</p>
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
            <i className="fas fa-home w-5"></i>
            {!sidebarCollapsed && <span>Dashboard</span>}
          </button>
        </div>

        <div className="px-6 py-1">
          {!sidebarCollapsed && (
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">My Activities</h4>
          )}
          
          <button 
            onClick={() => handleSectionClick('messages')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors`}
            title={sidebarCollapsed ? 'Messages' : ''}
          >
            <i className="fas fa-comments w-5"></i>
            {!sidebarCollapsed && (
              <>
                <span>Messages</span>
                <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">3</span>
              </>
            )}
          </button>
          
          <button 
            onClick={() => handleSectionClick('calendar')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors mt-1`}
            title={sidebarCollapsed ? 'Calendar' : ''}
          >
            <i className="fas fa-calendar-alt w-5"></i>
            {!sidebarCollapsed && <span>Calendar</span>}
          </button>
          
          <button 
            onClick={() => handleSectionClick('info-session')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors mt-1`}
            title={sidebarCollapsed ? 'Info Session' : ''}
          >
            <i className="fas fa-video w-5"></i>
            {!sidebarCollapsed && <span>Info Session</span>}
          </button>
          {/* Alumni Section Button */}
          <button
            onClick={() => handleSectionClick('alumni')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors mt-1`}
            title={sidebarCollapsed ? 'Alumni' : ''}
          >
            <i className="fas fa-user-graduate w-5"></i>
            {!sidebarCollapsed && <span>Alumni</span>}
          </button>
        </div>

        <div className="px-6 py-1 mt-4">
          {!sidebarCollapsed && (
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Account Settings</h4>
          )}
          
          <button 
            onClick={() => handleSectionClick('personal-info')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors`}
            title={sidebarCollapsed ? 'Personal Info' : ''}
          >
            <i className="fas fa-user w-5"></i>
            {!sidebarCollapsed && <span>Personal Info</span>}
          </button>
          
          <button 
            onClick={() => handleSectionClick('login-security')}
            className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors mt-1`}
            title={sidebarCollapsed ? 'Login & Security' : ''}
          >
            <i className="fas fa-shield-alt w-5"></i>
            {!sidebarCollapsed && <span>Login & Security</span>}
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
        <div className={`bg-blue-50 rounded-lg ${sidebarCollapsed ? 'p-2' : 'p-4'} transition-all duration-300`}>
          {!sidebarCollapsed ? (
            <>
              <div className="flex items-center space-x-2 mb-2">
                <i className="fas fa-question-circle text-blue-600"></i>
                <span className="font-medium text-blue-900">Need Help?</span>
              </div>
              <p className="text-sm text-blue-700 mb-3">Check our guides and tutorials</p>
              <button 
                onClick={() => handleQuickAction('help-center')}
                className="w-full bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
              >
                Help Center
              </button>
            </>
          ) : (
            <div className="flex justify-center">
              <button 
                onClick={() => handleQuickAction('help-center')}
                className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
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

export default MenteeSidebar;
