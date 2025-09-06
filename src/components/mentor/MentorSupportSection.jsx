import React from 'react';

const MentorSupportSection = ({ handleQuickAction }) => {
  return (
    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
      <div className="flex items-center space-x-3 mb-4">
        <i className="fas fa-headset text-2xl"></i>
        <h3 className="text-xl font-bold">Teaching Support</h3>
      </div>
      <p className="text-green-100 mb-4">
        Access teaching resources, get technical help, or connect with our mentor community.
      </p>
      <button 
        onClick={() => handleQuickAction('mentor-support')}
        className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
      >
        Get Support
      </button>
    </div>
  );
};

export default MentorSupportSection;
