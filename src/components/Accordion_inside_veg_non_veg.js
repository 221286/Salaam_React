import { useDispatch } from "react-redux";
import { CDN_CLOUDINARY_UI } from "../utils/constants";
import { addItems } from "../../Store_and_slices/cartSlice";
const Veg_nonveg = ({veg_nonveg})=>{

    const dispatched = useDispatch();
    function Add_to_cart(){
        dispatched(addItems(veg_nonveg))
    }
    const {name,category,description,imageId}= veg_nonveg
    return (<div className="m-4 p-3 text-sm shadow-xl flex justify-between hover:bg-orange-200" ><div>
        <div className="flex justify-between m-4 wx-8/12 "><span className="underline">{name}</span><span className="underline">{category}</span></div>
        <p>{description}</p>
        </div>
        <div className="wx-4/12 "><img alt="not loaded" src={CDN_CLOUDINARY_UI+imageId} className=" h-32  rounded-lg p-4 m-4 w-full"/>
       <div ><button className=" bg-orange-300 opacity-75 p-2 ml-8 rounded-lg float-left text-[13px]" onClick={()=>Add_to_cart(veg_nonveg)}>Add items +
       </button></div> </div>
    </div>)
}

export default Veg_nonveg;