import { WeatherResponse } from '../weather/interfaces/weatherResponse.interface';

export const mockWeather: WeatherResponse = {
  coord: {
    lon: -99.25,
    lat: 18.9167,
  },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d',
    },
  ],
  base: 'stations',
  main: {
    temp: 33.51,
    feels_like: 31.54,
    temp_min: 33.47,
    temp_max: 33.51,
    pressure: 1016,
    humidity: 21,
  },
  visibility: 8047,
  wind: {
    speed: 0.89,
    deg: 163,
  },
  clouds: {
    all: 40,
  },
  dt: 1717700666,
  sys: {
    type: 2,
    id: 2027418,
    country: 'MX',
    sunrise: 1717675144,
    sunset: 1717722767,
  },
  timezone: -21600,
  id: 3528166,
  name: 'El Salto',
  cod: 200,
};
