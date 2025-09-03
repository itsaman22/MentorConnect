import React from 'react';

const SessionsSection = ({ ongoingSessions, handleSectionClick, handleSessionAction }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Ongoing Info Sessions</h3>
        <button 
          onClick={() => handleSectionClick('sessions')}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          See All
        </button>
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
              <button 
                onClick={() => handleSessionAction(session.id, session.type)}
                className="block mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                {session.status === 'In Progress' ? 'Join' : session.status === 'Scheduled' ? 'Join' : 'Schedule'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionsSection;
