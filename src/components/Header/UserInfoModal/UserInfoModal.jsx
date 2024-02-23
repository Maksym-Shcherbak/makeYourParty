// import { Formik } from 'formik';
// import { HiPlusSm } from 'react-icons/hi';
// import { FiEdit2 } from 'react-icons/fi';
// import { updateUser } from '../../../redux/auth/authOperations';

// import Modal from '../Modal/Modal';
// import {
//   ChangeNameInput,
//   Form,
//   AddIconWrapper,
//   Image,
//   FileInputWrapper,
//   SelectAvatarInput,
//   SubmitBtn,
//   NameInputWrapper,
//   EditIconWrapper,
// } from './UserInfoModal.styled';

// import { useAuth } from '../../../redux/hooks/useAuth';
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';

// import { useResize } from '../../../redux/hooks/useResize';
// import { toast } from 'react-toastify';

// export const UserInfoModal = ({ isOpen, handleClose }) => {
//   const {
//     user: { avatarURL, name },
//   } = useAuth();
//   const {width} = useResize();

//   const [username, setUsername] = useState(name);
//   const [file, setFile] = useState(null);
//   const [avatar, setAvatar] = useState(null);
  
//   const dispatch = useDispatch();

//   const handleInputChange = (event) => {
//     setUsername(event.target.value);
//   };


//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     const maxSizeFile = 3145728;
//     if (file.size > maxSizeFile) {
//       toast.error('The file size must be less than 3 MB.');
//       setFile('');
//       return;
//     }
//     setFile(file);
//     setAvatar(URL.createObjectURL(file));
//   };

//   const handleSubmit = () => {
//     const formData = new FormData();
//     formData.append('avatar', file);
//     formData.append('name', username);

//     dispatch(updateUser(formData));
//     handleClose();
//   };


//   useEffect(() => {
//     if (avatar) {
//       setAvatar(avatarURL);
//     }
//   }, [avatar]);

//     return (
// <Modal isOpen={isOpen} handleClose={handleClose} gradient={true}>
//       <Formik initialValues={{ name: username }} onSubmit={handleSubmit} >
//         <Form>
//           <FileInputWrapper>
//             <Image src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
//             <SelectAvatarInput
//               type="file"
//               name="file"
//               value={username}
//                onChange={handleFileChange}
//             />
//             <AddIconWrapper>
//               <HiPlusSm size={24} />
//             </AddIconWrapper>
//           </FileInputWrapper>
//           <NameInputWrapper>
//             <ChangeNameInput
//               type="text"
//               name="name"
//               value={username}
//                onChange={handleInputChange}
//             />
//             <EditIconWrapper>
//               <FiEdit2 size={24} />
//             </EditIconWrapper>
//           </NameInputWrapper>
//           <SubmitBtn type="submit">Save changes</SubmitBtn>
//         </Form>
//       </Formik>
//     </Modal>
//     )
// }


import { Formik } from 'formik';
import { HiPlusSm } from 'react-icons/hi';
import { FiEdit2 } from 'react-icons/fi';
import { updateUser } from '../../../redux/auth/authOperations';

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

import { useAuth } from '../../../redux/hooks/useAuth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useResize } from '../../../redux/hooks/useResize';
import { toast } from 'react-toastify';

export const UserInfoModal = ({ isOpen, handleClose }) => {
  const {
    user: { avatarURL, name },
  } = useAuth();
  const { width } = useResize();

  const [username, setUsername] = useState(name);
  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const maxSizeFile = 3145728;
    if (file.size > maxSizeFile) {
      toast.error('The file size must be less than 3 MB.');
      setFile(null); // Set file to null instead of empty string
      return;
    }
    setFile(file);
    setAvatar(URL.createObjectURL(file));
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.append('avatar', file);
    formData.append('name', values.name); 

    dispatch(updateUser(formData));
    handleClose();
    setSubmitting(false);
  };

  useEffect(() => {
    if (avatar === null) {
      setAvatar(avatarURL);
    }
  }, [avatar, avatarURL]);

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} gradient={true}>
      <Formik initialValues={{ name: username }} onSubmit={handleSubmit}>
        {(formikProps) => (
          <Form onSubmit={formikProps.handleSubmit}>
            <FileInputWrapper>
              <Image src={avatar || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
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
                value={formikProps.values.name}
                onChange={formikProps.handleChange}
              />
              <EditIconWrapper>
                <FiEdit2 size={24} />
              </EditIconWrapper>
            </NameInputWrapper>
            <SubmitBtn type="submit">Save changes</SubmitBtn>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
