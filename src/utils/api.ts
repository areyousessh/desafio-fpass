import axios from "axios";
import md5 from "md5";


const API_BASE_URL = 'https://gateway.marvel.com/v1/public';
const PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

export const Api = axios.create({
  baseURL: API_BASE_URL,
});

Api.interceptors.request.use((config) => {
    const timestamp = Date.now().toString()
    const hash = md5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`)

    config.params = {
        ...config.params,
        ts: timestamp,
        apikey: PUBLIC_KEY,
        hash: hash
    };
    return config;
})