import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const IoTDeviceManagement = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState([20.5937, 78.9629]); // Coordinates for India

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=India&appid=YOUR_API_KEY&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h2>IoT Device Management</h2>
      <p>Interface to configure and manage IoT devices (e.g., sensors for soil moisture, weather stations).</p>
      <p>Settings for calibration, firmware updates, and connectivity status monitoring.</p>

      <MapContainer center={location} zoom={5} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {weatherData && (
          <Marker position={location}>
            <Popup>
              <div>
                <h4>{weatherData.name}</h4>
                <p>Temperature: {weatherData.main.temp}°C</p>
                <p>Weather: {weatherData.weather[0].description}</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
                <p>Wind Speed: {weatherData.wind.speed} m/s</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default IoTDeviceManagement;
