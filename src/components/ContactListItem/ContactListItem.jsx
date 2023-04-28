import React from 'react';
import { BsTrash, BsPersonCircle, BsPen } from 'react-icons/bs';
import { Button, Item, Span } from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/auth/selectors';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { toast } from 'react-toastify';

export function ContactListItem({ contact }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    toast.info(' Contact deleted. ✅ ');
  };

  const openModal = () => {
    setIsOpenModal(true);
  };
  const toggleModal = () => {
    setIsOpenModal(isOpenModal => !isOpenModal);
  };

  return (
    <Item>
      <Span>
        <BsPersonCircle />
      </Span>
      <Span>{contact.name} </Span>
      <Span>{contact.number}</Span>
      <Button
        type="button"
        disabled={isLoading}
        onClick={() => openModal(contact.id)}
        title="Change contact"
      >
        <BsPen />
      </Button>
      <Button
        type="button"
        disabled={isLoading}
        onClick={() => handleDeleteContact(contact.id)}
        title="Delete contact"
      >
        <BsTrash />
      </Button>
      {isOpenModal && <Modal onClose={toggleModal} contact={contact} />}
    </Item>
  );
}
