import React from 'react';

const CoursesSection = ({ courses, handleSectionClick, handleCourseAction }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">My Courses</h3>
        <button 
          onClick={() => handleSectionClick('courses')}
          className="text-green-600 hover:text-green-700 font-medium"
        >
          Manage All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div 
            key={course.id} 
            onClick={() => handleCourseAction(course.id)}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center`}>
                <i className={`${course.icon} text-xl text-white`}></i>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                course.status === 'Active' ? 'bg-green-100 text-green-600' :
                course.status === 'Draft' ? 'bg-yellow-100 text-yellow-600' :
                'bg-gray-100 text-gray-600'
              }`}>
                {course.status}
              </span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">{course.title}</h4>
            <p className="text-sm text-gray-600 mb-3">{course.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">{course.students} students</span>
              <span className="text-green-600 font-medium">{course.progress}% complete</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
