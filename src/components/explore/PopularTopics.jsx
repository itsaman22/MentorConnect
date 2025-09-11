import React from 'react';

const PopularTopics = () => {
  const topics = [
    {
      title: 'Career Transition',
      description: 'Get guidance on switching careers or industries',
      icon: 'fas fa-route',
      color: 'bg-blue-500',
      mentorCount: 45,
    },
    {
      title: 'Technical Skills',
      description: 'Learn programming, design, and technical expertise',
      icon: 'fas fa-code',
      color: 'bg-green-500',
      mentorCount: 78,
    },
    {
      title: 'Leadership',
      description: 'Develop management and leadership capabilities',
      icon: 'fas fa-users',
      color: 'bg-purple-500',
      mentorCount: 34,
    },
    {
      title: 'Entrepreneurship',
      description: 'Start and grow your own business venture',
      icon: 'fas fa-rocket',
      color: 'bg-orange-500',
      mentorCount: 29,
    },
    {
      title: 'Interview Prep',
      description: 'Ace your next job interview with expert coaching',
      icon: 'fas fa-handshake',
      color: 'bg-red-500',
      mentorCount: 56,
    },
    {
      title: 'Product Management',
      description: 'Build and launch successful products',
      icon: 'fas fa-cube',
      color: 'bg-indigo-500',
      mentorCount: 41,
    },
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Topics</h2>
        <p className="text-lg text-gray-600">Explore the most sought-after mentorship areas</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 cursor-pointer group"
          >
            <div className="flex items-start space-x-4">
              <div className={`${topic.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${topic.icon} text-xl`}></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {topic.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {topic.mentorCount} mentors available
                  </span>
                  <i className="fas fa-arrow-right text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
          View All Topics
        </button>
      </div>
    </div>
  );
};

export default PopularTopics;
