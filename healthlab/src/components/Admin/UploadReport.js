import React, { useState } from 'react';
import axios from 'axios';

const UploadReport = () => {
  const [report, setReport] = useState(null);
  const [error, setError] = useState('');

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('report', report);

      await axios.post('/api/v1/upload-report', formData);
      // Handle success
    } catch (err) {
      setError('An error occurred.');
    }
  };

  return (
    <div className="container">
      <h2>Upload Report</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <input 
        type="file" 
        onChange={(e) => setReport(e.target.files[0])} 
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadReport;
