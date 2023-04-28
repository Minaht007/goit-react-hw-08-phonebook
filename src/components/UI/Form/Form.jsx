import { useState } from 'react';
import PropTypes from 'prop-types';

import { FormContainer, Label, Input, Span, Button } from './Form.styled';
import { InputElement } from '../Input/Input';

export const Form = ({ onSubmit, onType }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hendleChangeName = e => {
    setName(e.currentTarget.value);
  };
  const hendleChangeEmail = e => {
    setEmail(e.currentTarget.value);
  };
  const hendleChangePassword = e => {
    setPassword(e.currentTarget.value);
  };

  const hendleSubmit = e => {
    e.preventDefault();
    const contact = { name, email, password };

    onSubmit(contact);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer onSubmit={hendleSubmit}>
      {onType.name && (
        <Label>
          <Span>Name</Span>
          <InputElement
            value={name}
            onChange={hendleChangeName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
      )}

      {onType.email && (
        <Label>
          <Span>Email</Span>
          <Input
            value={email}
            onChange={hendleChangeEmail}
            type="email"
            name="email"
            required
          />
        </Label>
      )}
      {onType.password && (
        <Label>
          <Span>Password</Span>
          <Input
            value={password}
            onChange={hendleChangePassword}
            type="password"
            name="password"
            minLength='7'
            title="The password must be more than 7 characters."
            required
          />
        </Label>
      )}
      <Button type="submit">Register</Button>
    </FormContainer>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onType: PropTypes.object.isRequired,
};
