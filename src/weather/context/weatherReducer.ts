import { Daily, Error, WeatherState } from '../interfaces';
import { WeatherResponse } from '../interfaces/weatherResponse.interface';

interface Weather {
  current: WeatherResponse;
  daily: Daily[];
}

type WeatherActions =
  | { type: 'setWeather'; payload: Weather }
  | { type: 'setLoadingPlaces' }
  | { type: 'setError'; payload: Error };

export const weatherReducer = (
  state: WeatherState,
  action: WeatherActions
): WeatherState => {
  switch (action.type) {
    case 'setWeather':
      return {
        ...state,
        current: action.payload.current,
        daily: action.payload.daily,
        isLoading: false,
      };
    case 'setLoadingPlaces':
      return {
        ...state,
        current: {} as WeatherResponse,
        daily: [],
        isLoading: true,
      };
    case 'setError':
      return {
        ...state,
        error: {
          open: action.payload.open,
          message: action.payload.message,
        },
      };
    default:
      return state;
  }
};
