import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserDashboardBar = ({ user }) => {
  const [showQuickActions, setShowQuickActions] = useState(false);

  // Mock user stats - in real app this would come from API
  const userStats = {
    favoriteMentors: 5,
    upcomingSessions: 2,
    completedSessions: 8,
    unreadMessages: 3,
    profileCompletion: 85,
  };

  if (!user) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-8 overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'}
              alt={user.name}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div>
              <h3 className="text-xl font-bold text-white">
                Welcome back, {user.name}!
              </h3>
              <p className="text-blue-100 text-sm">
                {user.role === 'mentee' ? 'Continue your learning journey' : 'Help others grow'}
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setShowQuickActions(!showQuickActions)}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg transition-all duration-200"
          >
            <i className="fas fa-bolt mr-2"></i>
            Quick Actions
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 py-4 bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{userStats.favoriteMentors}</div>
            <div className="text-sm text-gray-600">Favorites</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{userStats.upcomingSessions}</div>
            <div className="text-sm text-gray-600">Upcoming</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{userStats.completedSessions}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{userStats.unreadMessages}</div>
            <div className="text-sm text-gray-600">Messages</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{userStats.profileCompletion}%</div>
            <div className="text-sm text-gray-600">Profile</div>
          </div>
        </div>
      </div>

      {/* Quick Actions Dropdown */}
      {showQuickActions && (
        <div className="px-6 py-4 border-t border-gray-200 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/mentee-home"
              className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <i className="fas fa-tachometer-alt text-blue-600"></i>
              <div>
                <div className="font-medium text-gray-900">Dashboard</div>
                <div className="text-sm text-gray-600">View your dashboard</div>
              </div>
            </Link>
            
            <button className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <i className="fas fa-calendar text-green-600"></i>
              <div>
                <div className="font-medium text-gray-900">My Sessions</div>
                <div className="text-sm text-gray-600">Manage bookings</div>
              </div>
            </button>
            
            <button className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <i className="fas fa-heart text-red-600"></i>
              <div>
                <div className="font-medium text-gray-900">Favorites</div>
                <div className="text-sm text-gray-600">Saved mentors</div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Profile Completion Prompt */}
      {userStats.profileCompletion < 100 && (
        <div className="px-6 py-3 bg-yellow-50 border-t border-yellow-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <i className="fas fa-exclamation-triangle text-yellow-600"></i>
              <div>
                <span className="text-sm text-yellow-800 font-medium">
                  Complete your profile to get better recommendations
                </span>
              </div>
            </div>
            <button className="text-yellow-600 hover:text-yellow-800 text-sm font-medium">
              Complete Profile →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboardBar;
