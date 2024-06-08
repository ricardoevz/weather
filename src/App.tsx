import { WeatherProvider } from './weather/context';
import { Home } from './weather/pages/Home';

function App() {
  return (
    <WeatherProvider>
      <Home />
    </WeatherProvider>
  );
}

export default App;
