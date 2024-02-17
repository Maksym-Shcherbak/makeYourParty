import { DrinkItemWrapper,DrinkItemImg,DrinkItemTitle,DrinkItemDescription,DrinkBtnSee,DrinkBtnDel ,DrinkStatus,DrinkWrapperBtn} from "./DrinkItemStyle";
import deleteBtn from "../../images/deleteBtn.svg";






const DrinkItem = ({ url, id,title, alcoholic, description, text, hendelDeletedDrink, handelSeeMoreBtn }) => {

  return (
  <DrinkItemWrapper>
    <DrinkItemImg src={url} alt="Photo Coctail"/>
      <DrinkItemTitle>{title}</DrinkItemTitle>
      <DrinkStatus>{alcoholic}</DrinkStatus>
      <DrinkItemDescription>{description}</DrinkItemDescription>
      <DrinkWrapperBtn>
        <DrinkBtnSee type="button" onClick={() => handelSeeMoreBtn()}>{text}</DrinkBtnSee>
        <DrinkBtnDel type="button" onClick={() => hendelDeletedDrink(id)}>
          <img src={deleteBtn} alt="React Logo" />
        </DrinkBtnDel>
      </DrinkWrapperBtn>
      
  </DrinkItemWrapper>)
}

export default DrinkItem;