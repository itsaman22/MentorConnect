import React from 'react';
import { Link } from 'react-router-dom';

const MentorCard = ({ mentor, isLoggedIn, isFeatured = false }) => {
  const handleBookSession = () => {
    if (!isLoggedIn) {
      // Redirect to login
      window.location.href = '/login';
      return;
    }
    // Handle booking logic
    console.log('Booking session with', mentor.name);
  };

  const handleSendMessage = () => {
    if (!isLoggedIn) {
      // Redirect to login
      window.location.href = '/login';
      return;
    }
    // Handle messaging logic
    console.log('Sending message to', mentor.name);
  };

  const handleFavorite = () => {
    if (!isLoggedIn) {
      // Redirect to login
      window.location.href = '/login';
      return;
    }
    // Handle favorite logic
    console.log('Adding to favorites', mentor.name);
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
      isFeatured ? 'ring-2 ring-yellow-400' : ''
    }`}>
      {isFeatured && (
        <div className="bg-yellow-400 text-yellow-900 text-center py-1 text-sm font-semibold">
          <i className="fas fa-star mr-1"></i>
          Featured Mentor
        </div>
      )}
      
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <img
              src={mentor.avatar}
              alt={mentor.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
              <p className="text-gray-600 font-medium">{mentor.title}</p>
              <p className="text-blue-600 text-sm">{mentor.company}</p>
            </div>
          </div>
          
          {/* Availability Badge */}
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
            mentor.availability === 'Available' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {mentor.availability}
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {mentor.bio}
        </p>

        {/* Expertise Tags */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {mentor.expertise.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
            {mentor.expertise.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                +{mentor.expertise.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Rating and Price */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <i className="fas fa-star text-yellow-400"></i>
              <span className="ml-1 font-semibold text-gray-900">{mentor.rating}</span>
            </div>
            <span className="text-gray-500 text-sm">({mentor.reviewCount} reviews)</span>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">${mentor.hourlyRate}</div>
            <div className="text-sm text-gray-500">per hour</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Primary Action - Book Session */}
          <button
            onClick={handleBookSession}
            disabled={mentor.availability !== 'Available'}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
              mentor.availability === 'Available'
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {mentor.availability === 'Available' ? 'Book Session' : 'Currently Unavailable'}
          </button>

          {/* Secondary Actions */}
          <div className="flex space-x-2">
            <button
              onClick={handleSendMessage}
              className="flex-1 py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              <i className="fas fa-envelope mr-2"></i>
              Message
            </button>
            <button
              onClick={handleFavorite}
              className="py-2 px-4 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <i className="far fa-heart"></i>
            </button>
            <Link
              to={`/mentor/${mentor.id}`}
              className="py-2 px-4 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <i className="fas fa-eye"></i>
            </Link>
          </div>
        </div>

        {/* Login Prompt for Non-logged Users */}
        {!isLoggedIn && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800 text-center mb-2">
              <Link to="/login" className="font-semibold hover:underline">
                Login
              </Link> to unlock premium features:
            </p>
            <div className="text-xs text-blue-700 space-y-1">
              <div>• Book 1-on-1 sessions</div>
              <div>• Direct messaging</div>
              <div>• Save favorites</div>
              <div>• View contact details</div>
              <div>• Access session history</div>
              <div>• Get personalized recommendations</div>
            </div>
          </div>
        )}

        {/* Premium Badge for Registered Users */}
        {isLoggedIn && (
          <div className="mt-4 p-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <div className="flex items-center justify-center text-green-700">
              <i className="fas fa-crown text-yellow-500 mr-2"></i>
              <span className="text-sm font-semibold">Premium Access Unlocked</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorCard;
