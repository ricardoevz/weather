import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

api.interceptors.request.use(
  (config) => {
    if (!config.params) {
      config.params = {};
    }
    const apiKey = process.env.VITE_API_KEY;
    config.params['units'] = 'metric';
    config.params['lang'] = 'es';
    config.params['appid'] = apiKey;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
