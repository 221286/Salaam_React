import { useDispatch } from "react-redux";
import { CDN_CLOUDINARY_UI } from "../utils/constants";
import { addItems,removeItems } from "../../Store_and_slices/cartSlice";
import { useState } from "react";
const Veg_nonveg = ({veg_nonveg})=>{
    const [getcount,setcount] = useState(0);

    const dispatched = useDispatch();
    function Add_to_cart(){
        dispatched(addItems(veg_nonveg))
    }
    const remove_dispatched = useDispatch();
    function Remove_from_cart(){
         setcount(getcount-1 )      
         remove_dispatched(removeItems(veg_nonveg))
        console.log(getcount);
    }
    //console.log(veg_nonveg[1]);
    const {name,category,description,imageId,price}= veg_nonveg
    return (<div className="m-4 p-3 text-sm shadow-xl flex justify-between hover:bg-orange-200" ><div>
        <div className="flex justify-between m-4 wx-8/12 "><span className="underline">{name}</span><span className="underline">{category}</span></div>
        <p>{description}</p>
        <p className="font-bold">Price : ₹{price/100}</p>
        </div>
        <div className="wx-4/12 "><img alt="not loaded" src={CDN_CLOUDINARY_UI+imageId} className=" h-32  rounded-lg p-4 m-4 w-full"/>
       <div className="flex justify-between " ><button className=" bg-orange-300 opacity-75 text-[1.5rem] px-5 p-3 mx-4 rounded-lg float-left  font-bold" 
       onClick={()=>{ setcount(getcount+1)
        return Add_to_cart(veg_nonveg)}}> +{getcount}
       </button>
       <button className=" bg-orange-300 opacity-75 p-2 text-[2rem] px-5 mx-4 rounded-lg float-left  font-bold" 
       onClick={()=>Remove_from_cart(veg_nonveg)}> -
       </button></div> </div>
    </div>)
}

export default Veg_nonveg;