const API_BASE_URL = 'http://localhost:5000/api';

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
    const response = await fetch(`${this.baseURL}/auth/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

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
