import axios from "axios";

const BACKEND_BASE_URL =
  import.meta.env.BACKEND_BASE_URL || "http://localhost:8080/api/v1";

const api = axios.create({
  baseURL: BACKEND_BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await api.post("/user/refresh");

        return api(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);

export { api };
