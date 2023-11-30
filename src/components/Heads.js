import {HEADER_LOGO_UI} from "../utils/constants.js";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus.js";
import usercontext from "../utils/usercontext.js";
import { useSelector } from "react-redux";

const Heads = ()=>{
    const [getbutton,setbutton]= useState("Login");
    const internet_status = useOnlinestatus();
    const {Loginuser} = useContext(usercontext)
    const appstore_data = useSelector((store)=>store.cart.items) 
    //console.log(appstore_data[0].id);
    
    return (<div className="flex justify-between border border-orange-700 rounded-lg p-3 mx-1 items-center shadow-lg">
            <div className="w-28">
                <img alt="logo" src={HEADER_LOGO_UI}/>
            </div>
            <div className="">
                <ul className="flex items-center  text-xl">
                    <li className="m-5 p-3">Onlinestatus:{internet_status === true ?"✅":"🔴"}</li>
                    <li className="m-5 p-3"><Link to="/">Home</Link></li>
                    <li className="m-5 p-3"><Link to="/About">About</Link></li>
                    <li className="m-5 p-3"><Link to="/Contact">Contact us</Link></li>
                    <li className="m-5 p-3"><Link to="/Grocery">{Loginuser}</Link></li>
                    <li className="m-5 p-3"> <Link to="/Cart">🚗Cart = {appstore_data.length}</Link> </li>
                    <li className="m-5 p-3"><button  className="p-2 px-3 bg-orange-400 rounded-lg shadow-xl hover:cursor-pointer" onClick={()=>{getbutton === "Login" ? setbutton("Logout") : setbutton("Login");
                    
                }}>{getbutton} </button></li>
                </ul>
            </div>
    </div>)
};

export default Heads;