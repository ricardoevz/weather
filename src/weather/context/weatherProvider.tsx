import { useWeather } from '../hooks/useWeather';
import { WeatherContext } from './weatherContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const WeatherProvider = ({ children }: Props) => {
  const {
    state,

    handleSearchPlacesByTerm,
    handleChangePlace,
  } = useWeather();

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        handleSearchPlacesByTerm,
        handleChangePlace,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
