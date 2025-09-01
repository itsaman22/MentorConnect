// Simple API Service for MentorConnect
const API_URL = import.meta.env.VITE_API_URL 
  ? `${import.meta.env.VITE_API_URL}/api`
  : 'https://mentorconnect-lb7y.onrender.com/api';

// Simple fetch wrapper with error handling
const apiRequest = async (url, options = {}) => {
  try {
    console.log(`Making request to: ${API_URL}${url}`); // Debug log
    
    const response = await fetch(`${API_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    console.log(`Response status: ${response.status}`); // Debug log
    
    // Check if response has content before parsing JSON
    const text = await response.text();
    console.log(`Response text: ${text}`); // Debug log
    
    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch (jsonError) {
      console.error('JSON parse error:', jsonError);
      throw new Error(`Invalid JSON response: ${text}`);
    }

    if (!response.ok) {
      throw new Error(data.message || `HTTP ${response.status}: ${response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw new Error(error.message || 'Network error');
  }
};

// Authentication functions
export const authAPI = {
  // Test backend connection
  testConnection: async () => {
    try {
      return await apiRequest('/health');
    } catch (error) {
      console.error('Backend connection test failed:', error);
      throw error;
    }
  },

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
