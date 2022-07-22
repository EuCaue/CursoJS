// Header File 💬

// Global imports 💬
import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  // FaCircle,
  FaPowerOff,
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// Local imports
import { Nav } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Header() {
  // Hooks 💬
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to logout
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    navigate('/login');
    toast.success('Logout successful');
  };

  return (
    // NavBar 💬
    <Nav isLoggedIn={isLoggedIn}>
      <Link to="/">
        <FaHome size={24} className="faHome" />
      </Link>

      <span>
        <Link to="/register">
          <FaUserAlt size={24} className="faUser" />
        </Link>
        {isLoggedIn ? (
          <Link onClick={(e) => handleLogout(e)} to="/logout">
            <FaPowerOff size={24} />
          </Link>
        ) : (
          <Link to="/login">
            <FaSignInAlt size={24} className="faSignIn" />
          </Link>
        )}
      </span>
    </Nav>
  );
}
