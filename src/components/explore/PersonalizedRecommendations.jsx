import React from 'react';
import MentorCard from './MentorCard';

const PersonalizedRecommendations = ({ user, recommendedMentors }) => {
  if (!user) return null;

  // Mock algorithm to get personalized recommendations based on user profile
  const getRecommendationReason = (mentor, userProfile) => {
    const reasons = [];
    
    if (userProfile.interests && mentor.expertise.some(skill => 
      userProfile.interests.includes(skill.toLowerCase()))) {
      reasons.push(`Matches your interest in ${mentor.expertise[0]}`);
    }
    
    if (userProfile.careerGoal === 'transition' && mentor.categories.includes('career')) {
      reasons.push('Perfect for career transition');
    }
    
    if (userProfile.experience === 'junior' && mentor.categories.includes('mentorship')) {
      reasons.push('Great for junior professionals');
    }
    
    if (mentor.rating >= 4.8) {
      reasons.push('Top-rated mentor');
    }
    
    return reasons[0] || 'Recommended based on your profile';
  };

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-12 border border-purple-200">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
            <i className="fas fa-magic text-white text-2xl"></i>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Recommended Just For You
        </h2>
        <p className="text-lg text-gray-600">
          Based on your profile and goals, here are mentors we think you'll love
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedMentors.slice(0, 3).map((mentor) => (
          <div key={mentor.id} className="relative">
            {/* Recommendation Badge */}
            <div className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              <i className="fas fa-sparkles mr-1"></i>
              Recommended
            </div>
            
            {/* Mentor Card */}
            <MentorCard
              mentor={mentor}
              isLoggedIn={true}
            />
            
            {/* Recommendation Reason */}
            <div className="mt-3 p-3 bg-white rounded-lg border border-purple-200 shadow-sm">
              <div className="flex items-start space-x-2">
                <i className="fas fa-lightbulb text-purple-500 mt-0.5"></i>
                <div>
                  <p className="text-sm text-purple-700 font-medium">Why we recommend:</p>
                  <p className="text-xs text-purple-600 mt-1">
                    {getRecommendationReason(mentor, user)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg">
          <i className="fas fa-robot mr-2"></i>
          View All AI Recommendations
        </button>
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;
