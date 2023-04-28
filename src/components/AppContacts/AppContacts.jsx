import React from 'react';

import { Wrapper, Container } from './AppContacts.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Caption } from '../UI/Title/Title';

export const AppContacts = () => {
  return (
    <Wrapper>
      <Caption title="Phonebook" />
      <ContactForm text={'Add contact'} />
      <Container>
        <Caption title="Contacts" />
        <Filter />
      </Container>
      <ContactList />
    </Wrapper>
  );
};
