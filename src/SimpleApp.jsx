import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Simple components
import HomePage from './pages/landing/HomePage.jsx';
import SimpleLoginPage from './pages/auth/SimpleLoginPage';
import SimpleRegisterPage from './pages/auth/SimpleRegisterPage';
import SimpleMenteeHome from './pages/mentee/SimpleMenteeHome';

function SimpleApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SimpleLoginPage />} />
        <Route path="/register" element={<SimpleRegisterPage />} />
        <Route path="/mentee/home" element={<SimpleMenteeHome />} />
        <Route path="/mentor/home" element={<SimpleMenteeHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default SimpleApp;
