import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_BASE_URL2;

export const apiClient = axios.create({
  baseURL: apiBaseUrl,
  // withCredentials: true,
});

// Add a request interceptor
// apiClient.interceptors.request.use(
//   (config) => {
//     // Get the token from localStorage
//     const token = window.localStorage.getItem("portiUser")
//       ? JSON.parse(window.localStorage.getItem("portiUser")).token
//       : null;

//     // If a token exists, add it to the headers
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
