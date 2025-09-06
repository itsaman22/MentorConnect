import React from 'react';

const StudentsProgressSection = ({ students, handleSectionClick, handleStudentClick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Recent Student Activity</h3>
        <button 
          onClick={() => handleSectionClick('students')}
          className="text-green-600 hover:text-green-700 font-medium"
        >
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {students.map((student) => (
          <div 
            key={student.id} 
            onClick={() => handleStudentClick(student.id)}
            className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
          >
            <div className="relative">
              <img 
                src={student.avatar} 
                alt={student.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${student.status === 'online' ? 'bg-green-500' : 'bg-gray-400'} rounded-full border-2 border-white`}></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900">{student.name}</h4>
                <span className="text-xs text-gray-500">{student.lastActive}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{student.course}</p>
              <div className="flex items-center space-x-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all"
                    style={{width: `${student.progress}%`}}
                  ></div>
                </div>
                <span className="text-sm font-medium text-green-600">{student.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsProgressSection;
