import React, { createContext, useState, useEffect } from 'react';
import { fetchWeatherData } from '../services/WeatherService';
import { useLanguage } from '../contexts/LanguageContext';

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { locale } = useLanguage();

  useEffect(() => {
    fetchData();
  }, [locale]); // Trigger fetchData when locale changes

  const fetchData = async () => {
    setIsLoading(true); // Set loading state to true when fetching data
    setError(null); // Clear any previous errors

    try {
      const data = await fetchWeatherData();
      setWeatherData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false); // Set loading state to false after fetching data (success or error)
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, isLoading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;