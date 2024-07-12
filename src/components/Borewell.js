import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Borewell = () => {
  const [borewells, setBorewells] = useState([]);
  const [newBorewell, setNewBorewell] = useState({ borewellId: '', farmerId: '' });

  useEffect(() => {
    fetchBorewells();
  }, []);

  const fetchBorewells = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/borewells');
      setBorewells(response.data);
    } catch (error) {
      console.error('Error fetching borewells', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBorewell({ ...newBorewell, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/borewells', newBorewell);
      setBorewells([...borewells, newBorewell]);
      setNewBorewell({ borewellId: '', farmerId: '' });
    } catch (error) {
      console.error('Error adding borewell', error);
    }
  };

  return (
    <div>
      <h2>Borewell Management</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <label>Borewell ID</label>
          <input
            type="text"
            className="form-control"
            name="borewellId"
            value={newBorewell.borewellId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Farmer ID</label>
          <input
            type="text"
            className="form-control"
            name="farmerId"
            value={newBorewell.farmerId}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Borewell</button>
      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Borewell ID</th>
            <th>Farmer ID</th>
          </tr>
        </thead>
        <tbody>
          {borewells.map((borewell, index) => (
            <tr key={index}>
              <td>{borewell.borewellId}</td>
              <td>{borewell.farmerId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Borewell;
