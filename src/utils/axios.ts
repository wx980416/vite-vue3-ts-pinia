import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create(); // Request interceptors

service.interceptors.request.use(
  (config: any) => {
    // do something
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
); // Response interceptors

service.interceptors.response.use(
  (response) => {
    // do something
    return response;
  },
  (error: any) => {
    // do something
    return Promise.reject(error);
  },
);

export default service;
