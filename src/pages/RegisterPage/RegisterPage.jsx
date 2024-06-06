// src/pages/RegisterPage/RegisterPage.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/authSlice';
import { Form, Label, Input, Button } from './RegisterPage.styled';

const RegisterPage = () => {
  const [name, setName] = useState(''); // Dodaj pole name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password })); // Przesyłaj również name
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />{' '}
        {/* Dodaj pole name */}
      </Label>
      <Label>
        Email
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </Label>
      {error && <p>{error}</p>}
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegisterPage;
