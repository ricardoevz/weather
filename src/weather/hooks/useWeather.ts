import { useEffect, useReducer, useState } from 'react';
import { Daily, WeatherState } from '../interfaces';
import { getPlacesByTerm } from '../service/weather.service';
import { getUserLocation } from '../../helpers/getUserLocation';
import { weatherReducer } from '../context';
import {
  Coord,
  WeatherResponse,
} from '../interfaces/weatherResponse.interface';
import api from '../../apis/api';
import { List } from '../interfaces/waetherForescat.response';
import { convertDTtoDay } from '../../helpers';

interface WeatherList {
  [k: string]: Daily;
}

const INITIAL_STATE: WeatherState = {
  current: {} as WeatherResponse,
  daily: [],
  isLoading: true,
};

export const useWeather = () => {
  const [state, dispatch] = useReducer(weatherReducer, INITIAL_STATE);
  const [error, setError] = useState<string>();

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
      const responseWeather = await api.get(`/weather?lat=${lat}&lon=${lon}`);
      const responseForecast = await api.get(`/forecast?lat=${lat}&lon=${lon}`);
      dispatch({
        type: 'setWeather',
        payload: {
          current: responseWeather.data,
          daily: groupByDay(responseForecast.data.list),
        },
      });
    } catch (error) {
      setError(`${error}`);
    }
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
      setError(`${error}`);
    }
  };

  const handleChangePlace = (coords: Coord) => {
    getData(coords);
  };

  return {
    state,
    error,
    handleSearchPlacesByTerm,
    handleChangePlace,
  };
};
