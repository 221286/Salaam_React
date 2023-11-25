
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useGetResmenu from "../utils/useGetResmenu";

 const Restmenulist =()=>{
     const {resId} = useParams();
     const data_list = useGetResmenu(resId);
     
     
 
         if (data_list === null){return (<Shimmer></Shimmer>)} 
         const {name,costForTwoMessage,cuisines}=data_list?.cards[0]?.card?.card?.info;
         const {itemCards}=data_list?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    return (<div>
    <h1>{name}</h1>
    <h3>cuisines - {cuisines.join(",")}: {costForTwoMessage}</h3>
    <h4>Recomended</h4>
    
    <ul>
    {itemCards.map((recmenu)=>(<li key={recmenu.card.info.name}>{recmenu.card.info.name}:     Price for 1 is {recmenu.card.info.price/100}</li>))}
    
    </ul>
</div>)}

export default Restmenulist;