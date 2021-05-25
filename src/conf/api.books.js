import axios from 'axios';

const axiosBooksInstance = axios.create({
    baseURL: "http://localhost:8888/books/",
    headers: {
        "content-type":"application/json"
    }
});

export default axiosBooksInstance;
