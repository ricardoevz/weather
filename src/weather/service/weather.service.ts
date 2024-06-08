import axios from 'axios';
import api from '../../apis/api';

export const getWeather = async (lat: number, lon: number) => {
  try {
    const response = await api.get(`/weather?lat=${lat}&lon=${lon}`);
    return response.data;
  } catch (error) {
    throw new Error('Error getting weather');
  }
};

export const getForecast = async (lat: number, lon: number) => {
  try {
    const response = await api.get(`/forecast?lat=${lat}&lon=${lon}`);
    return response.data;
  } catch (error) {
    throw new Error('Error getting Forecast');
  }
};

export const getPlacesByTerm = async (term: string) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${term}&limit=5&appid=0891117a8d27a956f8197746c0878af4`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error getting places');
  }
};
