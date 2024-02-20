
import { MainDrinkImg, MainDrinkTitle, MainDrinkLinkText, MainDrTitlelinkWrap, MainDrinksItem } from "./MainDrinkItemStyle";


const MainDrinkItem = ({ title, url, text }) => {
  return (
    <MainDrinksItem>
        <MainDrinkImg src={url} alt="Photo drinks" />
      <MainDrTitlelinkWrap>
        <MainDrinkTitle>{title}</MainDrinkTitle>    
              <MainDrinkLinkText>{text}</MainDrinkLinkText>   
      </MainDrTitlelinkWrap>
      
  </MainDrinksItem>)
}

export default MainDrinkItem;