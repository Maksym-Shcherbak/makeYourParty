import { MainDrinksItem } from './MainDrinkItemStyle';
import {
  UtilsStyleImgCard,
  UtilsStyleLink,
  UtilsTitleLinkWrap,
  UtilsStyleTitleCard,
  UtilsStiledLinkMain,
} from '../UtilsMainDrinks/UtilsMainDrinks';
// import imgDef from "../../images/default@2x.webp";

const MainDrinkItem = ({ title, url, text, id }) => {
  return (
    <MainDrinksItem>
      <UtilsStiledLinkMain to={`/drinks/${id}`}>
        <UtilsStyleImgCard src={url} alt="Photo drinks" />
        <UtilsTitleLinkWrap>
          <UtilsStyleTitleCard>{title}</UtilsStyleTitleCard>
          <UtilsStyleLink>{text}</UtilsStyleLink>
        </UtilsTitleLinkWrap>
      </UtilsStiledLinkMain>
    </MainDrinksItem>
  );
};

export default MainDrinkItem;
