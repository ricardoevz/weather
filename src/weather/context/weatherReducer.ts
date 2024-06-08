import { Daily, WeatherState } from '../interfaces';
import { WeatherResponse } from '../interfaces/weatherResponse.interface';

interface Weather {
  current: WeatherResponse;
  daily: Daily[];
}

type WeatherActions =
  | { type: 'setWeather'; payload: Weather }
  | { type: 'setLoadingPlaces' };

export const weatherReducer = (
  state: WeatherState,
  action: WeatherActions
): WeatherState => {
  switch (action.type) {
    case 'setWeather':
      return {
        ...action.payload,
        isLoading: false,
      };
    case 'setLoadingPlaces':
      return {
        current: {} as WeatherResponse,
        daily: [],
        isLoading: true,
      };
    default:
      return state;
  }
};
