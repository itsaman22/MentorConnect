import React from 'react';

const UpcomingSessionsSection = ({ sessions, handleSectionClick, handleSessionAction }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Upcoming Sessions</h3>
        <button 
          onClick={() => handleSectionClick('sessions')}
          className="text-green-600 hover:text-green-700 font-medium"
        >
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {sessions.map((session) => (
          <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 ${session.type === 'live' ? 'bg-red-100' : 'bg-blue-100'} rounded-full flex items-center justify-center`}>
                <i className={`fas ${session.type === 'live' ? 'fa-broadcast-tower text-red-600' : 'fa-video text-blue-600'}`}></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{session.title}</h4>
                <p className="text-sm text-gray-600">with {session.student}</p>
                <p className="text-xs text-green-600 font-medium">{session.time}</p>
              </div>
            </div>
            <div className="text-right">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                session.status === 'Starting Soon' ? 'bg-red-100 text-red-600' :
                session.status === 'Scheduled' ? 'bg-blue-100 text-blue-600' :
                'bg-green-100 text-green-600'
              }`}>
                {session.status}
              </span>
              <button 
                onClick={() => handleSessionAction(session.id, 'start')}
                className="block mt-2 text-green-600 hover:text-green-700 text-sm font-medium"
              >
                {session.status === 'Starting Soon' ? 'Start Now' : 'Join'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSessionsSection;
