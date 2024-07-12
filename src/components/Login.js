import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';  // Import the logo image
import './Login.css';  // Import the CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [step, setStep] = useState('login');
  const navigate = useNavigate();

  const handleLogin = () => {
    setStep('roleSelection');
  };

  const handleRoleSelection = () => {
    if (role === 'admin') {
      navigate('/admin-dashboard');
    } else if (role === 'farmer') {
      navigate('/farmer-dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="overlay">
        {step === 'login' && (
          <div className="card p-4 shadow-sm login-card">
            <div className="text-center mb-4">
              <img src={logo} alt="Smart Farming Logo" className="logo" /> {/* Use imported logo */}
              <h2>Login</h2>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="button" className="btn btn-primary w-100" onClick={handleLogin}>
                Login
              </button>
              <p className="mt-3 text-center">Don't have an account? <a href="/signup">Sign Up</a></p>
            </form>
          </div>
        )}
        {step === 'roleSelection' && (
          <div className="card p-4 shadow-sm login-card">
            <h2 className="mb-4">Select Role</h2>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role</label>
              <select
                className="form-control form-control-sm"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="farmer">Farmer</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary w-100" onClick={handleRoleSelection}>
              Proceed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
