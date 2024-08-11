import React from 'react';

const ReportTemplate = ({ patientName }) => {
  return (
    <div className="report-template">
      <header>HealthLab Report</header>
      <main>
        <h2>Patient: {patientName}</h2>
        {/* Dynamic content */}
      </main>
      <footer>HealthLab © 2024</footer>
    </div>
  );
};

export default ReportTemplate;
