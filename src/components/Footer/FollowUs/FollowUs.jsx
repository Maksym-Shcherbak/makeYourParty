import icons from '../../../images/icons.svg';
import {
    FollowUsWrap,
    StyledFollowUsItem,
    StyledFollowUsLink,
    SvgSocial,
}   from './FollowUs.styled.js';

const FollowUs = () => {
    return (
        <FollowUsWrap>
          <StyledFollowUsItem>
            <StyledFollowUsLink
              aria-label="facebook"
              href="https://www.facebook.com/goITclub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgSocial>
                <use href={icons + '#facebook'} />
              </SvgSocial>
            </StyledFollowUsLink>
          </StyledFollowUsItem>
    
          <StyledFollowUsItem>
            <StyledFollowUsLink
              aria-label="instagram"
              href="https://www.instagram.com/goitclub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgSocial>
                <use href={icons + '#instagram'} />
              </SvgSocial>
            </StyledFollowUsLink>
          </StyledFollowUsItem>
    
          <StyledFollowUsItem>
            <StyledFollowUsLink
              aria-label="youtube"
              href="https://www.youtube.com/c/GoIT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgSocial>
                <use href={icons + '#youtube'} />
              </SvgSocial>
            </StyledFollowUsLink>
          </StyledFollowUsItem>
        </FollowUsWrap>
      );
    };
    
    export default FollowUs;
    