const API_URL = import.meta.env.VITE_API_URL;

export const apiService = {
    login: async (credentials) => {
        const response = await fetch(`${API_URL}/api/auth/login?_=${Date.now()}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            },
            body: JSON.stringify(credentials),
        });
        return response;
    },

    getMe: async (token) => {
        const response = await fetch(`${API_URL}/api/auth/me`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response;
    },

    // Add other API calls here
};

export default apiService;
