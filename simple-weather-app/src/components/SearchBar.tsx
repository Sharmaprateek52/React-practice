import { useState } from 'react';
import './SearchBar.css';

interface Props {
  onSearch: (city: string) => void;
}

function SearchBar({ onSearch }: Props) {
  const [city, setCity] = useState('');

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity('');
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-bar__input"
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="search-bar__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
