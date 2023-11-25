import { useEffect, useState } from "react";
import { REST_MENU_API } from "./constants";
//import { json } from "react-router-dom";

const useGetResmenu =(resId)=>{
    const [getlist,setList]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
     const fetchData = async()=>{
        const data = await fetch(REST_MENU_API+resId);
        const jason = await data.json();
        setList(jason.data);
     }
    return getlist;
}

export default useGetResmenu;