import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('view-only');
  const [status, setStatus] = useState('active');

  const handleAddUser = () => {
    const newUser = { name, email, role, status };
    setUsers([...users, newUser]);
    setName('');
    setEmail('');
    setRole('view-only');
    setStatus('active');
  };

  return (
    <div className="container mt-5">
    
      <h2>User Management</h2>
      
      <div className="card p-4 mb-4">
      
        <form>
          <div className="row mb-3">
          <div className="col">

            <label htmlFor="name" className="form-label text-sm">Name</label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            </div>
          
          <div className="col">

            <label htmlFor="email" className="form-label text-sm">Email</label>
            <input
              type="email"
              className="form-control form-control-sm"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>
          
          <div className="col">

            <label htmlFor="role" className="form-label text-sm">Role</label>
            <select
              className="form-control form-control-sm"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="view-only">View-Only</option>
              <option value="data-entry">Data Entry</option>
              <option value="admin">Admin</option>
            </select>
         </div>
          
          <div className="col">

            <label htmlFor="status" className="form-label text-sm">Status</label>
            <select
              className="form-control form-control-sm"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            </div>
          </div>
          <button type="button" className="btn btn-primary btn-sm" onClick={handleAddUser}>
            Add User
          </button>
        </form>
      </div>

      <div>
        <h3>Existing Users</h3>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
