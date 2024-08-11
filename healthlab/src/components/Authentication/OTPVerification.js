import React, { useState } from 'react';
import axios from 'axios';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleVerifyOTP = async () => {
    try {
      await axios.post('/api/v1/verify-otp', { otp });
      // Handle success
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Invalid OTP.');
      } else {
        setError('An error occurred.');
      }
    }
  };

  return (
    <div className="container">
      <h2>Verify OTP</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <input 
        type="text" 
        value={otp} 
        onChange={(e) => setOtp(e.target.value)} 
        placeholder="Enter OTP" 
      />
      <button onClick={handleVerifyOTP}>Verify</button>
    </div>
  );
};

export default OTPVerification;
