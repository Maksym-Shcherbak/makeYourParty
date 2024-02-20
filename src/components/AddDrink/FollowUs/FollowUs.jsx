import { BiLogoFacebook } from 'react-icons/bi';
import { AiFillInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { IConList, IconBtn, TitleFollowUs } from './FollowUs.styled';

const FollowUs = () => {
  return (
    <>
      <TitleFollowUs>Follow Us</TitleFollowUs>
      <IConList>
        <IconBtn href="https://www.facebook.com/goITclub/">
          <BiLogoFacebook />
        </IconBtn>
        <IconBtn href="https://www.instagram.com/goitclub/">
          <AiFillInstagram />
        </IconBtn>
        <IconBtn href="https://www.youtube.com/c/GoIT">
          <AiOutlineYoutube />
        </IconBtn>
      </IConList>
    </>
  );
};

export default FollowUs;
