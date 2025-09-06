// FILE: lib/api.ts
import axios from 'axios';

const apiClient = axios.create({
  // This tells Axios to get the backend URL from an environment variable
  baseURL: process.env.NEXT_PUBLIC_API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;