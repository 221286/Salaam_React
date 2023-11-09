//import {RESTAURANTLIST} from "../utils/restaurant_mockdata.js";
import Restcard from "./Restcard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
const Body = ()=>{

      const [getsearch,setsearch] = useState("");
      const [getRestaurantlist,setRestaurantlist] = useState([]);
      const [filterRestaurantlist,setfilteredRestaurantlist]= useState([]);

      useEffect(()=>{ 
        fetchdata();
      }
      ,[]);

      const fetchdata = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9855475&lng=77.7122996&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestaurantlist(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurantlist(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    
    return getRestaurantlist.length === 0 ? (<Shimmer></Shimmer>) : (
        <div className="body-container">
            <div className="search-container">
                <div className="search">
                <input type="text"  onChange={(e)=>{setsearch(e.target.value)}} value={getsearch} />
                <button  onClick={()=>{
                    
                    
                    const search_list=getRestaurantlist.filter((res)=>{return res.info.name.toLowerCase().includes(getsearch.toLowerCase());});
                    setfilteredRestaurantlist(search_list);
                    
                }}
                >Search</button>

                </div>


                 <div className="filter">
            <button onClick={()=>{
                const filter_list=getRestaurantlist.filter((res)=>res.info.avgRating>4);
                setfilteredRestaurantlist(filter_list);
                console.log(filter_list);

            }}>Filter</button>
            </div>
            </div>
            <div className="restcard-container">
            {filterRestaurantlist.map((restra)=>(<Restcard key={restra.info.id} restaurant={restra}></Restcard>))}
            </div>
        </div>
        
    )
}

export default Body;