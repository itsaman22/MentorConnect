import React from 'react';

// Mock alumni data
const alumniList = [
  {
    id: 1,
    name: 'Priya Sharma',
    gradYear: 2015,
    school: 'IIT Delhi',
    currentRole: 'Product Manager, Google',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Helping juniors with career guidance and tech interviews.',
    expertise: ['Career Guidance', 'Tech Interviews', 'Networking'],
    available: true,
  },
  {
    id: 2,
    name: 'Rahul Verma',
    gradYear: 2012,
    school: 'BITS Pilani',
    currentRole: 'Lead Data Scientist, Amazon',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Passionate about mentoring students in data science and analytics.',
    expertise: ['Data Science', 'Analytics', 'Career Growth'],
    available: false,
  },
  {
    id: 3,
    name: 'Anjali Singh',
    gradYear: 2016,
    school: 'NIT Trichy',
    currentRole: 'UX Designer, Microsoft',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Guiding juniors in design careers and portfolio building.',
    expertise: ['UX Design', 'Portfolio', 'Career Advice'],
    available: true,
  },
];

const AlumniSection = ({ school, college }) => {
  // Filter alumni by school or college
  const relevantAlumni = alumniList.filter(alumni => {
    if (!school && !college) return true;
    return (
      (school && alumni.school.toLowerCase().includes(school.toLowerCase())) ||
      (college && alumni.school.toLowerCase().includes(college.toLowerCase()))
    );
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Connect with Senior Alumni</h3>
        <span className="text-sm text-blue-600 font-medium">Your College/School Network</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relevantAlumni.length > 0 ? (
          relevantAlumni.map(alumni => (
            <div key={alumni.id} className="bg-blue-50 rounded-xl p-4 flex flex-col items-center shadow">
              <img src={alumni.avatar} alt={alumni.name} className="w-16 h-16 rounded-full mb-3 border-2 border-blue-200" />
              <h4 className="text-lg font-semibold text-gray-900 mb-1">{alumni.name}</h4>
              <p className="text-sm text-gray-600 mb-1">{alumni.currentRole}</p>
              <p className="text-xs text-blue-700 mb-2">{alumni.school} • Class of {alumni.gradYear}</p>
              <p className="text-xs text-gray-500 mb-2">{alumni.bio}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {alumni.expertise.map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{skill}</span>
                ))}
              </div>
              <button
                className={`w-full py-2 rounded-lg font-semibold transition-colors ${alumni.available ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                disabled={!alumni.available}
              >
                {alumni.available ? 'Connect Now' : 'Currently Unavailable'}
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500 py-8">No relevant alumni found for your school or college.</div>
        )}
      </div>
    </div>
  );
};

export default AlumniSection;
