import axios from "axios";

const axiosInstance = axios.create({
	baseUrl: "http://localhost/8888/api/auth",
});

export default axiosInstance;
