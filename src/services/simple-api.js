// Simple API Service for MentorConnect
const API_URL = import.meta.env.VITE_API_URL 
  ? `${import.meta.env.VITE_API_URL}/api`
  : import.meta.env.PROD 
    ? 'https://mentor-connect-bqvch088m-aman-singhs-projects-81158277.vercel.app/api'
    : 'http://localhost:5000/api';

// Simple fetch wrapper with error handling
const apiRequest = async (url, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Request failed');
    }

    return data;
  } catch (error) {
    throw new Error(error.message || 'Network error');
  }
};

// Authentication functions
export const authAPI = {
  // Register new user
  register: async (userData) => {
    return await apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  },

  // Login user
  login: async (credentials) => {
    return await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
  },

  // Get current user
  getMe: async (token) => {
    return await apiRequest('/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
};

// Simple authentication helper functions
export const auth = {
  // Save user data to localStorage
  saveUser: (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  },

  // Get saved user data
  getUser: () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (token && user) {
      return {
        token,
        user: JSON.parse(user)
      };
    }
    return null;
  },

  // Clear user data (logout)
  clearUser: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // Check if user is logged in
  isLoggedIn: () => {
    return !!localStorage.getItem('token');
  }
};
