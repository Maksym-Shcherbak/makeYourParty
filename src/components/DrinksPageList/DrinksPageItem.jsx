import {
  UtilsStyleImgCard,
  UtilsStyleLink,
  UtilsStyleTitleCard,
  UtilsTitleLinkWrap,
  UtilsStiledLinkMain,
} from '../UtilsMainDrinks/UtilsMainDrinks';
import { DrinksPgItem } from './DrinksPageStyle';
// import imgDef from "../../images/default@2x.webp";

const DrinksPageItem = ({ title, url, text, id }) => {
  return (
    <DrinksPgItem>
      <UtilsStiledLinkMain to={`/drinks/${id}`}>
        <UtilsStyleImgCard src={url} alt="Photo drinks" />
        <UtilsTitleLinkWrap>
          <UtilsStyleTitleCard>{title}</UtilsStyleTitleCard>
          <UtilsStyleLink>{text}</UtilsStyleLink>
        </UtilsTitleLinkWrap>
      </UtilsStiledLinkMain>
    </DrinksPgItem>
  );
};
export default DrinksPageItem;
