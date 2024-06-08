import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

api.interceptors.request.use(
  (config) => {
    if (!config.params) {
      config.params = {};
    }
    config.params['units'] = 'metric';
    config.params['lang'] = 'es';
    config.params['appid'] = '0891117a8d27a956f8197746c0878af4';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
