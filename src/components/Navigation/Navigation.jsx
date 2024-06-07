// src/components/Navigation/Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav } from './Navigation.styled';
import UserMenu from '../UserMenu/UserMenu';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Nav>
      <div>
        {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </div>
      {isLoggedIn && <UserMenu />}
    </Nav>
  );
};

export default Navigation;
