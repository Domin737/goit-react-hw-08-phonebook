// src/components/App/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import Navigation from '../Navigation/Navigation';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Container>
  );
};

export default App;