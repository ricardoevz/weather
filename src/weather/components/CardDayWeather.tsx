import { Daily } from '../interfaces';
import { convertDTtoDay } from '../../helpers';

export const CardDayWeather = ({ current }: Daily) => {
  return (
    <div
      className='bg-slate-700 p-5 rounded'
      aria-labelledby='weather-day'
    >
      <h2
        className='text-center capitalize'
        id='weather-day'
      >
        {convertDTtoDay(current.dt)}
      </h2>
      <div
        className='flex justify-center'
        role='img'
        aria-label={`Icono del clima: ${current.weather[0].description}`}
      >
        <img
          src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
          alt={current?.weather[0].description}
          width={80}
        />
      </div>
      <h3
        className='text-center capitalize'
        aria-live='polite'
      >
        {current.weather[0].description}
      </h3>
      <div className='flex justify-between gap-3 mt-2'>
        <h3
          aria-label={`Temperatura mínima: ${Math.round(
            current.main.temp_min
          )} grados Celsius`}
        >
          Min: {Math.round(current.main.temp_min)} °C
        </h3>
        <h3
          aria-label={`Temperatura máxima: ${Math.round(
            current.main.temp_max
          )} grados Celsius`}
        >
          Máx: {Math.round(current.main.temp_max)} °C
        </h3>
      </div>
    </div>
  );
};
