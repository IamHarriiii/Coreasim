//C:\Users\User\Coreasim\coreasim_frontend\src\utils\api.js

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api/',
});

export default api;
