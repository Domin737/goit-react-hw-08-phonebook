// src/redux/axiosConfig.js
import axios from 'axios';
import { store } from './store';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

axios.interceptors.request.use(
  config => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
