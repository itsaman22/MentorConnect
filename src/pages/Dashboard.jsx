import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mentors, setMentors] = useState([]);
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      fetchMentors();
      fetchConnections();
    }
  }, [user]);

  const fetchMentors = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/mentors');
      const data = await response.json();
      setMentors(data);
    } catch (error) {
      console.error('Error fetching mentors:', error);
    }
  };

  const fetchConnections = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/connections/${user.id}`);
      const data = await response.json();
      setConnections(data);
    } catch (error) {
      console.error('Error fetching connections:', error);
    }
  };

  const connectWithMentor = async (mentorId) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mentorId,
          menteeId: user.id,
          message: `Hi! I'm ${user.name} and I'd love to connect with you for mentorship.`
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Connection request sent successfully!');
        fetchConnections(); // Refresh connections
      }
    } catch (error) {
      console.error('Error connecting:', error);
      alert('Error sending connection request');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Please log in</h2>
          <button 
            onClick={() => navigate('/login')}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">MentorConnect</h1>
              <p className="text-gray-600">Welcome back, {user.name}!</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {user.role}
              </span>
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

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {user.role === 'mentee' ? (
          // Mentee Dashboard
          <div className="space-y-6">
            {/* Available Mentors */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Available Mentors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mentors.map(mentor => (
                    <div key={mentor.id} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900">{mentor.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{mentor.bio}</p>
                      <p className="text-sm text-gray-500 mb-2">Experience: {mentor.experience}</p>
                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Skills:</p>
                        <div className="flex flex-wrap gap-1">
                          {mentor.skills?.map((skill, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => connectWithMentor(mentor.id)}
                        disabled={loading || connections.some(conn => conn.mentorId === mentor.id)}
                        className="w-full bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 disabled:bg-gray-400"
                      >
                        {connections.some(conn => conn.mentorId === mentor.id) ? 'Already Connected' : 'Connect'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* My Connections */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">My Connections</h3>
                {connections.length === 0 ? (
                  <p className="text-gray-500">No connections yet. Connect with mentors above!</p>
                ) : (
                  <div className="space-y-3">
                    {connections.map(connection => (
                      <div key={connection.id} className="border rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{connection.mentor?.name}</h4>
                            <p className="text-sm text-gray-600">{connection.message}</p>
                            <p className="text-xs text-gray-500">
                              Connected on: {new Date(connection.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            connection.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {connection.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Mentor Dashboard
          <div className="space-y-6">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Mentorship Requests</h3>
                {connections.length === 0 ? (
                  <p className="text-gray-500">No mentorship requests yet.</p>
                ) : (
                  <div className="space-y-3">
                    {connections.map(connection => (
                      <div key={connection.id} className="border rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{connection.mentee?.name}</h4>
                            <p className="text-sm text-gray-600">{connection.message}</p>
                            <p className="text-xs text-gray-500">
                              Requested on: {new Date(connection.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            connection.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {connection.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
