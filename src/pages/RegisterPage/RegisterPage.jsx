import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, resetError } from '../../redux/authSlice';
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

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

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
      navigate('/contacts');
    } catch (error) {
      console.error('Registration failed:', error);
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
      {error && (
        <div>
          <p style={{ color: 'red' }}>
            {error === 'User already exists'
              ? 'Użytkownik już istnieje'
              : `Błąd: ${error}`}
          </p>
          <p style={{ color: 'blue' }}>
            {error === 'User already exists'
              ? 'Użyj innego adresu e-mail lub zaloguj się.'
              : 'Wystąpił błąd. Spróbuj ponownie później.'}
          </p>
        </div>
      )}
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegisterPage;
