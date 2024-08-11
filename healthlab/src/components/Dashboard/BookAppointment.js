import React, { useState } from 'react';
import axios from 'axios';

const BookAppointment = () => {
  const [details, setDetails] = useState({ date: '', time: '' });
  const [error, setError] = useState('');

  const handleBookAppointment = async () => {
    try {
      await axios.post('/api/v1/appointments', details);
      // Handle success
    } catch (err) {
      setError('An error occurred.');
    }
  };

  return (
    <div className="container">
      <h2>Book Appointment</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Form fields */}
      <button onClick={handleBookAppointment}>Book</button>
    </div>
  );
};

export default BookAppointment;
