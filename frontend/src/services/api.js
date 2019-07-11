import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:20000',
});

export default api;