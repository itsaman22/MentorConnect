// Get API base URL from environment or fallback to production server
const getApiBaseUrl = () => {
  const envApiUrl = import.meta.env.VITE_API_URL;
  if (envApiUrl && envApiUrl !== 'undefined') {
    return `${envApiUrl}/api`;
  }
  // Always use production server as fallback, never localhost in production
  return 'https://mentor-connect-server.vercel.app/api';
};

const API_BASE_URL = getApiBaseUrl();

// Add debugging in development
if (import.meta.env.DEV) {
  console.log('API Base URL:', API_BASE_URL);
  console.log('Environment VITE_API_URL:', import.meta.env.VITE_API_URL);
}

// Login function
export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Login failed');
  }

  return data;
};

// Register function
export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Registration failed');
  }

  return data;
};

// API Service class for default export
class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Get user data
  async getMe(token) {
    if (import.meta.env.DEV) {
      console.log('getMe called with token:', token ? 'Token exists' : 'No token');
      console.log('API URL:', `${this.baseURL}/auth/me`);
    }
    
    const response = await fetch(`${this.baseURL}/auth/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (import.meta.env.DEV) {
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch user data');
    }

    return data;
  }

  // Login method (alternative to named export)
  async login(credentials) {
    return loginUser(credentials);
  }

  // Register method (alternative to named export)
  async register(userData) {
    return registerUser(userData);
  }
}

// Create and export instance
const apiService = new ApiService();
export default apiService;
