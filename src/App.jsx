// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './pages/landing/HomePage';
import HomePage from './pages/landing/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';


// Import landing pages

// Import other pages as needed

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* More routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;