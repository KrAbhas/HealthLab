import React, { useState } from 'react';
import axios from 'axios';

const DownloadReport = () => {
  const [reportId, setReportId] = useState('');
  const [error, setError] = useState('');

  const handleDownload = async () => {
    try {
      const response = await axios.get(`/api/v1/download-report/${reportId}`, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'report.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      setError('An error occurred.');
    }
  };

  return (
    <div className="container">
      <h2>Download Report</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <input 
        type="text" 
        value={reportId} 
        onChange={(e) => setReportId(e.target.value)} 
        placeholder="Enter Report ID" 
      />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default DownloadReport;
    