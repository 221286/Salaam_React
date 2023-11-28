import { CDN_CLOUDINARY_UI } from "../utils/constants";
const Veg_nonveg = ({veg_nonveg})=>{
    const {name,category,description,imageId}= veg_nonveg
    return (<div className="m-4 p-3 text-sm shadow-xl flex justify-between hover:bg-orange-200" ><div>
        <div className="flex justify-between m-4 wx-8/12 "><span className="underline">{name}</span><span className="underline">{category}</span></div>
        <p>{description}</p>
        </div>
        <div className="wx-4/12"><img alt="not loaded" src={CDN_CLOUDINARY_UI+imageId} className=" h-32 rounded-lg p-4 m-4 w-44"/></div>
    </div>)
}

export default Veg_nonveg;