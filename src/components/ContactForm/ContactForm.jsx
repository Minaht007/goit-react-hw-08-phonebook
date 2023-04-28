import React, { useState } from 'react';
import { PatternFormat } from 'react-number-format';
import PropTypes from 'prop-types';

import { Form, Label, Input, Span, Button } from './ContactForm.styled';
import { InputElement } from '../UI/Input/Input';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = ({ text }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const [newContact, setNewContact] = useState({ name: '', number: '' });

  const handleChange = evt => {
    setNewContact(prev => {
      return { ...prev, [evt.target.name]: evt.target.value };
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.name.value.trim();
    const number = evt.currentTarget.number.value.trim();

    if (!name) {
      return;
    }

    if (!number) {
      return;
    }

    const isNameExist = contacts.some(contact => contact.name === name);
    if (isNameExist) {
      toast.error(`${name} is already in the list`);
      return;
    }

    const isNumberxist = contacts.some(contact => contact.number === number);
    if (isNumberxist) {
      toast.error(`${number} is already in the list`);
      return;
    }

    dispatch(addContact(newContact));
    toast.success('Contact added. ✅');
    setNewContact({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Name</Span>
        <InputElement
          onChange={handleChange}
          type="text"
          name="name"
          title="Contact name"
          value={newContact.name}
          required
        />
      </Label>

      <Label>
        <Span>Number</Span>
        <PatternFormat
          customInput={Input}
          value={newContact.number}
          format="+38 (###)-###-##-##"
          allowEmptyFormatting
          mask="_"
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">{text}</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  text: PropTypes.string.isRequired,
};
