// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/landing/HomePage.jsx';
import SimpleLoginPage from './pages/auth/SimpleLoginPage';
import SimpleRegisterPage from './pages/auth/SimpleRegisterPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SimpleLoginPage />} />
          <Route path="/register" element={<SimpleRegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;