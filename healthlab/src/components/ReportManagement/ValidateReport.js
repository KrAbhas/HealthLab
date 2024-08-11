import React, { useState } from 'react';
import axios from 'axios';

const ValidateReport = () => {
  const [reportId, setReportId] = useState('');
  const [status, setStatus] = useState('');
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  const handleValidateReport = async () => {
    try {
      await axios.post('/api/v1/validate-report', { reportId, status, reason });
      // Handle success
    } catch (err) {
      setError('An error occurred.');
    }
  };

  return (
    <div className="container">
      <h2>Validate Report</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Form fields */}
      <button onClick={handleValidateReport}>Validate</button>
    </div>
  );
};

export default ValidateReport;  
