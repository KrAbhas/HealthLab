import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await axios.post('/api/v1/signup', { email, phone, otp });
      // Redirect or show success message
    } catch (err) {
      if (err.response) {
        if (err.response.status === 409) {
          setError('ID already exists.');
        } else {
          setError('An error occurred.');
        }
      }
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSignUp}>
        {/* Form fields */}
      </form>
    </div>
  );
};

export default SignUp;
