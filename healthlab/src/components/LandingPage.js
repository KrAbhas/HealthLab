import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to HealthLab</h1>
      <p>Your one-stop solution for health management.</p>
      <Link to="/login" className="btn btn-primary">Login</Link>
      <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
    </div>
  );
};

export default LandingPage;
