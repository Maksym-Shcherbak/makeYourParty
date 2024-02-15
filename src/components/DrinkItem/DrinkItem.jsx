import { DrinkItemWrapper,DrinkItemImg,DrinkItemTitle,DrinkItemDescription,DrinkBtnSee,DrinkBtnDel ,DrinkStatus,DrinkWrapperBtn} from "./DrinkItemStyle";
import deleteBtn from "../../images/deleteBtn.svg";
const DrinkItem = ({ url, title, statusCoctail, description, text }) => {

  return (
  <DrinkItemWrapper>
    <DrinkItemImg src={url} alt=""/>
      <DrinkItemTitle>{title}</DrinkItemTitle>
      <DrinkStatus>{statusCoctail}</DrinkStatus>
      <DrinkItemDescription>{description}</DrinkItemDescription>
      <DrinkWrapperBtn>
        <DrinkBtnSee type="button">{text}</DrinkBtnSee>
        <DrinkBtnDel type="button">
          <img src={deleteBtn} alt="React Logo" />
        </DrinkBtnDel>
      </DrinkWrapperBtn>
      
  </DrinkItemWrapper>)
}

export default DrinkItem;