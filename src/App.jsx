// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './pages/landing/HomePage';
import HomePage from './pages/landing/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import MenteeHome from './pages/mentee/MenteeHome';
import ProtectedRoute from './components/common/ProtectedRoute';

// Import landing pages

// Import other pages as needed

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route 
          path="/mentee/home" 
          element={
            <ProtectedRoute>
              <MenteeHome />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;