// src/components/ContactForm/ContactForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.contacts.error);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Label>
      <Label>
        Number
        <Input
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </Label>
      {error && <p>Error: {error}</p>}
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
