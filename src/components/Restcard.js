
import { CDN_CLOUDINARY_UI } from "../utils/constants";

const Restcard =(props)=>{
    const {restaurant}=props;
    const {name,avgRating,cuisines,cloudinaryImageId}=restaurant?.info;    //optioanl chaining using '?' and destructuring in {};
    return (
        <div className="card-container">
            <div className="card-image-container">
                <img alt="not loaded" src={CDN_CLOUDINARY_UI + cloudinaryImageId}/>
            </div>
            <h3>{name}</h3>
            <h4> {avgRating} Star</h4>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{restaurant.info.sla.deliveryTime} mins</h4>
        </div>
    )
}; 
export default Restcard;