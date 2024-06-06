import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </Label>
  );
};

export default Filter;
