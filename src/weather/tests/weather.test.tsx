import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Weather } from '../components';
import { WeatherContext } from '../context';
import { mockWeatherContext } from '../../mocks/mockWeatherContext';

describe('Weather Component', () => {
  it('should render weather details correctly', () => {
    render(
      <WeatherContext.Provider value={mockWeatherContext}>
        <Weather />
      </WeatherContext.Provider>
    );

    expect(screen.getByLabelText(/Temperatura actual/i)).toHaveTextContent(
      '34°C'
    );

    const imgElement = screen.getByAltText('Clouds');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      'src',
      'https://openweathermap.org/img/wn/03d@2x.png'
    );

    expect(screen.getByLabelText(/Día de la semana/i)).toHaveTextContent(
      'jueves'
    );

    expect(screen.getByLabelText(/Ubicación actual/i)).toHaveTextContent(
      'El Salto'
    );
  });
});
