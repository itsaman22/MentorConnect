import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/simple-api';

// Import all the mentor component pieces
import LoadingScreen from '../../components/mentee/LoadingScreen'; // Reusing the same loading screen
import MentorSidebar from '../../components/mentor/MentorSidebar';
import MentorHeader from '../../components/mentor/MentorHeader';
import MentorWelcomeSection from '../../components/mentor/MentorWelcomeSection';
import MentorStatsCards from '../../components/mentor/MentorStatsCards';
import UpcomingSessionsSection from '../../components/mentor/UpcomingSessionsSection';
import CoursesSection from '../../components/mentor/CoursesSection';
import StudentsProgressSection from '../../components/mentor/StudentsProgressSection';
import MentorQuickActions from '../../components/mentor/MentorQuickActions';
import MentorSupportSection from '../../components/mentor/MentorSupportSection';

const MentorHomeNew = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const navigate = useNavigate();

  // Sample data for mentor dashboard
  const mentorStats = {
    activeStudents: 24,
    newStudents: 5,
    totalSessions: 186,
    sessionGrowth: 15,
    activeCourses: 6,
    completionRate: 87,
    rating: 4.8,
    reviews: 142
  };

  const upcomingSessions = [
    {
      id: 1,
      title: "React Advanced Concepts",
      student: "John Smith",
      time: "Today, 2:00 PM",
      status: "Starting Soon",
      type: "live"
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      student: "Sarah Wilson",
      time: "Tomorrow, 10:00 AM",
      status: "Scheduled",
      type: "video"
    },
    {
      id: 3,
      title: "Career Guidance Session",
      student: "Mike Johnson",
      time: "Today, 4:30 PM",
      status: "Confirmed",
      type: "video"
    }
  ];

  const activeCourses = [
    {
      id: 1,
      title: "Complete React Development",
      description: "Build modern web applications with React",
      students: 45,
      progress: 75,
      status: "Active",
      color: "bg-blue-500",
      icon: "fab fa-react"
    },
    {
      id: 2,
      title: "JavaScript Mastery",
      description: "From basics to advanced JavaScript concepts",
      students: 32,
      progress: 60,
      status: "Active",
      color: "bg-yellow-500",
      icon: "fab fa-js-square"
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      description: "Server-side development with Node.js",
      students: 28,
      progress: 40,
      status: "Draft",
      color: "bg-green-500",
      icon: "fab fa-node-js"
    },
    {
      id: 4,
      title: "Full Stack Project",
      description: "End-to-end application development",
      students: 15,
      progress: 90,
      status: "Active",
      color: "bg-purple-500",
      icon: "fas fa-code"
    }
  ];

  const recentStudents = [
    {
      id: 1,
      name: "Alice Johnson",
      course: "React Development",
      progress: 85,
      lastActive: "2 hours ago",
      status: "online",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Bob Smith",
      course: "JavaScript Mastery",
      progress: 67,
      lastActive: "1 day ago",
      status: "offline",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Carol Davis",
      course: "Node.js Backend",
      progress: 45,
      lastActive: "3 hours ago",
      status: "online",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Wilson",
      course: "Full Stack Project",
      progress: 92,
      lastActive: "30 minutes ago",
      status: "online",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
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
      case 'courses':
        alert('Opening Courses Management - Feature coming soon!');
        break;
      case 'sessions':
        alert('Opening Sessions Management - Feature coming soon!');
        break;
      case 'students':
        alert('Opening Student Management - Feature coming soon!');
        break;
      case 'schedule':
        alert('Opening Schedule - Feature coming soon!');
        break;
      case 'assignments':
        alert('Opening Assignments - Feature coming soon!');
        break;
      case 'progress':
        alert('Opening Progress Tracking - Feature coming soon!');
        break;
      case 'resources':
        alert('Opening Resources - Feature coming soon!');
        break;
      case 'profile':
        alert('Opening Profile Settings - Feature coming soon!');
        break;
      case 'settings':
        alert('Opening Settings - Feature coming soon!');
        break;
      default:
        break;
    }
  };

  // Handle session actions
  const handleSessionAction = (sessionId, action) => {
    console.log(`Session ${sessionId}: ${action}`);
    alert(`${action} session ${sessionId} - Feature coming soon!`);
  };

  // Handle course actions
  const handleCourseAction = (courseId) => {
    console.log(`Opening course: ${courseId}`);
    alert(`Opening course ${courseId} - Feature coming soon!`);
  };

  // Handle student clicks
  const handleStudentClick = (studentId) => {
    console.log(`Opening student profile: ${studentId}`);
    alert(`Opening student ${studentId} profile - Feature coming soon!`);
  };

  // Handle quick actions
  const handleQuickAction = (action) => {
    console.log(`Quick action: ${action}`);
    switch(action) {
      case 'create-course':
        alert('Opening course creation form - Feature coming soon!');
        break;
      case 'schedule-session':
        alert('Opening session scheduling - Feature coming soon!');
        break;
      case 'create-assignment':
        alert('Opening assignment creation - Feature coming soon!');
        break;
      case 'upload-resource':
        alert('Opening resource upload - Feature coming soon!');
        break;
      case 'student-progress':
        handleSectionClick('progress');
        break;
      case 'mentor-support':
        alert('Opening mentor support - Feature coming soon!');
        break;
      case 'help-center':
        alert('Opening mentor help center - Feature coming soon!');
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

    // Check if user is a mentee and redirect to mentee dashboard
    if (savedAuth.user.userType === 'mentee') {
      navigate('/mentee-home');
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
      <MentorSidebar
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
        <MentorHeader
          activeSection={activeSection}
          handleSectionClick={handleSectionClick}
          user={user}
        />

        {/* Dashboard Content */}
        <main className="p-8">
          {/* Welcome Section */}
          <MentorWelcomeSection user={user} handleSectionClick={handleSectionClick} />

          {/* Stats Cards */}
          <MentorStatsCards stats={mentorStats} />

          {/* Main Dashboard Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Sessions & Courses */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upcoming Sessions */}
              <UpcomingSessionsSection
                sessions={upcomingSessions}
                handleSectionClick={handleSectionClick}
                handleSessionAction={handleSessionAction}
              />

              {/* My Courses */}
              <CoursesSection
                courses={activeCourses}
                handleSectionClick={handleSectionClick}
                handleCourseAction={handleCourseAction}
              />
            </div>

            {/* Right Column - Students & Quick Actions */}
            <div className="space-y-6">
              {/* Recent Student Activity */}
              <StudentsProgressSection
                students={recentStudents}
                handleSectionClick={handleSectionClick}
                handleStudentClick={handleStudentClick}
              />

              {/* Quick Actions */}
              <MentorQuickActions handleQuickAction={handleQuickAction} />

              {/* Teaching Support */}
              <MentorSupportSection handleQuickAction={handleQuickAction} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MentorHomeNew;
