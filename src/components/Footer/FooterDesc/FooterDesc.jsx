import FollowUs from '../FollowUs/FollowUs.jsx'
import SubscribeForm from '../SubscribeForm/SubscripeForm.jsx';
import {
  Copy,
  FooterContainer,
  FooterNavFlex,
  FooterWrap,
  LogoFlex,
  StyledNavLink,
  StyledLink,
  StyledLogoLink,
  Icon,
} from './FooterDesc.styled.js';
import icons from '../../../images/icons.svg';


const FooterDesc = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <FooterWrap>
      <FooterContainer>
        <div>
          <LogoFlex>
            <StyledLogoLink to="/" aria-label="Logo Drink Master">
              <Icon>
                <use href={icons + '#logo'} />
              </Icon>
              <span>Drink Master</span>
            </StyledLogoLink>

            <FollowUs />
          </LogoFlex>

          <nav>
            <StyledNavLink
              aria-label="To Drinks page"
              to="/drinks"
              onClick={handleLinkClick}
            >
              <span>Drinks</span>
            </StyledNavLink>
            <StyledNavLink
              aria-label="To Add drink page"
              to="/add"
              onClick={handleLinkClick}
            >
              <span>Add drink</span>
            </StyledNavLink>
            <StyledNavLink
              aria-label="To My drinks page"
              to="/my"
              onClick={handleLinkClick}
            >
              <span>My drinks</span>
            </StyledNavLink>
            <StyledNavLink
              aria-label="To Favorites drinks page"
              to="/favorites"
              onClick={handleLinkClick}
            >
              <span>Favorites</span>
            </StyledNavLink>
          </nav>
          <SubscribeForm />
        </div>
        <FooterNavFlex>
          <Copy>©2023 Drink Master. All rights reserved.</Copy>
          <div>
            <StyledLink
              aria-label="To Privacy Policy page"
              to="/"
              onClick={handleLinkClick}
            >
              Privacy Policy
            </StyledLink>
            <StyledLink
              aria-label="To Terms of Service page"
              to="/"
              onClick={handleLinkClick}
            >
              Terms of Service
            </StyledLink>
          </div>
        </FooterNavFlex>
      </FooterContainer>
    </FooterWrap>
  );
};

export default FooterDesc;