import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI, auth } from '../../services/simple-api';

const SimpleMenteeHome = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');

  // Sample data for dashboard
  const [ongoingSessions] = useState([
    {
      id: 1,
      mentor: "Ramesh Singh",
      topic: "React Development",
      timeLeft: "2 days left",
      status: "In Progress",
      type: "Next Session"
    },
    {
      id: 2,
      mentor: "Sarah Wilson",
      topic: "Career Planning",
      timeLeft: "5 days left",
      status: "Scheduled",
      type: "Upcoming"
    },
    {
      id: 3,
      mentor: "Mike Johnson",
      topic: "Portfolio Review",
      timeLeft: "1 week left",
      status: "Pending",
      type: "To Schedule"
    }
  ]);

  const [pinnedConversations] = useState([
    {
      id: 1,
      name: "Jessica Chen",
      verified: true,
      message: "Hey! Let's discuss your project progress...",
      time: "Today",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "David Rodriguez",
      verified: true,
      message: "Great work on the React components!",
      time: "Today",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Parker",
      verified: false,
      message: "Can we schedule our next meeting?",
      time: "Yesterday",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ]);

  const [recommendations] = useState([
    { type: "Books", icon: "fas fa-book", color: "bg-red-100 text-red-600", bgColor: "bg-red-50" },
    { type: "Videos", icon: "fas fa-play", color: "bg-blue-100 text-blue-600", bgColor: "bg-blue-50" },
    { type: "Courses", icon: "fas fa-graduation-cap", color: "bg-green-100 text-green-600", bgColor: "bg-green-50" },
    { type: "Articles", icon: "fas fa-newspaper", color: "bg-purple-100 text-purple-600", bgColor: "bg-purple-50" }
  ]);

  const handleLogout = () => {
    // Clear user authentication
    auth.clearUser();
    // Redirect to homepage
    navigate('/');
  };

  useEffect(() => {
    // Check if user is logged in
    const savedAuth = auth.getUser();
    
    if (!savedAuth) {
      navigate('/login');
      return;
    }

    // Check if user is a mentor and redirect to mentor dashboard
    if (savedAuth.user.userType === 'mentor') {
      navigate('/mentor-home');
      return;
    }

    // Try to get fresh user data
    const fetchUser = async () => {
      try {
        const response = await authAPI.getMe(savedAuth.token);
        setUser(response.user);
        
        // Double check user type from server response
        if (response.user.userType === 'mentor') {
          navigate('/mentor-home');
          return;
        }
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-300 animate-pulse"></div>
          </div>
          <p className="mt-6 text-gray-700 font-medium text-lg">Loading your dashboard...</p>
          <p className="mt-2 text-gray-500">Please wait while we prepare your learning experience</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-poppins flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg fixed h-full z-10">
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {user ? user.firstName.charAt(0) : 'M'}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                {user ? `${user.firstName} ${user.lastName}` : 'Mentee'}
              </h3>
              <p className="text-sm text-gray-500">Mentee</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="py-4">
          <div className="px-6 py-2">
            <button 
              onClick={() => setActiveSection('dashboard')}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeSection === 'dashboard' 
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <i className="fas fa-home w-5"></i>
              <span>Dashboard</span>
            </button>
          </div>

          <div className="px-6 py-1">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">My Activities</h4>
            
            <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors">
              <i className="fas fa-comments w-5"></i>
              <span>Messages</span>
              <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">3</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors mt-1">
              <i className="fas fa-calendar-alt w-5"></i>
              <span>Calendar</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors mt-1">
              <i className="fas fa-video w-5"></i>
              <span>Info Session</span>
            </button>
          </div>

          <div className="px-6 py-1 mt-4">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Account Settings</h4>
            
            <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors">
              <i className="fas fa-user w-5"></i>
              <span>Personal Info</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors mt-1">
              <i className="fas fa-shield-alt w-5"></i>
              <span>Login & Security</span>
            </button>
            
            <button 
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors mt-1"
            >
              <i className="fas fa-sign-out-alt w-5"></i>
              <span>Logout</span>
            </button>
          </div>
        </nav>

        {/* Help Section */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <i className="fas fa-question-circle text-blue-600"></i>
              <span className="font-medium text-blue-900">Need Help?</span>
            </div>
            <p className="text-sm text-blue-700 mb-3">Check our guides and tutorials</p>
            <button className="w-full bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
              Help Center
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <i className="fas fa-bell text-xl"></i>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {user ? user.firstName.charAt(0) : 'M'}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">
                  Welcome Back, {user ? user.firstName : 'Mentee'}!
                </h2>
                <p className="text-blue-100 text-lg mb-6">
                  Manage all the things from single Dashboard. See latest info sessions, recent conversations and update your recommendations.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Browse Mentors
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                    View Goals
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="w-64 h-48 bg-white bg-opacity-10 rounded-2xl flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-6xl text-white opacity-80"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Sessions */}
            <div className="lg:col-span-2 space-y-6">
              {/* Ongoing Info Sessions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Ongoing Info Sessions</h3>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">See All</button>
                </div>
                
                <div className="space-y-4">
                  {ongoingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <i className="fas fa-video text-blue-600"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{session.topic}</h4>
                          <p className="text-sm text-gray-600">with {session.mentor}</p>
                          <p className="text-xs text-blue-600 font-medium">{session.timeLeft}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          session.status === 'In Progress' ? 'bg-green-100 text-green-600' :
                          session.status === 'Scheduled' ? 'bg-blue-100 text-blue-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          {session.status}
                        </span>
                        <button className="block mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                          {session.type === 'Next Session' ? 'Join' : 'Schedule'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Your Recommendations */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Your Recommendations</h3>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">See All</button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className={`${rec.bgColor} rounded-xl p-6 text-center hover:shadow-md transition-all cursor-pointer`}>
                      <div className={`w-12 h-12 ${rec.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                        <i className={`${rec.icon} text-xl`}></i>
                      </div>
                      <h4 className="font-semibold text-gray-900">{rec.type}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* SMART Goals Progress */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">SMART Goals Progress</h3>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">Manage Goals</button>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">Master React Framework</h4>
                      <span className="text-sm text-gray-500">Due: Sep 15, 2025</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-600 h-3 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-blue-600">75%</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">3 of 4 milestones completed</p>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">Build Portfolio Website</h4>
                      <span className="text-sm text-gray-500">Due: Oct 1, 2025</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div className="bg-green-600 h-3 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-green-600">45%</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">2 of 5 milestones completed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Conversations & Quick Actions */}
            <div className="space-y-6">
              {/* Pinned Conversations */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Pinned Conversations</h3>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
                </div>
                
                <div className="space-y-4">
                  {pinnedConversations.map((conversation) => (
                    <div key={conversation.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
                      <div className="relative">
                        <img 
                          src={conversation.avatar} 
                          alt={conversation.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        {conversation.verified && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                            <i className="fas fa-check text-white text-xs"></i>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900 truncate">{conversation.name}</h4>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{conversation.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 text-left bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors">
                    <i className="fas fa-plus w-5"></i>
                    <span className="font-medium">Book New Session</span>
                  </button>
                  
                  <button className="w-full flex items-center space-x-3 p-3 text-left bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors">
                    <i className="fas fa-bullseye w-5"></i>
                    <span className="font-medium">Set New Goal</span>
                  </button>
                  
                  <button className="w-full flex items-center space-x-3 p-3 text-left bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors">
                    <i className="fas fa-search w-5"></i>
                    <span className="font-medium">Find Mentors</span>
                  </button>
                  
                  <button className="w-full flex items-center space-x-3 p-3 text-left bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-100 transition-colors">
                    <i className="fas fa-chart-line w-5"></i>
                    <span className="font-medium">View Progress</span>
                  </button>
                </div>
              </div>

              {/* Help & Support */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <i className="fas fa-headset text-2xl"></i>
                  <h3 className="text-xl font-bold">Need Support?</h3>
                </div>
                <p className="text-blue-100 mb-4">
                  Get help with platform navigation, technical issues, or mentorship guidance.
                </p>
                <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SimpleMenteeHome;
