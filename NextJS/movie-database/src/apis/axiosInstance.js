import axios from 'axios';

const TMDB_BASE_URL = process.env.TMDB_BASE_URL || 'http://localhost:8000/'; // Fallback to localhost for development

const apiClient = axios.create({
    baseURL: TMDB_BASE_URL, // Always use relative URLs for client-side
    timeout: 30000, // 30 seconds timeout for requests
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add response interceptor for error handling
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response?.data || error.message);
        
        // Add user-friendly error messages
        if (error.code === 'ECONNABORTED') {
            error.userMessage = 'Request timeout - please try again';
        } else if (error.response?.status === 504) {
            error.userMessage = 'Server timeout - please try again later';
        } else if (error.response?.status >= 500) {
            error.userMessage = 'Server error - please try again later';
        } else {
            error.userMessage = 'Something went wrong - please try again';
        }
        
        return Promise.reject(error);
    }
);

export { apiClient };