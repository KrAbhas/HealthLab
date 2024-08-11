import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const response = await axios.get('/api/v1/pathologists/reports');
      setReports(response.data);
    };
    fetchReports();
  }, []);

  return (
    <div className="container">
      <h2>View Reports</h2>
      {/* List of reports */}
    </div>
  );
};

export default ViewReports;
