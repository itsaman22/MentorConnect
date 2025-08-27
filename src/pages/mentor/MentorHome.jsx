import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI, auth } from '../../services/simple-api';
import MentorNavbar from './MentorNavbar';
import MentorOnboarding from './MentorOnboarding';

const MentorHome = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const savedAuth = auth.getUser();
    
    if (!savedAuth) {
      navigate('/login');
      return;
    }

    console.log('Saved auth data:', savedAuth);

    // Check if user is a mentor
    if (savedAuth.user.userType !== 'mentor') {
      navigate('/mentee-home');
      return;
    }

    // Try to get fresh user data
    const fetchUser = async () => {
      try {
        const response = await authAPI.getMe(savedAuth.token);
        console.log('Mentor user data received:', response.user);
        setUser(response.user);
        
        // Check onboarding status - first check localStorage, then API response
        const localProfileComplete = savedAuth.user.profileComplete || false;
        const apiProfileComplete = response.user.profileComplete || false;
        const isProfileComplete = localProfileComplete || apiProfileComplete;
        
        setIsOnboardingComplete(isProfileComplete);
        
        console.log('Profile completion status:', {
          local: localProfileComplete,
          api: apiProfileComplete,
          final: isProfileComplete
        });
      } catch (error) {
        console.error('Error fetching user:', error);
        // If API call fails, use saved user data and check localStorage for profile completion
        setUser(savedAuth.user);
        const localProfileComplete = savedAuth.user.profileComplete || false;
        setIsOnboardingComplete(localProfileComplete);
        console.log('Using saved user data, profile complete:', localProfileComplete);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleOnboardingComplete = (onboardingData) => {
    console.log('Onboarding completed with data:', onboardingData);
    
    // Update local state
    setIsOnboardingComplete(true);
    setShowOnboarding(false);
    
    // Update user profile status in local state
    setUser(prev => ({ ...prev, profileComplete: true }));
    
    // Update localStorage to persist the completion
    const savedAuth = auth.getUser();
    if (savedAuth && savedAuth.user) {
      savedAuth.user.profileComplete = true;
      localStorage.setItem('auth', JSON.stringify(savedAuth));
    }
    
    // Here you would also save the onboarding data to your API
    // For now, we'll just save the completion status locally
  };

  const handleShowOnboarding = () => {
    setShowOnboarding(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show onboarding only if manually triggered, not automatically
  if (showOnboarding) {
    return <MentorOnboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Mentor Navbar */}
      <MentorNavbar user={user} onShowOnboarding={handleShowOnboarding} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome back, {user ? `${user.firstName}` : 'Mentor'}! 🎯
          </h2>
          <p className="mt-2 text-xl text-gray-600">
            Ready to inspire and guide the next generation?
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-users text-blue-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Active Mentees</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-xs text-green-600">+2 this month</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-calendar-check text-green-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Sessions This Month</p>
                <p className="text-2xl font-bold text-gray-900">28</p>
                <p className="text-xs text-green-600">+12% from last month</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-dollar-sign text-yellow-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Earnings This Month</p>
                <p className="text-2xl font-bold text-gray-900">$2,450</p>
                <p className="text-xs text-green-600">+18% from last month</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-star text-purple-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.9</p>
                <p className="text-xs text-gray-500">Based on 47 reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-user-plus text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 ml-3">New Mentee Requests</h3>
            </div>
            <p className="text-gray-600 mb-4">Review and respond to mentorship requests from potential mentees</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">3 pending requests</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Review Requests
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-calendar-plus text-green-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 ml-3">Schedule Session</h3>
            </div>
            <p className="text-gray-600 mb-4">Book a new mentoring session with your mentees</p>
            <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Schedule Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-clock text-purple-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 ml-3">Availability</h3>
            </div>
            <p className="text-gray-600 mb-4">Update your availability and time slots for mentoring</p>
            <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Manage Availability
            </button>
          </div>
        </div>

        {/* Dashboard Sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Sessions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Upcoming Sessions</h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Sarah Johnson', topic: 'Career Transition', time: '2:00 PM - 3:00 PM', date: 'Today' },
                { name: 'Mike Chen', topic: 'Technical Interview Prep', time: '4:00 PM - 5:00 PM', date: 'Today' },
                { name: 'Emma Davis', topic: 'Product Management', time: '10:00 AM - 11:00 AM', date: 'Tomorrow' }
              ].map((session, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">
                        {session.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">{session.name}</p>
                      <p className="text-sm text-gray-600">{session.topic}</p>
                      <p className="text-xs text-gray-500">{session.date} • {session.time}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    <i className="fas fa-video"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
            </div>
            <div className="space-y-4">
              {[
                { icon: 'fas fa-star', text: 'Received 5-star review from Alex Thompson', time: '2 hours ago', color: 'yellow' },
                { icon: 'fas fa-user-plus', text: 'New mentee request from Jessica Lee', time: '4 hours ago', color: 'blue' },
                { icon: 'fas fa-calendar-check', text: 'Completed session with David Kim', time: '1 day ago', color: 'green' },
                { icon: 'fas fa-dollar-sign', text: 'Payment received: $150', time: '2 days ago', color: 'green' }
              ].map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-8 h-8 bg-${activity.color}-100 rounded-full flex items-center justify-center mt-1`}>
                    <i className={`${activity.icon} text-${activity.color}-600 text-sm`}></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900">{activity.text}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Info for Development */}
        {user && (
          <div className="mt-8 bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800">Mentor Information:</h4>
            <p className="text-green-700">Name: {user.firstName} {user.lastName}</p>
            <p className="text-green-700">Email: {user.email}</p>
            <p className="text-green-700">Type: {user.userType}</p>
            <p className="text-green-700">Profile Complete: {isOnboardingComplete ? 'Yes' : 'No'}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default MentorHome;
