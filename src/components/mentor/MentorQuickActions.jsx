import React from 'react';

const MentorQuickActions = ({ handleQuickAction }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
      
      <div className="space-y-3">
        <button 
          onClick={() => handleQuickAction('create-course')}
          className="w-full flex items-center space-x-3 p-3 text-left bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors"
        >
          <i className="fas fa-plus w-5"></i>
          <span className="font-medium">Create New Course</span>
        </button>
        
        <button 
          onClick={() => handleQuickAction('schedule-session')}
          className="w-full flex items-center space-x-3 p-3 text-left bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors"
        >
          <i className="fas fa-calendar-plus w-5"></i>
          <span className="font-medium">Schedule Session</span>
        </button>
        
        <button 
          onClick={() => handleQuickAction('create-assignment')}
          className="w-full flex items-center space-x-3 p-3 text-left bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors"
        >
          <i className="fas fa-tasks w-5"></i>
          <span className="font-medium">Create Assignment</span>
        </button>
        
        <button 
          onClick={() => handleQuickAction('upload-resource')}
          className="w-full flex items-center space-x-3 p-3 text-left bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-100 transition-colors"
        >
          <i className="fas fa-upload w-5"></i>
          <span className="font-medium">Upload Resource</span>
        </button>

        <button 
          onClick={() => handleQuickAction('student-progress')}
          className="w-full flex items-center space-x-3 p-3 text-left bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 transition-colors"
        >
          <i className="fas fa-chart-bar w-5"></i>
          <span className="font-medium">View Analytics</span>
        </button>
      </div>
    </div>
  );
};

export default MentorQuickActions;
