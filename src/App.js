// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
// import UserManagement from './components/UserManagement';
// import IoTDeviceManagement from './components/IoTDeviceManagement';
// import PerformanceMonitoring from './components/PerformanceMonitoring';
// import Reporting from './components/Reporting';
// import AlertManagement from './components/AlertManagement';
// import Farmer from './components/Farmer';
// import FarmerDashboard from './components/FarmerDashboard';  // Import FarmerDashboard component
// import Login from './components/Login';  // Import Login component
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />
//           <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
//           <Route path="*" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// const AdminDashboard = () => {
//   const location = useLocation();
//   const isDashboard = location.pathname === '/admin-dashboard';

//   const borewellCount = 10; // Sample data
//   const waterUsage = 12000; // Sample data in liters
//   const farmerCount = 25; // Sample data
//   const farmers = [
//     { name: 'john doe', surveyId: 'A123', waterSavings: 500 },
//     { name: 'jane doe', surveyId: 'B456', waterSavings: 300 }
//   ]; // Sample data

//   return (
//     <div>
//       <header className="bg-dark text-white p-3">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col">
//               <h1 className="mb-4">Admin Dashboard</h1>
//             </div>
//           </div>
//         </div>
//         <nav>
//           <ul className="nav nav-pills">
//             <li className="nav-item">
//               <Link to="/farmer" className="nav-link text-white">Farmer Management</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/user-management" className="nav-link text-white">User Management</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/iot-device-management" className="nav-link text-white">IoT Device Management</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/performance-monitoring" className="nav-link text-white">Performance Monitoring</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/reporting" className="nav-link text-white">Reporting</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/alert-management" className="nav-link text-white">Alert Management</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
      
//       <div className="container mt-4">
//         <Dashboard isDashboard={isDashboard} />
//         <Routes>
//           <Route path="/user-management" element={<UserManagement />} />
//           <Route path="/iot-device-management" element={<IoTDeviceManagement />} />
//           <Route path="/performance-monitoring" element={<PerformanceMonitoring />} />
//           <Route path="/reporting" element={<Reporting />} />
//           <Route path="/alert-management" element={<AlertManagement />} />
//           <Route path="/farmer" element={<Farmer />} />
//         </Routes>
//       </div>
      
//       <footer className="bg-dark text-white p-3 text-center mt-5">
//         <div className="container">
//           <p className="mb-0">Learn more about saving water and electricity with drip irrigation and smart farming practices.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// const Dashboard = ({ isDashboard }) => {
//   const borewellCount = 10; // Sample data
//   const waterUsage = 12000; // Sample data in liters
//   const farmerCount = 25; // Sample data
//   const farmers = [
//     { name: 'john doe', surveyId: 'A123', waterSavings: 500 },
//     { name: 'jane doe', surveyId: 'B456', waterSavings: 300 }
//   ]; // Sample data

//   return (
//     isDashboard && (
//       <div>
//         <h2>Dashboard</h2>
//         <div className="row">
//           <div className="col-md-3">
//             <div className="card text-white bg-primary mb-3">
//               <div className="card-header">Borewell Count</div>
//               <div className="card-body">
//                 <h5 className="card-title">{borewellCount}</h5>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="card text-white bg-success mb-3">
//               <div className="card-header">Usage of Water (Liters)</div>
//               <div className="card-body">
//                 <h5 className="card-title">{waterUsage}</h5>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="card text-white bg-info mb-3">
//               <div className="card-header">Farmer Count</div>
//               <div className="card-body">
//                 <h5 className="card-title">{farmerCount}</h5>
//               </div>
//             </div>
//           </div>
//         </div>
//         <h3>Farmers</h3>
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Survey ID</th>
//               <th>Water Savings (Liters)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {farmers.map((farmer, index) => (
//               <tr key={index}>
//                 <td>{farmer.name}</td>
//                 <td>{farmer.surveyId}</td>
//                 <td>{farmer.waterSavings}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     )
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserManagement from './components/UserManagement';
import IoTDeviceManagement from './components/IoTDeviceManagement';
import PerformanceMonitoring from './components/PerformanceMonitoring';
import Reporting from './components/Reporting';
import AlertManagement from './components/AlertManagement';
import Farmer from './components/Farmer';
import FarmerDashboard from './components/FarmerDashboard';
import AdminDashboard from './components/AdminDashboard'; // Ensure AdminDashboard is imported
import Login from './components/Login';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
          <Route path="/farmer-dashboard/*" element={<FarmerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
