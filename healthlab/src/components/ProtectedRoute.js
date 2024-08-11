import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, userRole, allowedRoles, ...rest }) => {
  return (
    allowedRoles.includes(userRole) ? (
      <Component {...rest} />
    ) : (
      <Navigate to="/login" />
    )
  );
};

export default ProtectedRoute;
