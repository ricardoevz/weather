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
    handleCloseError,
  } = useWeather();

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        handleSearchPlacesByTerm,
        handleChangePlace,
        handleCloseError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
