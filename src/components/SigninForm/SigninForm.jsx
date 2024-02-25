import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Notify } from 'notiflix';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import FormErr from '../FormErr/FormErr';
import * as Yup from 'yup';
import {
  SignForm,
  Input,
  SignUpBtn,
  EyePasswordBtn,
  InputFild,
  ShowPasswordIconEye,
  HidePasswordIconEye,
  ErrorIcon,
  SuccessIcon,
} from '../AuthForm/AuthForm.styled';
import { signIn } from '../../redux/auth/authOperations';

const initialValues = { email: '', password: '' };
const schema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Email must contain only digits, letters and . - _ symbols. e.g. test@mail.com'
    )
    .email('Invalid email format, test@mail.com')
    .required(true),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required(true)
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
});

const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await dispatch(signIn(values));

      if (response.payload.token) {
        resetForm();
        navigate('/', { replace: true });
      } else {
        Notify.failure('Password or email is invalide');
      }
    } catch (error) {
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched }) => (
        <SignForm>
          <>
            <InputFild>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                error={errors.email && touched.email ? 'true' : 'false'}
                success={values.email && !errors.email ? 'true' : 'false'}
              />
              <FormErr name="email" />
              {errors.email && touched.email ? (
                <ErrorIcon />
              ) : values.email && !errors.email ? (
                <SuccessIcon />
              ) : null}
            </InputFild>

            <InputFild>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                placeholder="Password"
                error={errors.password && touched.password ? 'true' : 'false'}
                success={values.password && !errors.password ? 'true' : 'false'}
              />
              <FormErr name="password" />
              <EyePasswordBtn type="button" onClick={handleTogglePassword}>
                {showPassword ? (
                  <HidePasswordIconEye />
                ) : (
                  <ShowPasswordIconEye />
                )}
              </EyePasswordBtn>
            </InputFild>
          </>

          <SignUpBtn type="submit">Sign In</SignUpBtn>
        </SignForm>
      )}
    </Formik>
  );
};
export default SigninForm;
