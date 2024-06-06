// src/components/ContactItem/ContactItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

const ContactItem = ({ contact, onDelete }) => {
  return (
    <Item>
      <span>
        {contact.name}: {contact.phone}
      </span>
      <Button onClick={onDelete}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
