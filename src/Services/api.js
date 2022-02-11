import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.nytimes.com/svc/books/v3/lists/',
});


export default api;