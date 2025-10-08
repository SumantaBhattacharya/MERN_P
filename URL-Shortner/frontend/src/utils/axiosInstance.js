import axios, { isAxiosError } from "axios";
import { refreshAccessToken } from "./refreshToken";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4001/api",
  timeout: 10000, // 10s
  withCredentials: true, // crucial for cookies
});

// Attach token automatically before every request - At login time, you’re only saving the token into localStorage
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;

      console.log("Request sent with token:", config);
      console.log("Making request to:", config.url);
      return config;
    } else {
      console.log("Request sent without token:", config);
      return config;
    }
  },
  (error) => {
    console.error("Error in request:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    console.log("Response received:", response.status);
    return response;
  },
  // Happens automatically when API returns 401
  // This way we dont have to call this manually before each request, because we could have write a seperate logic for refresh token too

  async (error) => {
    // it automatically detects 401 errors and refreshes the token
    if (error.response.status === 401 && !error.config._retry) {
      error.config._retry = true; // to avoid infinite loop

      // console.log("Access token expired. Attempting refresh...");

      try {
        // Try to refresh the token (use plain axios to avoid circular interceptor calls)
        const response = await refreshAccessToken();

        if (response) {
          // console.log("Token refreshed. Retrying original request...");
          error.config.headers["Authorization"] = `Bearer ${response}`;
          return axiosInstance(error.config); // Retry original request with new token
        }
      } catch (error) {
        // console.error("Token refresh failed:", error.message);
        if (error.response?.status === 401) {
          localStorage.removeItem("accessToken"); //If the refresh fails, the accessToken is likely expired or invalid
          // Optionally, redirect to login page
          window.location.href = "/login";
        }
        return Promise.reject(error);
      }
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response) {
      const { status, data } = error.response;

      switch (
        status //error.response.status
      ) {
        case 400: // data.message is coming from backend
          console.error(
            data.message || "Bad Request: The server cannot process the request"
          );
          break;
        case 401:
          console.error(data.message || "Unauthorized: Please authenticate");
          break;
        case 403:
          console.error(
            data.message ||
              "Forbidden: You don't have permission to access this resource"
          );
          break;
        case 404:
          console.error(
            data.message || "Not Found: The requested resource was not found"
          );
          break;
        case 409:
          console.error(
            data.message ||
              "Conflict: The request could not be completed due to a conflict"
          );
          break;
        case 422:
          console.error(
            data.message ||
              "Unprocessable Entity: The request was well-formed but unable to be followed"
          );
          break;
        case 429:
          console.error(
            data.message ||
              "Too Many Requests: You've made too many requests. Please try again later"
          );
          break;
        case 500:
          console.error(
            data.message || "Internal Server Error: Please try again later"
          );
          break;
        case 502:
          console.error(
            data.message ||
              "Bad Gateway: The server received an invalid response"
          );
          break;
        case 503:
          console.error(
            data.message ||
              "Service Unavailable: The server is temporarily unavailable"
          );
          break;
        default:
          console.error(
            data.message ||
              `Server Error: ${error.response.status} - ${error.response.statusText}`
          );
      }
    } else {
      console.error("Network/Unknown Error:", error.message);
    }

    // return Promise.reject(error);

    return Promise.reject({
      // isAxiosError: true,
      message:
        error.response?.data?.message ||
        error.message ||
        "An unexpected error occurred",
      status: error.response?.status,
      data: error.response?.data,
      // statusText: error.response?.statusText,
      // code: error.code,
      // config: error.config,
      // response: error.response,
      // originalError: error
    });
  }
);

export default axiosInstance;
