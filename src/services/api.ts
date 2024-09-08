import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        // handle unauthorized error (e.g., redirect to login)
      }
      return Promise.reject(error);
    }
  );