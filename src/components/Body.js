//import {RESTAURANTLIST} from "../utils/restaurant_mockdata.js";
import Restcard,{Highercardcomponent} from "./Restcard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { SWIGGY_CARD} from "../utils/constants.js";
import useOnlinestatus from "../utils/useOnlinestatus.js";
//import useGetcard from "../utils/useGetcard.js";
import usercontext from "../utils/usercontext.js";
import { useContext } from "react";

const Body = ()=>{

      const [getsearch,setsearch] = useState("");
      const [filterRestaurantlist,setfilteredRestaurantlist]= useState([]);
      const [getRestaurantlist,setRestaurantlist] = useState([]);
      //const [filterRestaurantlist,setfilteredRestaurantlist]= useState([]);

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

    //const {setuserinfo,getuserinfo}= useContext(usercontext);
       
      const Enhanced_card= Highercardcomponent(Restcard); 

      const internet_status = useOnlinestatus();
      //console.log(getRestaurantlist.filter((res)=>res.info.aggregatedDiscountInfoV3!=undefined));
      const defined_restauranrlist=getRestaurantlist.filter((res)=>res.info.aggregatedDiscountInfoV3!=undefined)
      
      if (internet_status === false){return (<h1>Ooops You're offline</h1>)};
    
    return getRestaurantlist.length === 0 ? (<Shimmer></Shimmer>) : (
        <div className="body-container">
            <div className="flex p-3 m-3">
                <div className="search">
                <input type="text" className=" border border-blue-950 p-1 m-3 shadow-xl rounded-lg" onChange={(e)=>{setsearch(e.target.value)} }  value={getsearch} />
                <button className="bg-orange-400 p-1 px-4 mx-4 rounded-lg hover:cursor-pointer shadow-xl" onClick={()=>{
                    
                    
                    const search_list=getRestaurantlist.filter((res)=>{return res.info.name.toLowerCase().includes(getsearch.toLowerCase());});
                    setfilteredRestaurantlist(search_list);
                    
                }}
                >Search</button>

{/*<input type="text" className=" border border-blue-950 p-1 m-3 shadow-xl rounded-lg" onChange={(e)=>{setuserinfo(e.target.value)} }  value={getuserinfo} />*/}


                </div>


                 <div className="filter">
            <button className ="bg-orange-400 p-1 px-4 mx-4 mt-3 shadow-lg rounded-xl hover:cursor-pointer items-center" onClick={()=>{ 
                const filter_list=getRestaurantlist.filter((res)=>res.info.avgRating>4);
                setfilteredRestaurantlist(filter_list);
                

            }}>Rating 4.0
            + </button>
            </div>

            <div className="filter">
            <button className ="bg-orange-400 p-1 px-4 mx-4 mt-3 shadow-lg rounded-xl hover:cursor-pointer items-center" onClick={()=>{ 
                const filter_list=getRestaurantlist.filter((res)=>res.info.aggregatedDiscountInfoV3!=undefined);
                setfilteredRestaurantlist(filter_list);
                

            }}>Offers 👍
            + </button>
            </div>
            </div>
            <div className="flex flex-wrap justify-around">
            {filterRestaurantlist.map((restra)=>(
            <Link to={"/restaurant/"+restra.info.id} key={restra.info.id}>
                {restra.info.aggregatedDiscountInfoV3 !==undefined?
                 (<Enhanced_card  restaurant={restra}></Enhanced_card>):(<Restcard restaurant={restra}></Restcard>)}
                </Link>))}
            </div>
        </div>
        
    )
}

export default Body;