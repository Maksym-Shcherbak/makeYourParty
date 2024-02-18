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

const DrinkItem = ({ id, url, title, alcoholic, description, text }) => {
  return (
    <DrinkItemWrapper id={id}>
      <DrinkItemImg src={url} alt="Photo Coctail" />
      <DrinkItemTitle>{title}</DrinkItemTitle>
      <DrinkStatus>{alcoholic}</DrinkStatus>
      <DrinkItemDescription>{description}</DrinkItemDescription>
      <DrinkWrapperBtn>
        <StyledLink to={`/drinks/${id}`}>{text}</StyledLink>
        <DeleteBtn>
          <DeleteIcon />
        </DeleteBtn>
      </DrinkWrapperBtn>
    </DrinkItemWrapper>
  );
};

export default DrinkItem;
