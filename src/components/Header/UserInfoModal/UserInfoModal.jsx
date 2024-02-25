
import React, { useEffect, useState } from 'react';
import { Formik} from 'formik'; // Добавляем импорт компонента Formik
import { HiPlusSm } from 'react-icons/hi';
import { FiEdit2 } from 'react-icons/fi';
import { updateUser } from '../../../redux/auth/authOperations';
import Modal from '../Modal/Modal';
import {
  Form,
  ChangeNameInput,
  AddIconWrapper,
  Image,
  FileInputWrapper,
  SelectAvatarInput,
  SubmitBtn,
  NameInputWrapper,
  EditIconWrapper,
  
} from './UserInfoModal.styled';
import { useAuth } from '../../../redux/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useResize } from '../../../redux/hooks/useResize';
import { toast } from 'react-toastify';

export const UserInfoModal = ({ isOpen, handleClose }) => {
  const {
    user: { avatarURL, name },
  } = useAuth();
  const { width } = useResize();
  const userAvatar = avatarURL
    ? avatarURL
    : 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
  const [username, setUsername] = useState(name);
  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const maxSizeFile = 3145728;
    if (file.size > maxSizeFile) {
      toast.error('The file size must be less than 3 MB.');
      setFile(null);
      return;
    }
    setFile(file);
    setAvatar(URL.createObjectURL(file));
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.append('avatar', file);
    formData.append('name', username);
    console.log(formData);
    dispatch(updateUser(formData));
    handleClose();
    setSubmitting(false);
  };

  useEffect(() => {
    if (avatar) {
      setAvatar(userAvatar);
    }
  }, [avatar, avatarURL]);

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} gradient={true}>
      <Formik initialValues={{ name: username }} onSubmit={handleSubmit}>
        <Form>
          <FileInputWrapper>
            <Image src={userAvatar} />
            <SelectAvatarInput
              type="file"
              name="file"
              onChange={handleFileChange}
            />
            <AddIconWrapper>
              <HiPlusSm size={24} />
            </AddIconWrapper>
          </FileInputWrapper>
          <NameInputWrapper>
            <ChangeNameInput
              type="text"
              name="name"
              value={username}
              onChange={handleInputChange}
            />
            <EditIconWrapper>
              <FiEdit2 size={24} />
            </EditIconWrapper>
          </NameInputWrapper>
          <SubmitBtn type="submit">Save changes</SubmitBtn>
        </Form>
      </Formik>
    </Modal>
  );
};
