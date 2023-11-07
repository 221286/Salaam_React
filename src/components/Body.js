import {RESTAURANTLIST} from "../utils/restaurant_mockdata.js";
import Restcard from "./Restcard.js";

const Body = ()=>{
    return (
        <div className="body-container">
            <div className="search-container">
            Search space{RESTAURANTLIST.length}
            </div>
            <div className="restcard-container">
            {RESTAURANTLIST.map((restra)=>(<Restcard key={restra.info.id} restaurant={restra}></Restcard>))}
            </div>
        </div>
    )
}

export default Body;