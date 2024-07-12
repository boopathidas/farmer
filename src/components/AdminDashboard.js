import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import UserManagement from './UserManagement';
import IoTDeviceManagement from './IoTDeviceManagement';
import PerformanceMonitoring from './PerformanceMonitoring';
import Reporting from './Reporting';
import AlertManagement from './AlertManagement';
import Farmer from './Farmer';
import Borewell from './Borewell';
import WaterUsage from './WaterUsage'; // Import WaterUsage component

const AdminDashboard = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/admin-dashboard' || location.pathname === '/admin-dashboard/home';

  const [dashboardData, setDashboardData] = useState({
    borewellCount: 0,
    waterUsage: 0,
    farmerCount: 0,
    farmers: [],
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('/api/dashboard');
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div>
      <header className="bg-primary text-white p-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="mb-0">Admin Dashboard</h1>
            </div>
          </div>
        </div>
        <nav className="bg-dark">
          <div className="container">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link to="/admin-dashboard/home" className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin-dashboard/farmer" className="nav-link text-white">Farmer Management</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin-dashboard/borewell" className="nav-link text-white">Borewell Management</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin-dashboard/user-management" className="nav-link text-white">User Management</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin-dashboard/reporting" className="nav-link text-white">Reporting</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin-dashboard/water-usage" className="nav-link text-white">Water Usage</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container mt-4">
        {isDashboard && (
          <Dashboard
            borewellCount={dashboardData.borewellCount}
            waterUsage={dashboardData.waterUsage}
            farmerCount={dashboardData.farmerCount}
            farmers={dashboardData.farmers}
          />
        )}
        <Routes>
          <Route path="home" element={<Dashboard
            borewellCount={dashboardData.borewellCount}
            waterUsage={dashboardData.waterUsage}
            farmerCount={dashboardData.farmerCount}
            farmers={dashboardData.farmers}
          />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="iot-device-management" element={<IoTDeviceManagement />} />
          <Route path="performance-monitoring" element={<PerformanceMonitoring />} />
          <Route path="reporting" element={<Reporting />} />
          <Route path="alert-management" element={<AlertManagement />} />
          <Route path="farmer" element={<Farmer />} />
          <Route path="borewell" element={<Borewell />} />
          <Route path="water-usage" element={<WaterUsage />} /> {/* Add new route */}
        </Routes>
      </div>

      <footer className="bg-primary text-white p-3 text-center mt-5">
        <div className="container">
          <p className="mb-0">Learn more about saving water and electricity with drip irrigation and smart farming practices.</p>
        </div>
      </footer>
    </div>
  );
};

const Dashboard = ({ borewellCount, waterUsage, farmerCount, farmers }) => (
  <div>
    <h2 className="text-primary mb-4">Dashboard</h2>
    <div className="row mb-4">
      <div className="col-md-3 col-sm-6">
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">Borewell Count</div>
          <div className="card-body">
            <h5 className="card-title">{borewellCount}</h5>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="card text-white bg-success mb-3">
          <div className="card-header">Water Usage (Liters)</div>
          <div className="card-body">
            <h5 className="card-title">{waterUsage}</h5>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="card text-white bg-info mb-3">
          <div className="card-header">Farmer Count</div>
          <div className="card-body">
            <h5 className="card-title">{farmerCount}</h5>
          </div>
        </div>
      </div>
    </div>
    <h3 className="text-primary">Farmers</h3>
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Survey ID</th>
            <th>Water Savings (Liters)</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer, index) => (
            <tr key={index}>
              <td>{farmer.name}</td>
              <td>{farmer.surveyId}</td>
              <td>{farmer.waterSavings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AdminDashboard;
