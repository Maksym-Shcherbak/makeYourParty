 import React from 'react';
import MuiModal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
//  import { IoClose } from 'react-icons/io5';
import {  Backdrop, StyledBox, CloseBtn } from './Modal.styled'; 


import { IoCloseSharp } from 'react-icons/io5';

export const Modal = ({ children, isOpen, handleClose, gradient }) => {
  return (
    <MuiModal
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <StyledBox gradient={gradient.toString()}>
          <CloseBtn onClick={handleClose}>
            <IoCloseSharp size={32} /> 
          </CloseBtn>
          {children}
        </StyledBox>
      </Fade>
    </MuiModal>
  );
}

export default Modal; 

