import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Alerts from './Alerts';
import AdjustIrrigation from './AdjustIrrigation';
import InputCropInfo from './InputCropInfo';
import MonitorHealth from './MonitorHealth';
import RealTimeData from './RealTimeData';
import TrackUsage from './TrackUsage';

const FarmerDashboard = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/farmer-dashboard';

  return (
    <div>
      <header className="bg-dark text-white p-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="mb-4">Farmer Dashboard</h1>
            </div>
          </div>
        </div>
        <nav>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/farmer-dashboard/real-time-data" className="nav-link text-white">Real-Time Data</Link>
            </li>
            <li className="nav-item">
              <Link to="/farmer-dashboard/alerts" className="nav-link text-white">Alerts</Link>
            </li>
            <li className="nav-item">
              <Link to="/farmer-dashboard/adjust-irrigation" className="nav-link text-white">Adjust Irrigation</Link>
            </li>
            <li className="nav-item">
              <Link to="/farmer-dashboard/track-usage" className="nav-link text-white">Track Usage</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/farmer-dashboard/input-crop-info" className="nav-link text-white">Input Crop Info</Link>
            </li>
            <li className="nav-item">
              <Link to="/farmer-dashboard/monitor-health" className="nav-link text-white">Monitor Health</Link>
            </li> */}
          </ul>
        </nav>
      </header>

      <div className="container mt-4">
        {isDashboard && <h2>Welcome to the Farmer Dashboard</h2>}
        <Routes>
          <Route path="/farmer-dashboard/real-time-data" element={<RealTimeData />} />
          <Route path="/farmer-dashboard/alerts" element={<Alerts />} />
          <Route path="/farmer-dashboard/adjust-irrigation" element={<AdjustIrrigation />} />
          <Route path="/farmer-dashboard/track-usage" element={<TrackUsage />} />
          <Route path="/farmer-dashboard/input-crop-info" element={<InputCropInfo />} />
          <Route path="/farmer-dashboard/monitor-health" element={<MonitorHealth />} />
        </Routes>
      </div>

      <footer className="bg-dark text-white p-3 text-center mt-5">
        <div className="container">
          <p className="mb-0">Monitor your crops and optimize water usage with our smart farming system.</p>
        </div>
      </footer>
    </div>
  );
};

export default FarmerDashboard;
