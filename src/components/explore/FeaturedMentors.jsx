import React from 'react';
import MentorCard from './MentorCard';

const FeaturedMentors = ({ mentors, isLoggedIn }) => {
  if (mentors.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          <i className="fas fa-star text-yellow-500 mr-3"></i>
          Featured Mentors
        </h2>
        <p className="text-lg text-gray-600">
          Top-rated mentors with proven track records of success
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.slice(0, 3).map((mentor) => (
          <MentorCard
            key={mentor.id}
            mentor={mentor}
            isLoggedIn={isLoggedIn}
            isFeatured={true}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg">
          <i className="fas fa-crown mr-2"></i>
          View All Featured Mentors
        </button>
      </div>
    </div>
  );
};

export default FeaturedMentors;
