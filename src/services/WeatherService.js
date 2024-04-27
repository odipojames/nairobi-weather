const API_KEY =  process.env.REACT_APP_API_KEY;;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=${API_KEY}`;

export const fetchWeatherData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return {
      city: data.name,
      temperature: data.main.temp,
      weather: data.weather[0].main
    };
  } catch (error) {
    throw error;
  }
};
