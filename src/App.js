import React from "react";
import  ReactDOM  from "react-dom/client";
import Heads from "./components/Heads.js";
import Restcard from "./components/Restcard.js";
import Body from "./components/Body.js"











const App_layout =()=>{
    return (<div className="main-container">
              <Heads></Heads>
              <Body />
    </div>)
}

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<App_layout />);