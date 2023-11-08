import {RESTAURANTLIST} from "../utils/restaurant_mockdata.js";
import Restcard from "./Restcard.js";
import { useState } from "react";

const Body = ()=>{

    
      const [getRestaurantlist,setRestaurantlist] = useState(RESTAURANTLIST);
    return (
        <div className="body-container">
            <div className="search-container">

            <button onClick={()=>{
                const filter_list=getRestaurantlist.filter((res)=>res.info.avgRating>4);
                setRestaurantlist(filter_list);

            }}>Filter</button>
            </div>
            <div className="restcard-container">
            {getRestaurantlist.map((restra)=>(<Restcard key={restra.info.id} restaurant={restra}></Restcard>))}
            </div>
        </div>
    )
}

export default Body;