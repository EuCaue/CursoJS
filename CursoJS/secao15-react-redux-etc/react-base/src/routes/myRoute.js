import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function MyRoute() {
  const isLoggedIn = true;
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
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
