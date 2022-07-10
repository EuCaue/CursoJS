// PrivateRoute 💬
import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// If the prop Open exist, return the children page, that means, that route with Open is Open for everybody. 💬

// If Open not exist, the check if  the user isLoggedIn, with the value  true, returns the children page. If return false, go back to login page, that is a open route. 💬
export default function PrivateRoute({ Open }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (Open) return <Outlet />;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

// PropTypes settings 💬
PrivateRoute.defaultProps = {
  Open: false,
};

PrivateRoute.propTypes = {
  Open: PropTypes.bool,
};
