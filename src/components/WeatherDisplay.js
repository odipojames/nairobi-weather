import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';
import { useLanguage } from '../contexts/LanguageContext';
import './styles/WeatherDisplay.css'; 
import { Spin } from 'antd';

const WeatherDisplay = () => {
  const { weatherData, isLoading, error } = useContext(WeatherContext);
  const { locale } = useLanguage();
  
  const messages = locale === 'en' ? require('../locales/en.json') : require('../locales/sw.json');

 
  const translateWeather = (weather) => {
    switch (weather) {
      case 'Clouds':
        return messages.Clouds;
      case 'Rain':
        return messages.Rain;
      case 'Snow':
        return messages.Snow;
      case 'Thunderstorm':
        return messages.Thunderstorm;
      case 'Drizzle':
        return messages.Drizzle;
      case 'Clear':
        return messages.Clear;
      default:
        return weather;
    }
  };

  if (isLoading) {
    return <div className="weather-display loading">Loading <Spin /></div>; 
  }

  if (error) {
    return (
      <div className="weather-display error">
        {messages.error}: {messages.fetchWeatherError}
      </div>
    );
  }

  return (
    <div className="weather-display">
      <h2>{weatherData.city}</h2>
      <p>{messages.temperature}: {(weatherData.temperature-273).toFixed(2)}°C</p>
      <p>{messages.weather}: {translateWeather(weatherData.weather)}</p>
    </div>
  );
};

export default WeatherDisplay;
