import { MdClose } from 'react-icons/md';
import { IconContext } from 'react-icons';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

import {
  Backdrop,
  Button,
  Message,
  OverlayText,
  OverlayWrapper,
} from './MotivatingModal.styled';

const MotivatingModal = ({ text, modalClose }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleCloseESC);
    return () => document.removeEventListener('keydown', handleCloseESC);
  });

  const handleCloseClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    modalClose();
  };

  const handleCloseESC = (event) => {
    if (event.code !== 'Escape') {
      return;
    }
    modalClose();
  };

  return createPortal(
    <Backdrop onClick={handleCloseClick}>
      <OverlayWrapper>
        <OverlayText>
          <Message>{text}</Message>
          <Button onClick={() => modalClose()}>
            <IconContext.Provider value={{ color: '#fff', size: 28 }}>
              <MdClose />
            </IconContext.Provider>
          </Button>
        </OverlayText>
      </OverlayWrapper>
    </Backdrop>,
    modalRoot
  );
};

export default MotivatingModal;
