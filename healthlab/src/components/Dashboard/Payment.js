import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handlePayment = async () => {
    try {
      await axios.post('/api/v1/payment', { amount });
      // Handle success
    } catch (err) {
      setError('An error occurred.');
    }
  };

  return (
    <div className="container">
      <h2>Payment</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Payment form */}
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default Payment;
