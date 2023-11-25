//import {RESTAURANTLIST} from "../utils/restaurant_mockdata.js";
import Restcard from "./Restcard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { SWIGGY_CARD} from "../utils/constants.js";
import useOnlinestatus from "../utils/useOnlinestatus.js";
const Body = ()=>{

      const [getsearch,setsearch] = useState("");
      const [getRestaurantlist,setRestaurantlist] = useState([]);
      const [filterRestaurantlist,setfilteredRestaurantlist]= useState([]);

      useEffect(()=>{ 
        fetchdata();
      }
      ,[]);

      const fetchdata = async ()=>{
        const data = await fetch(SWIGGY_CARD);
        const json = await data.json();
        setRestaurantlist(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurantlist(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
      const internet_status = useOnlinestatus();
      console.log(internet_status);
      if (internet_status === false){return (<h1>Ooops You're offline</h1>)};
    
    return getRestaurantlist.length === 0 ? (<Shimmer></Shimmer>) : (
        <div className="body-container">
            <div className="search-container">
                <div className="search">
                <input type="text"  onChange={(e)=>{setsearch(e.target.value)} } className="Do" value={getsearch} />
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

            }}>Rating 4.0
            + </button>
            </div>
            </div>
            <div className="restcard-container">
            {filterRestaurantlist.map((restra)=>(<Link to={"/restaurant/"+restra.info.id} key={restra.info.id}><Restcard  restaurant={restra}></Restcard></Link>))}
            </div>
        </div>
        
    )
}

export default Body;