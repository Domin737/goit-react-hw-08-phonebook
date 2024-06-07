// src/components/UserMenu/UserMenu.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { MenuContainer, Email, LogoutButton } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      navigate('/login');
    });
  };

  return (
    <MenuContainer>
      <Email>{user?.email}</Email>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </MenuContainer>
  );
};

export default UserMenu;
