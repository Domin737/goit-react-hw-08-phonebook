import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/authSlice';
import { Form, Label, Input, Button } from './LoginPage.styled';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Label>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginPage;
