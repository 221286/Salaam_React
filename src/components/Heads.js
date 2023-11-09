import {HEADER_LOGO_UI} from "../utils/constants.js";
import { useState } from "react";

const Heads = ()=>{
    const [getbutton,setbutton]= useState("Login");
    return (<div className="header-container">
            <div className="logo-container">
                <img alt="logo" src={HEADER_LOGO_UI}/>
            </div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <li><button  className="Header-login-button" onClick={()=>{getbutton === "Login" ? setbutton("Logout") : setbutton("Login");
                
                }}>{getbutton} </button></li>
                </ul>
            </div>
    </div>)
};

export default Heads;