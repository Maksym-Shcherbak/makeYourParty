import MainDrinkItem from "./MainDrinkItem";
import { MainDrinksList,MainListCategory} from "./MainDrinkListStyle";


const MainDrinkList = ({ header, data}) => {
  return (<>
    <MainListCategory>{header}</MainListCategory>
    <MainDrinksList>
      {data?.map(({ drink, drinkThumb, _id }) => (
        <MainDrinkItem
             key={_id}
             title={drink}
             text="see more"
             url={drinkThumb}
             id={_id}
          
        />
    ))}
      
  
  </MainDrinksList></>
  )
  
}

export default MainDrinkList;