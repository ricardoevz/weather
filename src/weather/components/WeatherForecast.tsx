import { useContext } from 'react';
import { WeatherContext } from '../context';
import { CardDayWeather } from './CardDayWeather';

export const WeatherForecast = () => {
  const { daily } = useContext(WeatherContext);
  const gridCols = daily.length === 5 ? 'grid-cols-5' : 'grid-cols-6';
  return (
    <section role='region'>
      <div className={`grid grid-cols-2 md:grid-cols-3 xl:${gridCols} gap-2`}>
        {daily.length > 0 &&
          daily.map((day) => (
            <CardDayWeather
              {...day}
              key={day.current.dt}
            />
          ))}
      </div>
    </section>
  );
};
