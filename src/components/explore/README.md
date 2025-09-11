# Explore Components

This folder contains all the modular components for the Explore page functionality.

## Components Overview

### Core Components
- **ExplorePage.jsx** - Main explore page component
- **ExploreHeader.jsx** - Header/navigation with auth status
- **SearchBar.jsx** - Search functionality with quick suggestions
- **CategoryTabs.jsx** - Filter by categories (Technology, Business, etc.)

### Content Components
- **MentorCard.jsx** - Individual mentor display card with premium features
- **MentorGrid.jsx** - Grid layout for mentor cards
- **FeaturedMentors.jsx** - Showcase for featured mentors
- **PopularTopics.jsx** - Display trending mentorship topics

### Premium User Components
- **PersonalizedRecommendations.jsx** - AI-powered mentor recommendations
- **UserDashboardBar.jsx** - User stats and quick actions
- **PremiumFilters.jsx** - Advanced filtering options for registered users

### Filter Components
- **FilterSidebar.jsx** - Basic filtering options (price, rating, availability)

### Utility Components
- **LoadingSpinner.jsx** - Loading state display

## Features

### For Non-Logged Users
- Browse mentor profiles
- View ratings and expertise
- Filter by categories
- Search by skills/name/company
- View pricing information
- Popular topics exploration
- Featured mentors showcase

### For Logged-In Users (Additional Premium Features)
- **Book sessions directly** - One-click booking system
- **Send messages to mentors** - Direct communication
- **Add mentors to favorites** - Save for later access
- **View personalized recommendations** - AI-powered mentor suggestions
- **Access user dashboard** - Track activity, stats, and progress
- **Premium search filters** - Location, language, timezone, response time
- **Session format preferences** - Video, audio, chat, in-person
- **Verified mentor badges** - Certifications and background checks
- **Trial session options** - Find mentors offering free trials
- **Quick actions menu** - Fast access to dashboard, sessions, favorites
- **Profile completion tracking** - Guidance for better recommendations
- **Activity statistics** - Favorite mentors, sessions, messages count

## Usage

```jsx
import ExplorePage from './pages/explore/ExplorePage';

// In your routing
<Route path="/explore" element={<ExplorePage />} />
```

## Mock Data Structure

Each mentor object should have:
```javascript
{
  id: number,
  name: string,
  title: string,
  company: string,
  expertise: string[],
  rating: number,
  reviewCount: number,
  hourlyRate: number,
  avatar: string,
  isFeatured: boolean,
  availability: 'Available' | 'Busy',
  bio: string,
  categories: string[]
}
```

## Styling

All components use Tailwind CSS for styling and maintain consistency with the overall application theme.

## Future Enhancements

- API integration for real mentor data
- Advanced search with filters
- Mentor profile pages
- Booking system integration
- Messaging system
- Favorites functionality
- Review system
- Payment integration
