import axios from "axios";

const token = localStorage.getItem('token')

const fetchAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache",
        Expires: "0",
    },
    timeout: 60 * 1000,
});

fetchAxios.interceptors.request.use(
    async (request) => {
        const token = localStorage.getItem('token');
        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

fetchAxios.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default fetchAxios;
