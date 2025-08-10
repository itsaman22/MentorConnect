import React, { useEffect, useState } from 'react';

const MenteeHome = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch('http://localhost:5000/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
