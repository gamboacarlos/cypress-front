import axios, { AxiosInstance } from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL; // Get base URL from .env

const { token } = localStorage.getItem('authToken') // Get token from localStorage
  ? JSON.parse(localStorage.getItem('authToken') as string)
  : '';

const headers = { Authorization: `Bearer ${token}` };

// Create instance ================================================================================
const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers,
});

/* Add request interceptor to ensure 
that the token it's defined inside the
headers when it's necesary... */
axiosInstance.interceptors.request.use(async (req) => {
  if (!token && req.headers) {
    const { token } = localStorage.getItem('authToken') // Try to retrieve token
      ? JSON.parse(localStorage.getItem('authToken') as string)
      : '';
    req.headers.Authorization = `Bearer ${token}`; // Set the recovered token inside header request
  }
  return req;
});

export default axiosInstance;
