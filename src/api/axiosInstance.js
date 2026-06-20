import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        const message =
            error.response?.data?.message || "Something went wrong";
        return Promise.reject(message);
    }
);

export default axiosInstance;