// Private Route
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// If is loggendIn = true, Navigate to the child page in Route, if false, Return to homepage
export default function MyRoute() {
  const isLoggedIn = true;
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}
