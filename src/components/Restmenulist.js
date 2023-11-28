
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useGetResmenu from "../utils/useGetResmenu";

 const Restmenulist =()=>{
     const {resId} = useParams();
     const data_list = useGetResmenu(resId);
    // console.log(data_list);
     
     
 
         if (data_list === null){return (<Shimmer></Shimmer>)} 
         const {name,costForTwoMessage,cuisines}=data_list?.cards[0]?.card?.card?.info;
         const {itemCards}=data_list?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
         console.log(data_list.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2]);
    return (<div className="m-5 ">
    <h1 className="font-bold text-4xl text-orange-400 m-8">{name}</h1>
    <h3 className="font-bold text-xl">cuisines - {cuisines.join(",")}</h3> <h3>Cost for Two {costForTwoMessage}</h3>
    <h4>Recomended</h4>
    
    <ul>
    {itemCards.map((recmenu)=>(<li key={recmenu.card.info.name}>{recmenu.card.info.name}:     Price for 1 is {recmenu.card.info.price/100}</li>))}
    
    </ul>
</div>)}

export default Restmenulist;