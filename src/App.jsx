// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext.jsx';
import HomePage from './pages/landing/HomePage.jsx';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import MenteeHome from './pages/mentee/MenteeHome';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mentee/home" element={<MenteeHome />} />
          <Route path="/mentor/home" element={<MenteeHome />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;