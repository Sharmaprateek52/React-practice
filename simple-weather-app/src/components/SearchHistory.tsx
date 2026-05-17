import type { WeatherData } from '../types/weather';
import WeatherCard from './WeatherCard';
import './SearchHistory.css';

interface Props {
  onClearSearchHistory: () => void;
  searchHistory: WeatherData[];
}

function SearchHistory({ onClearSearchHistory, searchHistory }: Props) {
  return (
    <section className="search-history">
      <div className="search-history__header">
        <h3 className="search-history__title">Search History</h3>
        <button
          className="search-history__clear"
          onClick={onClearSearchHistory}
          aria-label="Clear search history"
        >
          Clear
        </button>
      </div>

      {searchHistory.length === 0 ? (
        <p className="search-history__empty">No previous searches.</p>
      ) : (
        <div className="search-history__list" role="list">
          {searchHistory.map((value, idx) => (
            <div
              className="search-history__item"
              key={`${value.city}-${idx}`}
              role="listitem"
            >
              <WeatherCard weatherData={value} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default SearchHistory;
