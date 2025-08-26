import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../../services/api';

const MenteeHome = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Redirect to login page
    navigate('/');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await apiService.getMe(token);
        // The API returns { success: true, user: {...} }
        setUserData(response.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Redirect to login if token is invalid
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-gray-800">MentorConnect</h2>
            </div>
            <div className="flex items-center space-x-4">
              {userData && (
                <span className="text-gray-700">
                  Hello, {userData.firstName}
                </span>
              )}
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome {userData ? `${userData.firstName} ${userData.lastName}` : 'Mentee'}!
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Your mentorship journey begins here
          </p>
        </div>

        <div className="mt-10">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Dashboard
            </h2>
            {/* Add your dashboard content here */}
            <p className="text-gray-600">
              Start exploring available mentors and connect with them to begin your learning journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeHome;
