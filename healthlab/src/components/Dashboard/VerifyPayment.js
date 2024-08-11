import React, { useState } from 'react';
import axios from 'axios';

const VerifyPayment = () => {
  const [invoiceId, setInvoiceId] = useState('');
  const [error, setError] = useState('');

  const handleVerifyPayment = async () => {
    try {
      await axios.post('/api/v1/verify-payment', { invoiceId });
      // Handle success
    } catch (err) {
      setError('An error occurred.');
    }
  };

  return (
    <div className="container">
      <h2>Verify Payment</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Form fields */}
      <button onClick={handleVerifyPayment}>Verify</button>
    </div>
  );
};

export default VerifyPayment;
