import axios from 'axios';

// base url: https://api-ssl.bitly.com/v4/

export const key = 'Your key';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
    },
});

export default api;