import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ContactFormEdit } from 'components/ContactFormEdit/ContactFormEdit';

import { Overlay, ModalContainer, Button } from './Modal.styled';

export const Modal = ({ onClose, contact }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handlerKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handlerKeydown);
    return () => {
      window.removeEventListener('keydown', handlerKeydown);
    };
  });

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>
        <Button title="Close modal" onClick={onClose}></Button>
        <ContactFormEdit
          text={'Update contact'}
          modalClose={onClose}
          contact={contact}
        />
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};
