
import { CDN_CLOUDINARY_UI } from "../utils/constants";

const Restcard =(props)=>{
    const {restaurant}=props;
    const {name,avgRating,cuisines,cloudinaryImageId}=restaurant?.info;    //optioanl chaining using '?' and destructuring in {};
    //console.log(aggregatedDiscountInfoV3);
    return (
        <div className="w-72 m-4 p-3 bg-gray-200 rounded-lg shadow-xl hover:bg-orange-300">
            <div className="mb-3 ">
                <img alt="not loaded" className="rounded-xl" src={CDN_CLOUDINARY_UI + cloudinaryImageId}/>
            </div>
            <h3 className="font-bold">{name}</h3>
            <h4> {avgRating} ⭐</h4>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{restaurant.info.sla.deliveryTime} mins</h4>
        </div>
    )
}; 

 //higher order component created still did not get the promotion Api so findin something cool now

export const Highercardcomponent =(Restcard)=>{return (props)=>
{   const {restaurant}=props;
    const {aggregatedDiscountInfoV3}=restaurant?.info; 
     
       return (<div>
   <label className="absolute bg-orange-400 p-1 bg-opacity-75 rounded-lg shadow-lg">{aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}</label>
   <Restcard {...props}></Restcard>

</div>)

}
}
export default Restcard;