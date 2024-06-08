import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, resetError } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { Form, Label, Input, Button } from './LoginPage.styled';

const LoginPage = () => {
  const [formData, setFormData] = useState({
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
      await dispatch(loginUser(formData)).unwrap();
      navigate('/contacts');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Label>
      {error && (
        <div>
          <p style={{ color: 'red' }}>
            {error === 'Request failed with status code 401'
              ? 'Niepoprawne poświadczenia'
              : error === 'User not found'
              ? 'Użytkownik nie istnieje. Proszę się zarejestrować.'
              : `Błąd: ${error}`}
          </p>
          <p style={{ color: 'blue' }}>
            {error === 'Request failed with status code 401'
              ? 'Sprawdź poprawność wprowadzonych danych.'
              : error === 'User not found'
              ? 'Upewnij się, że adres e-mail jest poprawny.'
              : 'Wystąpił błąd. Spróbuj ponownie później.'}
          </p>
        </div>
      )}
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginPage;
