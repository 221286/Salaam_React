import {HEADER_LOGO_UI} from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus.js";

const Heads = ()=>{
    const [getbutton,setbutton]= useState("Login");
    const internet_status = useOnlinestatus();
    return (<div className="header-container">
            <div className="logo-container">
                <img alt="logo" src={HEADER_LOGO_UI}/>
            </div>
            <div className="nav-container">
                <ul>
                    <li>Onlinestatus:{internet_status === true ?"✅":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact us</Link></li>
                    <li><Link to="Grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <li><button  className="Header-login-button" onClick={()=>{getbutton === "Login" ? setbutton("Logout") : setbutton("Login");
                
                }}>{getbutton} </button></li>
                </ul>
            </div>
    </div>)
};

export default Heads;