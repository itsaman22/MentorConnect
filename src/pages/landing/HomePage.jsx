import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import Cards from './Cards'; 
import RegisterPage from '../auth/RegisterPage';
import LoginPage from '../auth/LoginPage';
import Footer from './footer';
import Testimonials from './Testimonials';
import FAQ from './Faq';
import ConnectFlow from './ConnectFlow';
const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stats] = useState({
    mentors: "1,000+",
    students: "460+",
    courses: "50+"
  });

  return (
    <div className="overflow-hidden">
    <div className="min-h-screen bg-white font-poppins text-gray-800">
      {/* Header/Navigation */}
      <header className="flex justify-between items-center p-5 md:px-16 bg-white">
        <div className="text-2xl font-bold">
          <Link to="/">
            <i className="fas fa-handshake mr-2"></i> MentorConnect
          </Link>
        </div>
        <nav className="md:flex md:items-center">
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <ul className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:flex-row md:space-y-0 md:space-x-6 font-medium absolute md:static md:bg-transparent bg-white md:p-0 p-4 top-16 right-5 shadow-md rounded-lg md:shadow-none z-20`}>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/explore" onClick={() => setIsMenuOpen(false)}>Explore</Link></li>
            <li><Link to="/become-mentor" onClick={() => setIsMenuOpen(false)}>Become a Mentor</Link></li>
            <li><Link to="/search" onClick={() => setIsMenuOpen(false)}>Search</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="bg-gray-900 text-white px-5 py-2 rounded-full font-semibold hover:bg-gray-700 transition-colors gap-3" >Log in</Link>
          {/* <Link to="/register" className=" text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-700 transition-colors border-2" >Register</Link> */}
        </div>
      </header>

      {/* Rest of the component remains unchanged */}
      <main className="relative p-5 md:px-16 min-h-[calc(100vh-80px)] flex">
  {/* Left Content */}
  <div className="w-full md:w-1/2 flex flex-col justify-center z-20">
    <div className="text-left max-w-xl">
      <h4 className="text-blue-600 font-semibold tracking-wide mb-4">
        Welcome to MentorConnect
      </h4>
      
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
        Empowering Your Future with Expert Mentorship
      </h1>
      
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Connect with industry leaders, accelerate your career growth, and unlock your full potential through personalized mentorship.
      </p>

      <div className="flex gap-4 mb-12">
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
          Get Started
        </button>
        <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
          Free Trial
        </button>
      </div>

      {/* Stats Section */}
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[
              "https://plus.unsplash.com/premium_photo-1723478495487-c436ae82f48f?q=80&w=1252&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://plus.unsplash.com/premium_photo-1658506724186-63a705425f89?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1667655699558-8f1b362a67a8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ].map((imgUrl, i) => (
              <img 
              key={i} 
              src={imgUrl} 
              alt={`Person ${i+1}`}
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            ))}
            </div>
            <div>
            <h4 className="text-2xl font-bold text-gray-900">{stats.students}</h4>
            <p className="text-sm text-gray-600 uppercase">STUDENTS</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <i className="fas fa-user-graduate text-blue-600"></i>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900">{stats.mentors}</h4>
              <p className="text-sm text-gray-600 uppercase">MENTORS</p>
            </div>
            </div>
          </div>
          </div>
        </div>
        </div>

        {/* Right Image */}
  <div className="hidden md:block w-1/2 relative">
    <div className="absolute inset-0 bg-blue-50 rounded-l-full opacity-50"></div>
    <img 
      src="/mentorImage.jpg"
      alt="Mentorship Illustration"
      className="relative w-full h-full object-contain"
    />
    
    {/* Floating Stats Cards */}
    <div className="absolute top-1/4 -left-22 bg-white p-4 rounded-xl shadow-lg">
      <div className="flex items-center gap-3">
        {/* <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
          <i className="fas fa-brain text-blue-600"></i>
        </div> */}
        {/* <div>
          <h4 className="text-xl font-bold text-gray-900">{stats.courses}</h4>
          <p className="text-sm text-gray-600">Expert Classes</p>
        </div> */}
      </div>
    </div>
  </div>
  {/* smile,waali chote icons  */}
</main>      
    </div>

    
    <hr className="my-4 border-t-2 border-gray-300 w-3/4 mx-auto" />

     {/* Card Section */}
    <Cards/>
<div className="container mx-auto px-20 py-16">
  <div className="flex flex-col md:flex-row items-center justify-between gap-12">
   { /* Left side - Text Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        Mentorship
        <span className="text-blue-600"> Matters</span>
        </h2>
        
        <div className="space-y-4">
        <p className="text-xl text-gray-700 leading-relaxed">
          Discover the impact of mentorship on personal and professional growth through our expert-led platform.
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
          <i className="fas fa-check-circle text-blue-600"></i>
          <p className="text-gray-600">Personalized guidance from industry experts</p>
          </div>
          <div className="flex items-center space-x-2">
          <i className="fas fa-check-circle text-blue-600"></i>
          <p className="text-gray-600">Structured career development programs</p>
          </div>
          <div className="flex items-center space-x-2">
          <i className="fas fa-check-circle text-blue-600"></i>
          <p className="text-gray-600">Build valuable professional connections</p>
          </div>
        </div>

        <Link to="/register" className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block">
          Get Started
        </Link>
        </div>
      </div>

      {/* Right side - Image */}
    <div className="md:w-1/2">
      <div className="relative">
        <div className="absolute inset-0  rounded-full filter blur-3xl opacity-30 transform scale-150"></div>
        <img 
          src="/mentorStudent.jpg"
          alt="Mentorship Illustration"
          className="relative w-full h-auto object-contain animate-float "
          // style={{
          //   filter: 'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1))'
          // }}
        />
      </div>
    </div>
  </div>
</div>

    <hr className="my-4 border-t-2 border-gray-300 w-3/4 mx-auto" />
     
     {/* Connect Flow Section */}
     <ConnectFlow />

     <hr className="my-4 border-t-2 border-gray-300 w-3/4 mx-auto" />
     
     {/* Testimonials */}
     <Testimonials />

     {/* Faq Section */}
     <FAQ />

    {/* Categories Section  */}
    {/* <Categories /> */}


      {/* Footer component will be imported and used here */}
      <Footer />
   </div> 
  );
};

export default HomePage;
