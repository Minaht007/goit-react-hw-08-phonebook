import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/selectors';

export const getFilter = state => state.filter;

export const filterListContacts = createSelector(
  [selectContacts, getFilter],
  (contacts, filter) => {
    const filterContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContacts;
  }
);
