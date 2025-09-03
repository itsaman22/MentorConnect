import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-300 animate-pulse"></div>
        </div>
        <p className="mt-6 text-gray-700 font-medium text-lg">Loading your dashboard...</p>
        <p className="mt-2 text-gray-500">Please wait while we prepare your learning experience</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
