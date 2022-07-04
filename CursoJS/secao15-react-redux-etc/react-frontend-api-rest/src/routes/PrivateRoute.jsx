// Private Route
import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

// If is loggendIn = true, Navigate to the child page in Route, if false, Return to homepage
export default function PrivateRoute({ Open }) {
  return Open ? <Outlet /> : <Navigate to="/" />;
}

PrivateRoute.propTypes = {
  Open: PropTypes.bool.isRequired,
};
