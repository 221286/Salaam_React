import { useEffect,useState } from "react";
import { SWIGGY_CARD } from "./constants";

const useGetcard = () => {
    const [getRestaurantlist,setRestaurantlist] = useState([]);
     // const [filterRestaurantlist,setfilteredRestaurantlist]= useState([]);
    useEffect(()=>{
        fetchdata();

    },[]);
    const fetchdata = async()=>{
        const data = await fetch(SWIGGY_CARD);
        const json = await data.json();
        setRestaurantlist(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       // setfilteredRestaurantlist(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return getRestaurantlist;
}
export default useGetcard;