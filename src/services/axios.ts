import axios from 'axios';
import { toast } from 'react-hot-toast';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use(
  res => res,
  err => {
    toast.error(err?.response?.data?.message || 'Something went wrong');
    return Promise.reject(err);
  }
);

export default instance;