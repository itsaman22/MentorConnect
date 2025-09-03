import React from 'react';

const GoalsSection = ({ handleSectionClick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">SMART Goals Progress</h3>
        <button 
          onClick={() => handleSectionClick('goals')}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Manage Goals
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 border border-gray-200 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">Master React Framework</h4>
            <span className="text-sm text-gray-500">Due: Sep 15, 2025</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex-1 bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full" style={{width: '75%'}}></div>
            </div>
            <span className="text-sm font-medium text-blue-600">75%</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">3 of 4 milestones completed</p>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">Build Portfolio Website</h4>
            <span className="text-sm text-gray-500">Due: Oct 1, 2025</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex-1 bg-gray-200 rounded-full h-3">
              <div className="bg-green-600 h-3 rounded-full" style={{width: '45%'}}></div>
            </div>
            <span className="text-sm font-medium text-green-600">45%</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">2 of 5 milestones completed</p>
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;
