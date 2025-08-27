import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../services/simple-api';

const MenteeNavbar = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.clearUser();
    navigate('/');
  };

  return (
    <header className="flex justify-between items-center p-5 md:px-16 bg-white shadow-sm border-b border-gray-100">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/mentee-home" className="flex items-center">
          <i className="fas fa-handshake mr-2 text-gray-900"></i> 
          <span className="text-gray-900">MentorConnect</span>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="md:flex md:items-center">
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        
        {/* Navigation Links */}
        <ul className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex md:flex-row md:space-y-0 md:space-x-6 font-medium absolute md:static md:bg-transparent bg-white md:p-0 p-4 top-16 right-5 shadow-md rounded-lg md:shadow-none z-20`}>
          <li>
            <Link 
              to="/mentee-home" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-600 transition-colors"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/find-mentors" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-600 transition-colors"
            >
              Find Mentors
            </Link>
          </li>
          <li>
            <Link 
              to="/my-sessions" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-600 transition-colors"
            >
              My Sessions
            </Link>
          </li>
          <li>
            <Link 
              to="/my-goals" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-600 transition-colors"
            >
              My Goals
            </Link>
          </li>
          <li>
            <Link 
              to="/messages" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-600 transition-colors"
            >
              Messages
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Profile & Actions */}
      <div className="flex items-center space-x-4">
        {/* User Welcome */}
        {user && (
          <div className="hidden md:flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {user.firstName?.charAt(0)?.toUpperCase()}
              </span>
            </div>
            <span className="text-gray-700 font-medium">
              Hello, {user.firstName}!
            </span>
          </div>
        )}

        {/* Profile Dropdown */}
        <div className="relative group">
          <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
            <i className="fas fa-user-circle text-xl"></i>
            <i className="fas fa-chevron-down text-xs"></i>
          </button>
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
            <div className="py-2">
              <Link 
                to="/profile" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
              >
                <i className="fas fa-user mr-2"></i>
                My Profile
              </Link>
              <Link 
                to="/settings" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
              >
                <i className="fas fa-cog mr-2"></i>
                Settings
              </Link>
              <Link 
                to="/help" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
              >
                <i className="fas fa-question-circle mr-2"></i>
                Help
              </Link>
              <hr className="my-1" />
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
              >
                <i className="fas fa-sign-out-alt mr-2"></i>
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <button className="relative text-gray-700 hover:text-blue-600 transition-colors">
          <i className="fas fa-bell text-xl"></i>
          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </button>
      </div>
    </header>
  );
};

export default MenteeNavbar;
