// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext.jsx';
import HomePage from './pages/landing/HomePage.jsx';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import SimpleMenteeHome from './pages/mentee/SimpleMenteeHome';
import MentorHomeNew from './pages/mentor/MentorHomeNew';
import ExplorePage from './pages/explore/ExplorePage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mentee-home" element={<SimpleMenteeHome />} />
          <Route path="/mentor-home" element={<MentorHomeNew />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;