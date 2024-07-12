import React, { useState } from 'react';

const Alerts = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [moistureLevel, setMoistureLevel] = useState('');
  const [weatherConditions, setWeatherConditions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle alert preferences submission
    console.log(`Mobile Number: ${mobileNumber}, Moisture Level: ${moistureLevel}, Weather Conditions: ${weatherConditions}`);
  };

  return (
    <div className="container mt-4">
      <h2>Alert Preferences</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
          <input 
            type="text" 
            className="form-control" 
            id="mobileNumber" 
            value={mobileNumber} 
            onChange={(e) => setMobileNumber(e.target.value)} 
            placeholder="Enter your mobile number" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="moistureLevel" className="form-label">Low Soil Moisture Level (%)</label>
          <input 
            type="number" 
            className="form-control" 
            id="moistureLevel" 
            value={moistureLevel} 
            onChange={(e) => setMoistureLevel(e.target.value)} 
            placeholder="Enter the moisture level threshold" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="weatherConditions" className="form-label">Weather Conditions</label>
          <input 
            type="text" 
            className="form-control" 
            id="weatherConditions" 
            value={weatherConditions} 
            onChange={(e) => setWeatherConditions(e.target.value)} 
            placeholder="Enter specific weather conditions" 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Preferences</button>
      </form>
      <div className="mt-4">
        <h3>Current Alerts</h3>
        <p>No alerts at the moment.</p>
      </div>
    </div>
  );
};

export default Alerts;
