import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  console.log('token :>> ', token);

  if (!token) {
    // Redirect ke halaman login jika token tidak ada
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
