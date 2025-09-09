import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://mbogiwood-core-api.onrender.com",
  withCredentials: false,
});

export default apiClient;
