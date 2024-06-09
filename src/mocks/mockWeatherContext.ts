import { WeatherContextProps } from '../weather/context/weatherContext';
import { Place } from '../weather/interfaces';
import { mockWeather } from './mockWeather';

export const mockWeatherContext: WeatherContextProps = {
  current: mockWeather,
  daily: [],
  isLoading: false,
  error: {
    open: false,
    message: '',
  },
  handleSearchPlacesByTerm: () => {
    return new Promise<Place[]>((resolve) => {
      const places: Place[] = [
        {
          name: 'London',
          lat: 37.1289771,
          lon: -84.0832646,
          country: 'US',
          state: 'Kentucky',
        },
      ];

      resolve(places);
    });
  },
  handleChangePlace: () => {},
  handleCloseError: () => {},
};
