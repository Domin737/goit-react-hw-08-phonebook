import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </Nav>
  );
};

export default Navigation;
