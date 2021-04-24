import axios from "axios";
import Cookie from "js-cookie";
import { useState } from "react";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8888/api/auth/",
});

export default axiosInstance;


