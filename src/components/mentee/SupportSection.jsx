import React from 'react';

const SupportSection = ({ handleQuickAction }) => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
      <div className="flex items-center space-x-3 mb-4">
        <i className="fas fa-headset text-2xl"></i>
        <h3 className="text-xl font-bold">Need Support?</h3>
      </div>
      <p className="text-blue-100 mb-4">
        Get help with platform navigation, technical issues, or mentorship guidance.
      </p>
      <button 
        onClick={() => handleQuickAction('contact-support')}
        className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
      >
        Contact Support
      </button>
    </div>
  );
};

export default SupportSection;
