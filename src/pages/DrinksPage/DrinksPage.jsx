import styled from 'styled-components';
import { BiLogoFacebook } from 'react-icons/bi';
// import { IconContext } from 'react-icons';
import { AiFillInstagram } from 'react-icons/ai';

const DrinksPage = () => {
  return (
    <div>
      <h1>All drinks</h1>
      <FaceBookBtn>
        {/* <IconContext.Provider
          value={{
            color: '#F3F3F3',
            opacity: '0.8',
            className: 'global-class-name',
            size: 28,
          }}
        > */}
        <BiLogoFacebook
          style={{ color: '#F3F3F3', opacity: 0.8, fontSize: 28 }}
        />
        {/* </IconContext.Provider> */}
      </FaceBookBtn>
      <InstBtn>
        <AiFillInstagram
          style={{ color: '#F3F3F3', opacity: 0.8, fontSize: 28 }}
        />
      </InstBtn>
    </div>
  );
};

export default DrinksPage;

const FaceBookBtn = styled.button`
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 10px;
  padding: 8px;
  width: 44px;
  height: 44px;
  background: #0a0a11;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InstBtn = styled.button`
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 10px;
  padding: 8px;
  width: 44px;
  height: 44px;
  background: #0a0a11;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
