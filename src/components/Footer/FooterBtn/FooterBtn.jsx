import PropTypes from 'prop-types';

import {ButtonStyle} from './FooterBtn.styled.js';

const FooterBtn = ({ children, variant = 'none', ...restProps }) => {
    return (
      <ButtonStyle {...restProps} className={variant}>
        {children}
      </ButtonStyle>
    );
  };
  
  export default FooterBtn;

  FooterBtn.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf([
        'subscribe'
    ]),
};