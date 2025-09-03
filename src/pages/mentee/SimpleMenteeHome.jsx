import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/simple-api';

// Import all the component pieces
import LoadingScreen from '../../components/mentee/LoadingScreen';
import MenteeSidebar from '../../components/mentee/MenteeSidebar';
import MenteeHeader from '../../components/mentee/MenteeHeader';
import WelcomeSection from '../../components/mentee/WelcomeSection';
import SessionsSection from '../../components/mentee/SessionsSection';
import RecommendationsSection from '../../components/mentee/RecommendationsSection';
import GoalsSection from '../../components/mentee/GoalsSection';
import ConversationsSection from '../../components/mentee/ConversationsSection';
import QuickActionsSection from '../../components/mentee/QuickActionsSection';
import SupportSection from '../../components/mentee/SupportSection';

const SimpleMenteeHomeRefactored = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const navigate = useNavigate();

  // Sample data - in real app this would come from API
  const ongoingSessions = [
    { id: 1, topic: "React Fundamentals", mentor: "John Smith", timeLeft: "30 min left", status: "In Progress", type: "join" },
    { id: 2, topic: "JavaScript ES6", mentor: "Sarah Johnson", timeLeft: "Starts in 2 hours", status: "Scheduled", type: "schedule" },
    { id: 3, topic: "Career Guidance", mentor: "Mike Davis", timeLeft: "Tomorrow 3 PM", status: "Upcoming", type: "schedule" }
  ];

  const recommendations = [
    { type: "React", bgColor: "bg-blue-50", color: "bg-blue-100", icon: "fab fa-react text-blue-600" },
    { type: "JavaScript", bgColor: "bg-yellow-50", color: "bg-yellow-100", icon: "fab fa-js-square text-yellow-600" },
    { type: "Node.js", bgColor: "bg-green-50", color: "bg-green-100", icon: "fab fa-node-js text-green-600" },
    { type: "Python", bgColor: "bg-purple-50", color: "bg-purple-100", icon: "fab fa-python text-purple-600" }
  ];

  const pinnedConversations = [
    { id: 1, name: "Sarah Johnson", avatar: "/api/placeholder/40/40", message: "Great progress on your React project!", time: "2m", verified: true },
    { id: 2, name: "Mike Davis", avatar: "/api/placeholder/40/40", message: "Let's schedule a follow-up session", time: "1h", verified: true },
    { id: 3, name: "John Smith", avatar: "/api/placeholder/40/40", message: "Check out this resource I shared", time: "3h", verified: false }
  ];

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Handle different section clicks
  const handleSectionClick = (section) => {
    setActiveSection(section);
    console.log(`Clicked on: ${section}`);
    
    // Add specific actions for each section
    switch(section) {
      case 'messages':
        alert('Opening Messages - Feature coming soon!');
        break;
      case 'calendar':
        alert('Opening Calendar - Feature coming soon!');
        break;
      case 'info-session':
        alert('Opening Info Session - Feature coming soon!');
        break;
      case 'personal-info':
        alert('Opening Personal Info - Feature coming soon!');
        break;
      case 'login-security':
        alert('Opening Login & Security - Feature coming soon!');
        break;
      default:
        break;
    }
  };

  // Handle session actions
  const handleSessionAction = (sessionId, action) => {
    console.log(`Session ${sessionId}: ${action}`);
    alert(`${action} for session ${sessionId} - Feature coming soon!`);
  };

  // Handle conversation click
  const handleConversationClick = (conversationId) => {
    console.log(`Opening conversation: ${conversationId}`);
    alert(`Opening conversation ${conversationId} - Feature coming soon!`);
  };

  // Handle recommendation click
  const handleRecommendationClick = (type) => {
    console.log(`Clicked on recommendation: ${type}`);
    alert(`Opening ${type} recommendations - Feature coming soon!`);
  };

  // Handle quick actions
  const handleQuickAction = (action) => {
    console.log(`Quick action: ${action}`);
    switch(action) {
      case 'book-session':
        alert('Opening session booking form - Feature coming soon!');
        break;
      case 'set-goal':
        alert('Opening goal setting form - Feature coming soon!');
        break;
      case 'find-mentors':
        handleSectionClick('browse-mentors');
        break;
      case 'view-progress':
        handleSectionClick('goals');
        break;
      case 'contact-support':
        alert('Opening support form - Feature coming soon!');
        break;
      case 'help-center':
        alert('Opening help center - Feature coming soon!');
        break;
      default:
        alert(`${action} - Feature coming soon!`);
    }
  };

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

    // Simulate loading user data
    const fetchUser = async () => {
      try {
        setUser(savedAuth.user);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-poppins flex">
      {/* Sidebar */}
      <MenteeSidebar
        sidebarCollapsed={sidebarCollapsed}
        toggleSidebar={toggleSidebar}
        user={user}
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
        handleLogout={handleLogout}
        handleQuickAction={handleQuickAction}
      />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        {/* Top Header */}
        <MenteeHeader
          sidebarCollapsed={sidebarCollapsed}
          activeSection={activeSection}
          handleSectionClick={handleSectionClick}
          user={user}
        />

        {/* Dashboard Content */}
        <main className="p-8">
          {/* Welcome Section */}
          <WelcomeSection user={user} handleSectionClick={handleSectionClick} />

          {/* Main Dashboard Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Sessions */}
            <div className="lg:col-span-2 space-y-6">
              {/* Ongoing Info Sessions */}
              <SessionsSection
                ongoingSessions={ongoingSessions}
                handleSectionClick={handleSectionClick}
                handleSessionAction={handleSessionAction}
              />

              {/* Your Recommendations */}
              <RecommendationsSection
                recommendations={recommendations}
                handleSectionClick={handleSectionClick}
                handleRecommendationClick={handleRecommendationClick}
              />

              {/* SMART Goals Progress */}
              <GoalsSection handleSectionClick={handleSectionClick} />
            </div>

            {/* Right Column - Conversations & Quick Actions */}
            <div className="space-y-6">
              {/* Pinned Conversations */}
              <ConversationsSection
                pinnedConversations={pinnedConversations}
                handleSectionClick={handleSectionClick}
                handleConversationClick={handleConversationClick}
              />

              {/* Quick Actions */}
              <QuickActionsSection handleQuickAction={handleQuickAction} />

              {/* Help & Support */}
              <SupportSection handleQuickAction={handleQuickAction} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SimpleMenteeHomeRefactored;
