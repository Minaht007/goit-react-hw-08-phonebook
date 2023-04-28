import React, { useState } from 'react';
import { PatternFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Form, Label, Input, Span, Button } from './ContactFormEdit.styled';
import { InputElement } from '../UI/Input/Input';
import { patchContacts } from 'redux/contacts/operations';

export const ContactFormEdit = ({ modalClose, contact }) => {
  const dispatch = useDispatch();

  const [changedContact, setChangedContact] = useState(contact);

  const handleChange = evt => {
    console.log(changedContact);
    setChangedContact(prev => {
      return { ...prev, [evt.target.name]: evt.target.value };
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(patchContacts(changedContact));
    modalClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Name</Span>

        <InputElement
          value={changedContact.name}
          onChange={handleChange}
          type="text"
          name="name"
          required
          title="Enter contact name"
        />
      </Label>

      <Label>
        <Span>Number</Span>
        <PatternFormat
          customInput={Input}
          format="+38 (###)-###-##-##"
          allowEmptyFormatting
          mask="_"
          value={changedContact.number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Save</Button>
    </Form>
  );
};

ContactFormEdit.propTypes = {
  modalClose: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};
