import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


 const Restmenulist =()=>{
     const {resId} = useParams();
     
     
 const [getlist,setList] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async()=>{
         const Data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9855475&lng=77.7122996&restaurantId="+resId);
         const jason =await Data.json();
         console.log(jason.data.cards[2].groupedCard.cardGroupMap.REGULAR);
         setList(jason.data);
         }
         if (getlist === null){return <Shimmer></Shimmer>} 
         const {name,costForTwoMessage,cuisines}=getlist?.cards[0]?.card?.card?.info;
         const {itemCards}=getlist?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    return (<div>
    <h1>{name}</h1>
    <h3>cuisines - {cuisines.join(",")}: {costForTwoMessage}</h3>
    <h4>Recomended</h4>
    
    <ul>
    {itemCards.map((recmenu)=>(<li key={recmenu.card.info.name}>{recmenu.card.info.name}:     Price for 1 is {recmenu.card.info.price/100}</li>))}
    
    </ul>
</div>)}

export default Restmenulist;