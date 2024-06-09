import { useContext } from 'react';
import { WeatherContext } from '../context';
import {
  InputSearch,
  Weather,
  WeatherChart,
  WeatherForecast,
  WeatherHightlights,
} from '../components';
import { Snackbar } from '@mui/material';

export const Home = () => {
  const { isLoading, error, handleCloseError } = useContext(WeatherContext);

  return (
    <main className='p-4'>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
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
      )}

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={5000}
        open={error.open}
        onClose={handleCloseError}
        message={error.message}
        ContentProps={{
          sx: {
            bgcolor: 'rgb(211, 47, 47, 0.7)',
          },
        }}
      />
    </main>
  );
};
