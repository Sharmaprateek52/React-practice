import { useState } from 'react';
import type { WeatherData } from '../types/weather';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import WeatherCard from '../components/WeatherCard';
import { fetchWeather } from '../services/weatherService';
import useLocalStorage from '../hooks/useLocalStorage';
import SearchHistory from '../components/SearchHistory';

function WeatherPage() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchHistory, setSearchHistory] = useLocalStorage();

  async function handleSearch(city: string) {
    try {
      setLoading(true);
      const data = await fetchWeather(city);
      const formattedWeather: WeatherData = {
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      };
      setWeather(formattedWeather);
      setSearchHistory((prev) => [formattedWeather, ...prev]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to fetch weather data.'
      );
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  const clearHistory = () => {
    setSearchHistory([]);
  };

  return (
    <div className="weather-page">
      <h1>Welcome to weather app</h1>
      <p>Search for a city to get the current weather information.</p>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loading />}

      {error && <ErrorMessage message={error} />}

      {weather && <WeatherCard weatherData={weather} />}
      {searchHistory && (
        <SearchHistory
          searchHistory={searchHistory}
          onClearSearchHistory={clearHistory}
        />
      )}
    </div>
  );
}
export default WeatherPage;
