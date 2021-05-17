import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8888/api/auth/",
});

export default axiosInstance;
