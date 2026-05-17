import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { WeatherData } from '../types/weather';

function useLocalStorage(): [
  WeatherData[],
  Dispatch<SetStateAction<WeatherData[]>>,
] {
  const [storedValue, setStoredValue] = useState<WeatherData[]>(() => {
    try {
      const savedWeatherData = localStorage.getItem('searchHistory');
      return savedWeatherData ? JSON.parse(savedWeatherData) : [];
    } catch (err) {
      console.error(err);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(storedValue));
  }, [storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
