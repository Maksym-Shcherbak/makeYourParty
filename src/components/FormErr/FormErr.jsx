import { ErrorMessage } from 'formik';
import { TextOfError } from './FormErr.styled';

const FormErr = ({ name, absolute = false, select = false }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => (
        <TextOfError absolute={absolute.toString()} select={select.toString()}>
          {message}
        </TextOfError>
      )}
    />
  );
};

export default FormErr;
