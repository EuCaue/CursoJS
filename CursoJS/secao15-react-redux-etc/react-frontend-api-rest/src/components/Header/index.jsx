// Header File
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    // NavBar
    <Nav>
      <Link to="/">
        <FaHome size={24} className="faHome" />
      </Link>

      <span>
        <Link to="/register">
          <FaUserAlt size={24} className="faUser" />
        </Link>

        <Link to="/login">
          <FaSignInAlt size={24} className="faSignIn" />
        </Link>
      </span>
    </Nav>
  );
}