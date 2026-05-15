import type { WeatherData } from '../types/weather';
import './WeatherCard.css';

interface WeatherCardProps {
  weatherData: WeatherData;
}

export default function WeatherCard({ weatherData }: WeatherCardProps) {
  const { city, temperature, humidity, description, icon } = weatherData;
  const iconUrl = icon
    ? `https://openweathermap.org/img/wn/${icon}@2x.png`
    : undefined;

  return (
    <section className="weather-card">
      <header className="weather-card__header">
        <div>
          <h2>{city}</h2>
          <p className="weather-card__description">{description}</p>
        </div>
        {iconUrl ? (
          <img
            className="weather-card__icon"
            src={iconUrl}
            alt={description}
            loading="lazy"
          />
        ) : null}
      </header>

      <div className="weather-card__details">
        <p className="weather-card__temperature">{Math.round(temperature)}°C</p>
        <p className="weather-card__humidity">Humidity: {humidity}%</p>
      </div>
    </section>
  );
}
