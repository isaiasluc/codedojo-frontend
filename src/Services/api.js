import axios from 'axios';

const api = axios.create({
    baseURL: `https://cors-anywhere.herokuapp.com/https://codedojo-api.herokuapp.com`
});

export default api;