import React from 'react';

const QuickActionsSection = ({ handleQuickAction }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
      
      <div className="space-y-3">
        <button 
          onClick={() => handleQuickAction('book-session')}
          className="w-full flex items-center space-x-3 p-3 text-left bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors"
        >
          <i className="fas fa-plus w-5"></i>
          <span className="font-medium">Book New Session</span>
        </button>
        
        <button 
          onClick={() => handleQuickAction('set-goal')}
          className="w-full flex items-center space-x-3 p-3 text-left bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors"
        >
          <i className="fas fa-bullseye w-5"></i>
          <span className="font-medium">Set New Goal</span>
        </button>
        
        <button 
          onClick={() => handleQuickAction('find-mentors')}
          className="w-full flex items-center space-x-3 p-3 text-left bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors"
        >
          <i className="fas fa-search w-5"></i>
          <span className="font-medium">Find Mentors</span>
        </button>
        
        <button 
          onClick={() => handleQuickAction('view-progress')}
          className="w-full flex items-center space-x-3 p-3 text-left bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-100 transition-colors"
        >
          <i className="fas fa-chart-line w-5"></i>
          <span className="font-medium">View Progress</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActionsSection;
