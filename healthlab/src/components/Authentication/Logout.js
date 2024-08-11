import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout operations
    navigate('/login');
  };

  return (
    <div className="container">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
