import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (password === confirmPassword) {
      // Implement actual signup logic here
      navigate('/login');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h2 className="mb-4">Sign Up</h2>
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
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control form-control-sm"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control form-control-sm"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="button" className="btn btn-primary w-100" onClick={handleSignup}>
            Sign Up
          </button>
          <p className="mt-3 text-center">Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
