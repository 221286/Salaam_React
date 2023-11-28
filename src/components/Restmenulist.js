
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useGetResmenu from "../utils/useGetResmenu";
import Accordion_restaurant_menu from "./Accordion_reataurant_menu";

 const Restmenulist =()=>{
     const {resId} = useParams();
     const data_list = useGetResmenu(resId);
    // console.log(data_list);
     
     
 
         if (data_list === null){return (<Shimmer></Shimmer>)} 
         const {name,costForTwoMessage,cuisines}=data_list?.cards[0]?.card?.card?.info;
         const {itemCards}=data_list?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
         const {REGULAR}=data_list?.cards[2]?.groupedCard?.cardGroupMap
         const Accordionitems_data=REGULAR?.cards?.filter((find)=>find?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
         //console.log(Accordionitems_data);
    return (<div className="m-5 text-center">
    <h1 className="font-bold text-4xl text-orange-400 m-4">{name}</h1>
    <h3 className="font-bold text-xl">cuisines - {cuisines.join(",")}</h3> 
    
    
    <div className="my-4">
    {Accordionitems_data.map((recmenu)=>(<Accordion_restaurant_menu accordion_card={recmenu} key={recmenu?.card?.card?.title}></Accordion_restaurant_menu>))}
    </div>
    
</div>)}

export default Restmenulist;