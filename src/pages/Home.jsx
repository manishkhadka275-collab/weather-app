import { useState, useEffect } from 'react';
import { fetchWeatherData } from '../services/weatherService';

function Home() {
  const cities = ['London', 'Tokyo', 'New York', 'Kathmandu', 'Sydney'];

  // State hooks with LocalStorage persistence for temperature unit
  const [selectedCity, setSelectedCity] = useState('London');
  const [unit, setUnit] = useState(() => {
    return localStorage.getItem('weatherUnit') || 'metric';
  });
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sync temperature unit preference to localStorage
  useEffect(() => {
    localStorage.setItem('weatherUnit', unit);
  }, [unit]);

  // Fetch weather data when city or unit changes
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetchWeatherData(selectedCity, unit).then((data) => {
      if (isMounted) {
        setWeather(data);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [selectedCity, unit]);

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <div className="page">
      <h1>Weather Dashboard</h1>

      <div className="controls" style={{ margin: '20px 0', display: 'flex', gap: '15px', justifyContent: 'center', alignItems: 'center' }}>
        <label htmlFor="city-select">Select City: </label>
        <select
          id="city-select"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          style={{ padding: '8px 12px', fontSize: '16px' }}
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button onClick={toggleUnit} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Switch to °{unit === 'metric' ? 'F' : 'C'}
        </button>
      </div>

      {loading ? (
        <p>Loading weather data...</p>
      ) : (
        <div className="weather-card" style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '350px', margin: '20px auto' }}>
          <h2>{weather.city}</h2>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {weather.temp}°{unit === 'metric' ? 'C' : 'F'}
          </p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Condition: {weather.condition} ({weather.description})</p>
        </div>
      )}
    </div>
  );
}

export default Home;