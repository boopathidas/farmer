import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Farmer = () => {
  const [farmers, setFarmers] = useState([]);
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [farmerId, setFarmerId] = useState('');
  const [surveyId, setSurveyId] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [nameError, setNameError] = useState('');

  useEffect(() => {
    fetchFarmers();
  }, []);

  const fetchFarmers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/farmers');
      setFarmers(response.data);
    } catch (error) {
      console.error('Error fetching farmers', error);
    }
  };

  const handleAddFarmer = async () => {
    if (validateForm()) {
      const newFarmer = { mobile, name, farmerId, surveyId };
      try {
        const response = await axios.post('http://localhost:5000/api/farmers', newFarmer);
        console.log('Response:', response.data);
        fetchFarmers(); // Fetch the updated list of farmers
        setMobile('');
        setName('');
        setFarmerId('');
        setSurveyId('');
      } catch (error) {
        console.error('Error adding farmer', error);
      }
    }
  };

  const validateForm = () => {
    let isValid = true;

    // Validate mobile number
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
      setMobileError('Mobile number must be exactly 10 digits.');
      isValid = false;
    } else {
      setMobileError('');
    }

    // Validate name
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(name)) {
      setNameError('Name must contain only letters.');
      isValid = false;
    } else {
      setNameError('');
    }

    return isValid;
  };

  const handleDeleteFarmer = async (index, id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/farmers/${id}`);
      console.log('Delete response:', response.data);
      fetchFarmers(); // Fetch the updated list of farmers
    } catch (error) {
      console.error('Error deleting farmer', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Farmer Management</h2>
      <div className="card p-4 mb-4">
        <form>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="mobile" className="form-label">Mobile Number</label>
              <input
                type="tel"
                className={`form-control ${mobileError ? 'is-invalid' : ''}`}
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              {mobileError && <div className="invalid-feedback">{mobileError}</div>}
            </div>
            <div className="col">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className={`form-control ${nameError ? 'is-invalid' : ''}`}
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {nameError && <div className="invalid-feedback">{nameError}</div>}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="farmerId" className="form-label">Farmer ID</label>
              <input
                type="text"
                className="form-control"
                id="farmerId"
                value={farmerId}
                onChange={(e) => setFarmerId(e.target.value)}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="surveyId" className="form-label">Survey ID</label>
              <input
                type="text"
                className="form-control"
                id="surveyId"
                value={surveyId}
                onChange={(e) => setSurveyId(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={handleAddFarmer}>
            Add Farmer
          </button>
        </form>
      </div>
      <div>
        <h3>Existing Farmers</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Mobile Number</th>
              <th>Name</th>
              <th>Farmer ID</th>
              <th>Survey ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {farmers.map((farmer, index) => (
              <tr key={farmer.id}>
                <td>{farmer.mobile}</td>
                <td>{farmer.name}</td>
                <td>{farmer.farmerId}</td>
                <td>{farmer.surveyId}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteFarmer(index, farmer.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Farmer;
