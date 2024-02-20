import MainDrinkItem from "./MainDrinkItem";
import { MainDrinksList } from "./MainDrinkListStyle";

const MainDrinkList = ({ drinks,text }) => {
  return (<MainDrinksList>
    {drinks?.map(({ drink, drinkThumb,id}) => (
        <MainDrinkItem
          key={id}
          title={drink}
          text={text}
          url={drinkThumb}
          id={id}
          
        />
    ))}
  </MainDrinksList>
  )
  
}

export default MainDrinkList;