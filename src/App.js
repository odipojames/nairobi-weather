import React from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherContextProvider from './contexts/WeatherContext';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';


const App = () => {
  
  return (
    <div className="container">
      <h1>Weather Dashboard</h1>
      <LanguageProvider>
      <LanguageSwitcher />
      <WeatherContextProvider>
        <WeatherDisplay />
      </WeatherContextProvider>
      </LanguageProvider>
    </div>
  );
};

export default App;



