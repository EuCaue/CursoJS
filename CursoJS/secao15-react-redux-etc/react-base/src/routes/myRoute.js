import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function MyRoute() {
  const isLoggedIn = false;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

// myRoute.defaultProps = {
// isClosed: false,
// };
//
// myRoute.propTypes = {
// component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
// .isRequired,
// isClosed: PropTypes.bool,
// };
//
