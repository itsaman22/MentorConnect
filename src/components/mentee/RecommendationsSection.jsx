import React from 'react';

const RecommendationsSection = ({ recommendations, handleSectionClick, handleRecommendationClick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Your Recommendations</h3>
        <button 
          onClick={() => handleSectionClick('recommendations')}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          See All
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recommendations.map((rec, index) => (
          <div 
            key={index} 
            onClick={() => handleRecommendationClick(rec.type)}
            className={`${rec.bgColor} rounded-xl p-6 text-center hover:shadow-md transition-all cursor-pointer`}
          >
            <div className={`w-12 h-12 ${rec.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
              <i className={`${rec.icon} text-xl`}></i>
            </div>
            <h4 className="font-semibold text-gray-900">{rec.type}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsSection;
