import { useContext } from 'react';
import { WeatherContext } from '../context';
import { convertDTtoDay } from '../../helpers';

export const Weather = () => {
  const { current } = useContext(WeatherContext);
  return (
    <section
      className='flex flex-col justify-center items-center'
      role='region'
    >
      <img
        src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
        alt={current.weather[0].main}
        className='w-44'
      />
      <h1
        className='font-bold'
        aria-label={`Temperatura actual: ${Math.round(
          current.main.temp
        )} grados Celsius`}
      >
        <span className='text-8xl'>{Math.round(current.main.temp)}°C</span>
      </h1>
      <h1 className='text-4xl font-bold'>{current.weather[0].main}</h1>
      <div className='flex justify-center mt-10 gap-4'>
        <h1 className='text-xl font-bold'>Hoy</h1>
        <h1 className='text-3xl font-bold -m-1'>-</h1>
        <h1
          className='text-xl font-bold'
          aria-label='Día de la semana'
        >
          {convertDTtoDay(current.dt)}
        </h1>
      </div>
      <div
        className='flex justify-center mt-10 gap-2'
        aria-labelledby='location-label'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
        <h2
          id='location-label'
          className='text-3xl'
          aria-label={`Ubicación actual: ${current.name}`}
        >
          {current.name}
        </h2>
      </div>
    </section>
  );
};
