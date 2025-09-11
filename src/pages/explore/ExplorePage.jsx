import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import ExploreHeader from '../../components/explore/ExploreHeader';
import FilterSidebar from '../../components/explore/FilterSidebar';
import MentorGrid from '../../components/explore/MentorGrid';
import SearchBar from '../../components/explore/SearchBar';
import CategoryTabs from '../../components/explore/CategoryTabs';
import PopularTopics from '../../components/explore/PopularTopics';
import FeaturedMentors from '../../components/explore/FeaturedMentors';
import LoadingSpinner from '../../components/explore/LoadingSpinner';
import PersonalizedRecommendations from '../../components/explore/PersonalizedRecommendations';
import UserDashboardBar from '../../components/explore/UserDashboardBar';
import PremiumFilters from '../../components/explore/PremiumFilters';

const ExplorePage = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [mentors, setMentors] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    experience: '',
    rating: 0,
    availability: false,
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Mock data - this will be replaced with API calls later
    const mockMentors = [
      {
        id: 1,
        name: 'Sarah Chen',
        title: 'Career Coach & Alumni Mentor',
        company: 'Google (Alumni)',
        expertise: ['Career Guidance', 'Tech Mastery', 'System Design'],
        rating: 4.9,
        reviewCount: 127,
        hourlyRate: 120,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786',
        isFeatured: true,
        availability: 'Available',
        bio: 'Guiding students and professionals to master tech skills and navigate career transitions. Alumni mentor for college students.',
        categories: ['career', 'technology', 'alumni'],
      },
      {
        id: 2,
        name: 'Michael Rodriguez',
        title: 'Product Strategy Mentor',
        company: 'Meta (Alumni)',
        expertise: ['Career Planning', 'Product Strategy', 'Networking'],
        rating: 4.8,
        reviewCount: 89,
        hourlyRate: 150,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        isFeatured: true,
        availability: 'Busy',
        bio: 'Helping mentees with career growth, product management, and connecting with alumni networks.',
        categories: ['career', 'business', 'alumni'],
      },
      {
        id: 3,
        name: 'Emily Johnson',
        title: 'UX & Career Guidance Mentor',
        company: 'Apple (Alumni)',
        expertise: ['Career Guidance', 'UX Design', 'Portfolio Building'],
        rating: 4.9,
        reviewCount: 156,
        hourlyRate: 140,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
        isFeatured: false,
        availability: 'Available',
        bio: 'Supporting students and alumni in building strong portfolios and mastering design careers.',
        categories: ['career', 'design', 'alumni'],
      },
      {
        id: 4,
        name: 'David Kim',
        title: 'Data Science Career Mentor',
        company: 'Netflix (Alumni)',
        expertise: ['Career Guidance', 'Data Science', 'Skill Mastery'],
        rating: 4.7,
        reviewCount: 73,
        hourlyRate: 130,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        isFeatured: false,
        availability: 'Available',
        bio: 'Mentoring students and alumni in mastering data science and career transitions.',
        categories: ['career', 'data', 'alumni'],
      },
      {
        id: 5,
        name: 'Lisa Wang',
        title: 'Marketing & Career Growth Mentor',
        company: 'Stripe (Alumni)',
        expertise: ['Career Growth', 'Marketing', 'Networking'],
        rating: 4.8,
        reviewCount: 94,
        hourlyRate: 110,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
        isFeatured: true,
        availability: 'Available',
        bio: 'Helping mentees and alumni grow their careers in marketing and build strong professional networks.',
        categories: ['career', 'marketing', 'alumni'],
      },
      {
        id: 6,
        name: 'James Wilson',
        title: 'Engineering Leadership Mentor',
        company: 'Amazon (Alumni)',
        expertise: ['Career Guidance', 'Leadership', 'Skill Mastery'],
        rating: 4.9,
        reviewCount: 112,
        hourlyRate: 160,
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
        isFeatured: false,
        availability: 'Available',
        bio: 'Guiding students and alumni to become leaders in engineering and technology.',
        categories: ['career', 'leadership', 'alumni'],
      },
    ];

    // Simulate API call
    const fetchMentors = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMentors(mockMentors);
      setFilteredMentors(mockMentors);
      setLoading(false);
    };

    fetchMentors();
  }, []);

  // Filter mentors based on search and filters
  useEffect(() => {
    let filtered = mentors;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(mentor =>
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.expertise.some(skill => 
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        mentor.company.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(mentor =>
        mentor.categories.includes(selectedCategory)
      );
    }

    // Price range filter
    filtered = filtered.filter(mentor =>
      mentor.hourlyRate >= filters.priceRange[0] && mentor.hourlyRate <= filters.priceRange[1]
    );

    // Rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter(mentor => mentor.rating >= filters.rating);
    }

    // Availability filter
    if (filters.availability) {
      filtered = filtered.filter(mentor => mentor.availability === 'Available');
    }

    setFilteredMentors(filtered);
  }, [mentors, searchQuery, selectedCategory, filters]);

  const categories = [
    { id: 'all', name: 'All Categories', icon: 'fas fa-th-large' },
    { id: 'technology', name: 'Technology', icon: 'fas fa-code' },
    { id: 'business', name: 'Business', icon: 'fas fa-briefcase' },
    { id: 'design', name: 'Design', icon: 'fas fa-palette' },
    { id: 'marketing', name: 'Marketing', icon: 'fas fa-bullhorn' },
    { id: 'career', name: 'Career', icon: 'fas fa-user-tie' },
    { id: 'data', name: 'Data Science', icon: 'fas fa-chart-bar' },
    { id: 'leadership', name: 'Leadership', icon: 'fas fa-users' },
  ];

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ExploreHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect Mentor
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with mentors, alumni, and career guides for personalized support and growth.
          </p>
          {/* Search Bar Only */}
          <SearchBar 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onFilterToggle={() => {}}
          />
        </div>

        {/* Mentor List Only (no filters, no recommendations, no tabs) */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Mentors ({filteredMentors.length})
          </h2>
          <MentorGrid 
            mentors={filteredMentors}
            isLoggedIn={!!user}
          />
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
