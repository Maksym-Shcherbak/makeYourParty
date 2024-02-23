import {
  DrinkItemWrapper,
  DrinkItemImg,
  DrinkItemTitle,
  DrinkItemDescription,
  StyledLink,
  DeleteBtn,
  DrinkStatus,
  DrinkWrapperBtn,
} from './DrinkItemStyle';

import { DeleteIcon } from '../../components/DeleteIcon/DeleteIcon';
import { useState } from 'react';

const DrinkItem = ({
  id,
  url,
  title,
  alcoholic,
  description,
  text,
  handleDelete,
}) => {
  const [imgError, setImgError] = useState(false);
  const defaultImgMobile = '/images/default@1x.webp';
  const defaultImgDesktop = '/images/default@2x.webp';

  const handleImageError = () => {
    setImgError(true);
  };
  return (
    <DrinkItemWrapper>
      {imgError ? (
        <DrinkItemImg
          srcSet={`${defaultImgMobile} 1x, ${defaultImgDesktop} 2x`}
          alt={'Default Cocktail'}
        />
      ) : (
        <DrinkItemImg
          src={url}
          alt={'Photo Cocktail'}
          onError={handleImageError}
        />
      )}

      <DrinkItemTitle>{title}</DrinkItemTitle>
      <DrinkStatus>{alcoholic}</DrinkStatus>
      <DrinkItemDescription>{description}</DrinkItemDescription>
      <DrinkWrapperBtn>
        <StyledLink to={`/drinks/${id}`}>{text}</StyledLink>
        <DeleteBtn onClick={handleDelete}>
          <DeleteIcon />
        </DeleteBtn>
      </DrinkWrapperBtn>
    </DrinkItemWrapper>
  );
};

export default DrinkItem;
