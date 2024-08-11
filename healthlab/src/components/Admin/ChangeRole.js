import React, { useState } from 'react';
import axios from 'axios';

const ChangeRole = () => {
  const [userId, setUserId] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleChangeRole = async () => {
    try {
      await axios.post('/api/v1/change-role', { userId, role });
      // Handle success
    } catch (err) {
      setError('An error occurred.');
    }
  };

  return (
    <div className="container">
      <h2>Change Role</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Form fields */}
      <button onClick={handleChangeRole}>Change Role</button>
    </div>
  );
};

export default ChangeRole;
