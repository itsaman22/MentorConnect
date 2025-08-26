import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI, auth } from '../../services/simple-api';

const SimpleMenteeHome = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const savedAuth = auth.getUser();
    
    if (!savedAuth) {
      navigate('/login');
      return;
    }

    // Try to get fresh user data
    const fetchUser = async () => {
      try {
        const response = await authAPI.getMe(savedAuth.token);
        setUser(response.user);
      } catch (error) {
        console.error('Error fetching user:', error);
        // If token is invalid, redirect to login
        auth.clearUser();
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    auth.clearUser();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">MentorConnect</h1>
            <div className="flex items-center space-x-4">
              {user && (
                <span className="text-gray-700">
                  Hello, {user.firstName}!
                </span>
              )}
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome, {user ? `${user.firstName} ${user.lastName}` : 'Mentee'}!
          </h2>
          <p className="mt-2 text-xl text-gray-600">
            Your mentorship journey starts here
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">Find Mentors</h3>
            <p className="mt-2 text-gray-600">Browse and connect with experienced mentors</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Browse Mentors
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">My Sessions</h3>
            <p className="mt-2 text-gray-600">View your upcoming and past mentoring sessions</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              View Sessions
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">Profile</h3>
            <p className="mt-2 text-gray-600">Update your profile and preferences</p>
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Edit Profile
            </button>
          </div>
        </div>

        {/* User Info for Development */}
        {user && (
          <div className="mt-8 bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800">User Information:</h4>
            <p className="text-blue-700">Name: {user.firstName} {user.lastName}</p>
            <p className="text-blue-700">Email: {user.email}</p>
            <p className="text-blue-700">Type: {user.userType}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default SimpleMenteeHome;
