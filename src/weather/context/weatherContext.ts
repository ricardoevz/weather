import { createContext } from 'react';
import { Place, WeatherState } from '../interfaces';
import { Coord } from '../interfaces/weatherResponse.interface';

export interface WeatherContextProps extends WeatherState {
  handleSearchPlacesByTerm: (q: string) => Promise<Place[]>;
  handleChangePlace: (cood: Coord) => void;
}

export const WeatherContext = createContext<WeatherContextProps>(
  {} as WeatherContextProps
);
