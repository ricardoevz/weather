import { useContext } from 'react';
import { WeatherContext } from '../context';

export const WeatherHightlights = () => {
  const { current } = useContext(WeatherContext);

  return (
    <div className='grid grid-col-1 md:grid-cols-3 gap-4 '>
      <div
        className='p-5 text-center'
        role='region'
        aria-labelledby='feels-like-label'
      >
        <p
          className='text-xl'
          id='feels-like-label'
        >
          Sensación térmica
        </p>
        <p
          className='text-6xl'
          aria-label={`Sensación térmica: ${Math.round(
            current.main.feels_like
          )} grados Celsius`}
        >
          {Math.round(current.main.feels_like)} °C
        </p>
      </div>
      <div
        className='p-5 text-center'
        role='region'
        aria-labelledby='humidity-label'
      >
        <h1
          id='humidity-label'
          className='text-xl'
        >
          Humedad
        </h1>
        <p
          className='text-6xl'
          aria-label={`Humedad: ${Math.round(current.main.humidity)}%`}
        >
          {Math.round(current.main.humidity)}%
        </p>
        <div
          className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 mt-5'
          role='progressbar'
          aria-valuenow={Math.round(current.main.humidity)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Nivel de humedad: ${Math.round(current.main.humidity)}%`}
        >
          <div
            style={{
              width: `${Math.round(current.main.humidity)}%`,
            }}
            className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500'
          ></div>
        </div>
      </div>

      <div
        className='p-5 text-center'
        role='region'
        aria-labelledby='pressure-label'
      >
        <h1
          className='text-xl'
          id='pressure-label'
        >
          Presión del aire
        </h1>
        <p
          className='text-6xl'
          aria-label={`Presión del aire: ${Math.round(
            current.main.pressure
          )} milibares`}
        >
          {Math.round(current.main.pressure)} mb
        </p>
      </div>
    </div>
  );
};
