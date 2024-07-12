import React, { useState } from 'react';

const InputCropInfo = () => {
  const [crop, setCrop] = useState('');
  const [area, setArea] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle crop information submission
    console.log(`Crop: ${crop}, Area: ${area}`);
  };

  return (
    <div>
      <h2>Input Crop Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="crop" className="form-label">Crop Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="crop" 
            value={crop} 
            onChange={(e) => setCrop(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="area" className="form-label">Area (acres)</label>
          <input 
            type="number" 
            className="form-control" 
            id="area" 
            value={area} 
            onChange={(e) => setArea(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default InputCropInfo;
