import { FiEdit2 } from 'react-icons/fi';
import { Backdrop, EditProfile, LogoutBtn, Wrapper } from './UserLogoPopup.styled';
import { useState } from 'react';
import { UserInfoModal } from '../UserInfoModal/UserInfoModal';
import  { LogoutModal } from '../LogoutModal/LogoutModal';

export const UserLogoPopup = ({ isPopupOpen, handleClosePopup }) => {
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const toggleModal = (modalName) => {
    if (modalName === 'userInfo') {
      setIsUserInfoModalOpen((state) => !state);
    } else if (modalName === 'logout') {
      setIsLogoutModalOpen((state) => !state);
    }
    handleClosePopup();
  };

  return (
    <>
      <Wrapper ispopupopen={isPopupOpen.toString()}>
        <EditProfile onClick={() => toggleModal('userInfo')}>
          Edit profile <FiEdit2 size={14} />
        </EditProfile>
        <LogoutBtn onClick={() => toggleModal('logout')}>Log out</LogoutBtn>
      </Wrapper>

      <UserInfoModal
        isOpen={isUserInfoModalOpen}
        handleClose={() => toggleModal('userInfo')}
      />
      <LogoutModal
        isOpen={isLogoutModalOpen}
        handleClose={() => toggleModal('logout')}
      />
      <Backdrop
        ispopupopen={isPopupOpen.toString()}
        onClick={handleClosePopup}
      />
    </>
  );
};
