import React from 'react';
import { Button, Image } from './UserLogo.styled';
import { useAuth } from '../../../../redux/hooks/useAuth';

export const UserLogo = ({
  handleOpenPopup,
  handleClosePopup,
  isPopupOpen,
}) => {
  const {
    user: { avatarURL, name },
  } = useAuth();

  return (
    <Button
      type="button"
      onClick={() => (isPopupOpen ? handleClosePopup() : handleOpenPopup())}
    >
      <Image
        src={
          avatarURL || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
        }
        alt={'avatar'}
      />
      <span>{name || 'User'}</span>
    </Button>
  );
};
