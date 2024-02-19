import { Formik } from 'formik';
import { HiPlusSm } from 'react-icons/hi';
import { FiEdit2 } from 'react-icons/fi';


import Modal from '../Modal/Modal';
import {
  ChangeNameInput,
  Form,
  AddIconWrapper,
  Image,
  FileInputWrapper,
  SelectAvatarInput,
  SubmitBtn,
  NameInputWrapper,
  EditIconWrapper,
} from './UserInfoModal.styled';

export const UserInfoModal = ({ isOpen, handleClose }) => {
  const username = "JohnDoe";
  
    return (
<Modal isOpen={isOpen} handleClose={handleClose} gradient={true}>
      <Formik initialValues={{ name: username }} >
        <Form>
          <FileInputWrapper>
            <Image src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
            <SelectAvatarInput
              type="file"
              name="file"
              // onChange={handleFileChange}
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
              // onChange={handleInputChange}
            />
            <EditIconWrapper>
              <FiEdit2 size={24} />
            </EditIconWrapper>
          </NameInputWrapper>
          <SubmitBtn type="submit">Save changes</SubmitBtn>
        </Form>
      </Formik>
    </Modal>
    )
}
