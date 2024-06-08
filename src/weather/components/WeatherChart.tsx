import { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { WeatherContext } from '../context';
import { ChartData, ChartOptions } from 'chart.js/auto';
import { convertDTtoDay } from '../../helpers';

export const WeatherChart = () => {
  const { daily } = useContext(WeatherContext);
  const [chartData, setChartData] = useState<ChartData<'line'>>();

  useEffect(() => {
    const labels: string[] = [];
    const temperatures: number[] = [];
    const temperatureFeelLikes: number[] = [];

    daily.forEach((day) => {
      const date = convertDTtoDay(day.current.dt);
      labels.push(date);
      temperatures.push(day.current.main.temp);
      temperatureFeelLikes.push(day.current.main.feels_like);
    });

    setChartData({
      labels,
      datasets: [
        {
          label: 'Temperatura (°C)',
          data: temperatures,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: false,
        },
        {
          label: 'Sensacion termica (°C)',
          data: temperatureFeelLikes,
          borderColor: '#4f5113',
          backgroundColor: 'rgba(184, 192, 75, 0.2)',
          fill: true,
        },
      ],
    });
  }, [daily]);

  const options: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Día de la semana',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperatura (°C)',
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Pronóstico del Clima por dia',
      },
    },
  };

  return (
    <section
      role='region'
      aria-labelledby='chart-heading'
      aria-live='polite'
    >
      {chartData ? (
        <>
          <h2
            id='chart-heading'
            className='sr-only'
          >
            Gráfico del Clima
          </h2>
          <Line
            data={chartData}
            options={options}
            role='img'
            aria-label='Gráfico de línea mostrando datos de clima'
          />
        </>
      ) : (
        <p aria-live='polite'>Cargando datos...</p>
      )}
    </section>
  );
};
