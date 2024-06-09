import { useEffect, useReducer } from 'react';
import { Daily, WeatherState } from '../interfaces';
import {
  getForecast,
  getPlacesByTerm,
  getWeather,
} from '../service/weather.service';
import { getUserLocation } from '../../helpers/getUserLocation';
import { weatherReducer } from '../context';
import {
  Coord,
  WeatherResponse,
} from '../interfaces/weatherResponse.interface';
import { List } from '../interfaces/waetherForescat.response';
import { convertDTtoDay } from '../../helpers';

interface WeatherList {
  [k: string]: Daily;
}

const INITIAL_STATE: WeatherState = {
  current: {} as WeatherResponse,
  daily: [],
  isLoading: true,
  error: {
    open: false,
    message: '',
  },
};

export const useWeather = () => {
  const [state, dispatch] = useReducer(weatherReducer, INITIAL_STATE);

  useEffect(() => {
    const fetchData = async () => {
      const coord = (await getUserCoord()) as { lat: number; lon: number };
      getData(coord);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async ({ lat, lon }: Coord) => {
    try {
      const responseWeather = await getWeather(lat, lon);
      const responseForecast = await getForecast(lat, lon);
      dispatch({
        type: 'setWeather',
        payload: {
          current: responseWeather,
          daily: groupByDay(responseForecast.list),
        },
      });
    } catch (error) {
      setErrorResponse(error as Error);
    }
  };

  const setErrorResponse = (error: Error) => {
    dispatch({
      type: 'setError',
      payload: {
        open: true,
        message: `${error.message}`,
      },
    });
  };

  const getUserCoord = async () => {
    try {
      const coor = await getUserLocation();
      return coor;
    } catch (defaulCoord) {
      return defaulCoord;
    }
  };

  const groupByDay = (list: List[]) => {
    const newList: WeatherList = {};

    list.forEach((day) => {
      const dayOfWeek = convertDTtoDay(day.dt);
      newList[dayOfWeek] ??= {
        hourly: [],
        current: {} as List,
      };

      newList[dayOfWeek].current = day;
      newList[dayOfWeek].hourly.push({ dt: day.dt, temp: day.main.temp });
    });
    return Object.values(newList);
  };

  const handleSearchPlacesByTerm = async (q: string) => {
    if (q.length === 0) {
      return [];
    }

    try {
      const resp = getPlacesByTerm(q);
      return resp;
    } catch (error) {
      setErrorResponse(error as Error);
    }
  };

  const handleChangePlace = (coords: Coord) => {
    getData(coords);
  };

  const handleCloseError = () => {
    dispatch({ type: 'setError', payload: { open: false, message: '' } });
  };

  return {
    state,
    handleSearchPlacesByTerm,
    handleChangePlace,
    handleCloseError,
  };
};
