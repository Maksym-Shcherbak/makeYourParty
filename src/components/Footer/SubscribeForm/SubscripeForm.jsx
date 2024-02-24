import{
    FormWrap,
    SubscribeDesc,
    SubscribeInput,
    InputMessage,
    StyledStatus,
} from './SubscripeForm.styled.js';
import {useForm} from 'react-hook-form';
import FooterBtn from '../FooterBtn/FooterBtn.jsx';
import icons from '../../../images/icons.svg';
import { useDispatch } from 'react-redux';
import {subscribeUser} from '../../../redux/auth/authOperations.js';

const SubscribeForm = () => {
    const dispatch = useDispatch();
    const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
    } = useForm({
      mode: 'onBlur',
    });
  
    const onSubmit = data => {
      dispatch(subscribeUser(data));
      reset();
    };
    return (
        <FormWrap>
          <SubscribeDesc>
            Subscribe up to our newsletter. Be in touch with latest news and special
            offers, etc.
          </SubscribeDesc>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <SubscribeInput
                {...register('email', {
                  required: "Email can't be empty",
                  minLength: {
                    value: 5,
                    message: 'Email must contain at least 5 characters',
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                    message: 'Invalid characters or missing  @ or . ',
                  },
                })}
                type="email"
                name="email"
                title="Enter an email"
                placeholder="Enter the email"
                autoComplete="email"
              />
              <InputMessage>
                {errors?.email && (
                  <>
                    <StyledStatus className="error">
                      <use href={`${icons}#incorrect_input`} />
                    </StyledStatus>
                    <p>{errors?.email?.message || 'This is an ERROR email'}</p>
                  </>
                )}
                {!errors?.email && isValid && (
                  <>
                    <StyledStatus className="correct">
                      <use href={`${icons}#correct_input`} />
                    </StyledStatus>
                    <p className="correct">This is an CORRECT email</p>
                  </>
                )}
              </InputMessage>
            </label>
    
            <FooterBtn type="submit" variant="subscribe" disabled={!isValid}>
              Subscribe
            </FooterBtn>
          </form>
        </FormWrap>
      );
    };
    
    export default SubscribeForm;