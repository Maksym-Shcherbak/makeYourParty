import { UtilsStyleImgCard, UtilsStyleLink, UtilsStyleTitleCard, UtilsTitleLinkWrap } from "../UtilsMainDrinks/UtilsMainDrinks";
import { DrinksPgItem } from "./DrinksPageStyle"



const DrinksPageItem = ({ title, url, text }) => {
  return (<DrinksPgItem>
    <UtilsStyleImgCard src={url} alt="Photo drinks" />
    <UtilsTitleLinkWrap>
      <UtilsStyleTitleCard>{title}</UtilsStyleTitleCard>
      <UtilsStyleLink>{text }</UtilsStyleLink>
    </UtilsTitleLinkWrap>
  </DrinksPgItem>)
  
}
export default DrinksPageItem;
