import { Container } from '../../../styled/Container';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiFillInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { IConList, IconBtn, TitleFollowUs } from './FollowUs.styled';

const FollowUs = () => {
  return (
    <>
      <Container>
        <TitleFollowUs>Follow Us</TitleFollowUs>
        <IConList>
          <IconBtn href="https://www.facebook.com/goITclub/">
            <BiLogoFacebook
              style={{ color: '#F3F3F3', opacity: 0.8, fontSize: 28 }}
            />
          </IconBtn>
          <IconBtn href="https://www.instagram.com/goitclub/">
            <AiFillInstagram
              style={{ color: '#F3F3F3', opacity: 0.8, fontSize: 28 }}
            />
          </IconBtn>

          <IconBtn href="https://www.youtube.com/c/GoIT">
            <AiOutlineYoutube
              style={{
                color: '#F3F3F3',
                opacity: 0.8,
                fontSize: 28,
              }}
            />
          </IconBtn>
        </IConList>
      </Container>
    </>
  );
};

export default FollowUs;
