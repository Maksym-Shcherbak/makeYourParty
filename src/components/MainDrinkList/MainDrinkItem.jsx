
import { MainDrinksItem,StiledLinkMain } from "./MainDrinkItemStyle";
import { UtilsStyleImgCard,UtilsStyleLink,UtilsTitleLinkWrap,UtilsStyleTitleCard } from "../UtilsMainDrinks/UtilsMainDrinks";


const MainDrinkItem = ({ title, url, text,id }) => {
  return (
    <MainDrinksItem>
      <StiledLinkMain to={`/drinks/${id}`}>
         <UtilsStyleImgCard src={url} alt="Photo drinks" />
      <UtilsTitleLinkWrap>
        <UtilsStyleTitleCard>{title}</UtilsStyleTitleCard>    
              <UtilsStyleLink>{text}</UtilsStyleLink>   
      </UtilsTitleLinkWrap>
      </StiledLinkMain>
       
      
  </MainDrinksItem>)
}

export default MainDrinkItem;