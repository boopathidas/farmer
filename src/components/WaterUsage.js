import React, { useState, useEffect } from 'react';

const WaterUsage = () => {
  const [waterUsageData, setWaterUsageData] = useState([]);

  useEffect(() => {
    const fetchWaterUsageData = async () => {
      try {
        const response = await fetch('/api/water-usage');
        const data = await response.json();
        setWaterUsageData(data);
      } catch (error) {
        console.error('Error fetching water usage data:', error);
      }
    };

    fetchWaterUsageData();
  }, []);

  return (
    <div>
      <h2 className="text-primary mb-4">Water Usage</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Borewell SIM No</th>
              <th>Date Time</th>
              <th>Flow Rate</th>
              <th>Borewell ID</th>
            </tr>
          </thead>
          <tbody>
            {waterUsageData.map((usage, index) => (
              <tr key={index}>
                <td>{usage.Borewell_SIM_No}</td>
                <td>{usage.Date_time}</td>
                <td>{usage.Flow_rate}</td>
                <td>{usage.borewell_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaterUsage;
