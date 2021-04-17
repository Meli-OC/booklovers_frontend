import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://booklovers.com:8888/api/auth/",
});

export default axiosInstance;
