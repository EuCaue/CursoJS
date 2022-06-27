/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
// Header File
import React from 'react';
import { useSelector } from 'react-redux';

import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Header() {
  const buttonClicked = useSelector((state) => state.buttonClicked);

  return (
    // NavBar
    <Nav>
      <Link to="/">
        <FaHome size={24} className="faHome" />
      </Link>
      {buttonClicked ? 'Clicked' : 'Not Clicked'}

      <span>
        <Link to="/login">
          <FaUserAlt size={24} className="faUser" />
        </Link>

        <Link to="logout">
          <FaSignInAlt size={24} className="faSignIn" />
        </Link>
      </span>
    </Nav>
  );
}
