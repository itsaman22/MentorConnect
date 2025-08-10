import React from 'react';
import { Users, MessageSquare, BookOpen, Calendar, Award, Target, Video, Star } from 'lucide-react';

export default function MentorConnect() {
  return (
    <div className="min-h-min bg-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* One-on-One Mentoring Card */}
        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-3">One-on-One Mentoring</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Connect with industry experts for personalized career guidance and professional growth strategies
          </p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-500">Personal career roadmap</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-500">Resume optimization</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-500">Interview preparation</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            <Video className="w-5 h-5 text-blue-600" />
            <Calendar className="w-5 h-5 text-blue-600" />
          </div>
        </div>

        {/* Industry Expert Network Card */}
        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-blue-600" />
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-3">Industry Expert Network</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Access our network of 1,000+ mentors from leading companies across various industries
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">TECH</span>
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">FINANCE</span>
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">DESIGN</span>
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">MARKETING</span>
          </div>
          
          <div className="flex space-x-2">
            <Star className="w-5 h-5 text-blue-600" />
            <Target className="w-5 h-5 text-blue-600" />
            <Users className="w-5 h-5 text-blue-600" />
          </div>
        </div>

        {/* Flexible Learning Path Card */}
        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-3">Flexible Learning Path</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Learn at your own pace with structured mentorship programs and career development resources
          </p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-500">Self-paced learning</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-500">Structured programs</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-500">Resource library</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <Calendar className="w-5 h-5 text-blue-600" />
            <Star className="w-5 h-5 text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

