import axios from "axios";

const apiClient = axios.create({
  // ✅ IMPORTANT: Set the base URL to your deployed backend API
  baseURL: 'https://mbogiwood-core-api.onrender.com', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
