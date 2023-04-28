import { useDispatch, useSelector } from 'react-redux';

import { Loading } from 'components/UI/Loading/Loading';
import { List, Error, Container } from './ContactList.styled';
import {
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from 'redux/contacts/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      <List>
        {isLoading && <Loading visible={isLoading} />}
        {error && <Error>{error}</Error>}
        {contacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </List>
    </Container>
  );
};
