import axios from 'axios';
import api from '../../apis/api';
import { WeatherResponse } from '../interfaces/weatherResponse.interface';
import { WeatherForecastResponse } from '../interfaces/waetherForescat.response';

export const getWeather = async (
  lat: number,
  lon: number
): Promise<WeatherResponse> => {
  try {
    const response = await api.get(`/weather?lat=${lat}&lon=${lon}`);
    return response.data;
  } catch (error) {
    throw new Error('Error getting weather');
  }
};

export const getForecast = async (
  lat: number,
  lon: number
): Promise<WeatherForecastResponse> => {
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
      `https://api.openweathermap.org/geo/1.0/direct?q=${term}&limit=5&appid=0891117a8d27a956f8197746c0878af4`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error getting places');
  }
};
