import React from 'react';
import { ArrowRight, Users, Brain, Target, MessageCircle, Award, Rocket, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const ConnectFlow = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Path to Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your career journey with expert guidance, one step at a time
          </p>
        </div>

        {/* Flow Steps */}
        <div className="relative">
          {/* Decorative Elements */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative">
            {/* Step 1 */}
            <div className="relative group" data-aos="fade-up">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-10 h-10 text-blue-600" />
                </div>
                <div className="absolute -right-6 top-10 hidden lg:block">
                  <ArrowRight className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Your Journey</h3>
                <p className="text-gray-600">Facing career challenges or seeking growth? We're here to help you succeed.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group" data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <div className="absolute -right-6 top-10 hidden lg:block">
                  <ArrowRight className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect with Experts</h3>
                <p className="text-gray-600">Get matched with industry-leading mentors for personalized guidance.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Achieve Success</h3>
                <p className="text-gray-600">Transform your potential into success through expert mentorship.</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, text: "Clear Your Doubts" },
              { icon: MessageCircle, text: "1:1 Live Sessions" },
              { icon: Award, text: "Expert Guidance" },
              { icon: ArrowUpRight, text: "Career Growth" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-lg font-medium text-gray-800">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            {/* <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              Begin Your Journey
            </button> */}
            <Link to="/register" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          Begin Your Journey
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectFlow;
