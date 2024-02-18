// import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { registerThunk } from '../../redux/auth/authOperations.js';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors.js';
import { Styledselector } from './AuthForm.style.js';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
// import Loader from 'components/LoaderPhone/LoaderPhone';

const initialValues = { name: '', dateOfBirth: '', email: '', password: '' };

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const { name, dateOfBirth, email, password } = values;
    const birthDate = format(new Date(dateOfBirth), "yyyy-MM-dd'T'HH:mm:ssXXX");
    dispatch(registerThunk({ name, birthDate, email, password }))
      .unwrap()
      .then(() => toast.success('Registration successfully'))
      .catch(() => toast.error('Something went wrong. Try again'));
    resetForm();
  };
  return (
    <Styledselector>
      <div></div>
    </Styledselector>
  );
};
export default AuthForm;
