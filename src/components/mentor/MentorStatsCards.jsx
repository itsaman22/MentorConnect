import React from 'react';

const MentorStatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Active Students</p>
            <p className="text-3xl font-bold text-gray-900">{stats.activeStudents}</p>
            <p className="text-sm text-green-600 mt-1">↗ +{stats.newStudents} this month</p>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <i className="fas fa-user-graduate text-blue-600 text-xl"></i>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Total Sessions</p>
            <p className="text-3xl font-bold text-gray-900">{stats.totalSessions}</p>
            <p className="text-sm text-green-600 mt-1">↗ +{stats.sessionGrowth}% growth</p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <i className="fas fa-video text-green-600 text-xl"></i>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Active Courses</p>
            <p className="text-3xl font-bold text-gray-900">{stats.activeCourses}</p>
            <p className="text-sm text-blue-600 mt-1">{stats.completionRate}% avg completion</p>
          </div>
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <i className="fas fa-book text-purple-600 text-xl"></i>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">This Month Rating</p>
            <p className="text-3xl font-bold text-gray-900">{stats.rating}</p>
            <p className="text-sm text-yellow-600 mt-1">★★★★★ ({stats.reviews} reviews)</p>
          </div>
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <i className="fas fa-star text-orange-600 text-xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorStatsCards;
