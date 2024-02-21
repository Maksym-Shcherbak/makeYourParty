import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signUp } from '../../redux/auth/authOperations.js';
// import { selectAuthIsLoading } from '../../redux/auth/authSelectors.js';
// import { Styledselector } from './AuthForm.style.js';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
// import Loader from 'components/LoaderPhone/LoaderPhone';
import DatePicker from '../../components/DatePicker/DatePicker.jsx';
import FormErr from '../../components/FormErr/FormErr.jsx';
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
} from './AuthForm.styled.jsx';

const initialValues = { name: '', dateOfBirth: '', email: '', password: '' };

const schema = Yup.object().shape({
  name: Yup.string().min(2).required(true),
  dateOfBirth: Yup.date().required(true),
  email: Yup.string()
    // .matches(
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //   'Email must contain only digits, letters and . - _ symbols. e.g. test@mail.com'
    // )
    .email('Invalid email format, test@mail.com')
    .required(true),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required(true)
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
});

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const { name, dateOfBirth, email, password } = values;
    // const birthDate = format(new Date(dateOfBirth), 'yyyy-MM-dd');
    dispatch(signUp({ name, dateOfBirth, email, password }))
      .unwrap()
      .then(() => toast.success('Registration successfully'))
      .catch(() => toast.error('Something went wrong. Try later'));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, errors, touched, handleSubmit }) => (
        <SignForm onSubmit={handleSubmit}>
          <>
            <InputFild>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                error={errors.name && touched.name ? 'true' : 'false'}
                success={values.name && !errors.name ? 'true' : 'false'}
              />

              <FormErr name="name" />
              {errors.name && touched.name ? (
                <ErrorIcon />
              ) : values.name && !errors.name ? (
                <SuccessIcon />
              ) : null}
            </InputFild>

            <div>
              <DatePicker
                name="dateOfBirth"
                type="text"
                value={values.dateOfBirth}
                setFieldValue={setFieldValue}
                placeholder="dd/mm/yyyy"
                error={
                  errors.dateOfBirth && touched.dateOfBirth ? 'true' : 'false'
                }
                success={
                  values.dateOfBirth && !errors.dateOfBirth ? 'true' : 'false'
                }
              />
              <FormErr name="dateOfBirth" />
            </div>

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

          <SignUpBtn type="submit">Sign Up</SignUpBtn>
        </SignForm>
      )}
    </Formik>
  );
};
export default AuthForm;