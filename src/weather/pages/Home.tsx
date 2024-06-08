import { useContext } from 'react';
import { WeatherContext } from '../context';
import {
  InputSearch,
  Weather,
  WeatherChart,
  WeatherForecast,
  WeatherHightlights,
} from '../components';

export const Home = () => {
  const { isLoading } = useContext(WeatherContext);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <main className='p-4'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 h-full'>
        <div className='col-span-1'>
          <InputSearch />
          <Weather />
        </div>
        <div className='col-span-3 items-center'>
          <WeatherForecast />
          <WeatherHightlights />
          <WeatherChart />
        </div>
      </div>
    </main>
  );
};
