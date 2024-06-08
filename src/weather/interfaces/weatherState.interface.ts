import { List } from './waetherForescatResponse.interface';
import { WeatherResponse } from './weatherResponse.interface';

export interface WeatherState {
  current: WeatherResponse;
  daily: Daily[];
  isLoading: boolean;
}

export interface Temp {
  dt: number;
  temp: number;
}

export interface Daily {
  current: List;
  hourly: Temp[];
}
