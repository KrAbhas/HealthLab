import React from 'react';

const Dashboard = ({ userRole }) => {
  return (
    <div className="container">
      <h2>Dashboard</h2>
      {userRole === 'Admin' && <p>Admin Panel: Manage users, payments, and more.</p>}
      {userRole === 'Doctor' && <p>Doctor's Panel: View and manage patient reports.</p>}
      {userRole === 'User' && <p>User Panel: Book appointments, view reports, and make payments.</p>}
      {/* Add more role-based content as needed */}
    </div>
  );
};

export default Dashboard;
