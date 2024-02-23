import styled from 'styled-components';
import { device } from '../device.js';

export const FollowUsWrap = styled.ul`
display: flex;
gap: 14px;
@media ${device.tablet}{
    gap: 16px;
}
`;

export const StyledFollowUsItem = styled.li`
display: flex;
justify-content: center;
width: 38px;
height: 38px;
padding: 8px;
text-align: center;
border-radius: 10px;
border: 1px solid rgba(243,243,243,0.2);
transition: border 0.3s ease, opacity 0.3s;

&:hover{
    border: 1px solid rgba(243,243,243,0.5);
    cursor: pointer;
    svg{
        opacity: 1;
    }
}
&:focus{
    border: 1px solid rgba(243,243,243,0.5);
    svg{
        opacity: 1;
    }
}

@media ${device.tablet}{
    width: 44px;
    height: 44px;
}
`;   

export const StyledFollowUsLink = styled.a``;

export const SvgSocial = styled.svg`
width: 22px;
height: 22px;
fill: var(--main-color);
opacity: 5;
transition: opacity;
@media ${device.tablet}{
    width: 28px;
    height: 28px;
}
`;