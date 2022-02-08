import axios from 'axios';

export const key = "480968bd294f328ee9de45e44db0cc0384a00aee";

export const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

//https://api-ssl.bitly.com/v4/shorten