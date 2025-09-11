import React from 'react';
import MentorCard from './MentorCard';

const MentorGrid = ({ mentors, isLoggedIn }) => {
  if (mentors.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <i className="fas fa-search text-gray-400 text-3xl"></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No mentors found</h3>
        <p className="text-gray-600 mb-6">
          Try adjusting your search criteria or filters to find more mentors.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mentors.map((mentor) => (
        <MentorCard
          key={mentor.id}
          mentor={mentor}
          isLoggedIn={isLoggedIn}
        />
      ))}
    </div>
  );
};

export default MentorGrid;
