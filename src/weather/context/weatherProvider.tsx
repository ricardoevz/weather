import { useWeather } from '../hooks/useWeather';
import { WeatherContext } from './weatherContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const WeatherProvider = ({ children }: Props) => {
  const {
    state,

    handleConvertDTtoDay,
    handleSearchPlacesByTerm,
    handleChangePlace,
  } = useWeather();

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        handleConvertDTtoDay,
        handleSearchPlacesByTerm,
        handleChangePlace,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
