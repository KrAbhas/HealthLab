import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewPatients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await axios.get('/api/v1/doctors/patients');
      setPatients(response.data);
    };
    fetchPatients();
  }, []);

  return (
    <div className="container">
      <h2>View Patients</h2>
      {/* List of patients */}
    </div>
  );
};

export default ViewPatients;
    