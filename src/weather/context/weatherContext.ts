import { createContext } from 'react';
import { Coord } from '../interfaces/waetherForescatResponse.interface';
import { WeatherState } from '../interfaces';

export interface WeatherContextProps extends WeatherState {
  handleConvertDTtoDay: (dt: number) => string;
  handleSearchPlacesByTerm: (q: string) => Promise<T>;
  handleChangePlace: (cood: Coord) => void;
}

export const WeatherContext = createContext<WeatherContextProps>(
  {} as WeatherContextProps
);
