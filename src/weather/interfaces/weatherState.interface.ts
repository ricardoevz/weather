import { List } from './waetherForescat.response';
import { WeatherResponse } from './weatherResponse.interface';

export interface WeatherState {
  current: WeatherResponse;
  daily: Daily[];
  isLoading: boolean;
  error: Error;
}

export interface Temp {
  dt: number;
  temp: number;
}

export interface Daily {
  current: List;
  hourly: Temp[];
}

export interface Error {
  open: boolean;
  message: string;
}
