// src/pages/RegisterPage/RegisterPage.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { Form, Label, Input, Button } from './RegisterPage.styled';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(registerUser(formData)).unwrap();
      navigate('/contacts'); // Przekieruj po rejestracji
    } catch (error) {
      // Obsługa błędów (np. wyświetl komunikat o błędzie)
      console.error('Registration failed:', error);
      // Możesz tutaj dodać logikę wyświetlania komunikatu o błędzie dla użytkownika
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </Label>
      {error && <p>Error: {error}</p>}
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegisterPage;
