import { useSelector } from "react-redux";
import Veg_nonveg from "./Accordion_inside_veg_non_veg";
//import { useEffect } from "react";
const Cart=() =>{

    const store_data = useSelector((store)=>store.cart.items) ;
    
    //This is for price
    const price_array =store_data.map(val=>val.price);
    const price = price_array.reduce((a,b)=>(a+b),0)/100;
    
    //This is for removing duplicates from the store data values for cart
    const filtered_store_data=  [...store_data.reduce((map,obj)=>map.set(obj.id , obj),new Map()).values()];
    console.log(filtered_store_data)

    return (<div className="m-1 p-1 ">
        <div className="text-center "><h3 className="text-4xl font-bold text-orange-600">🚗Cart</h3></div>
        {store_data.length===0?
        (<div className="h-full flex justify-center items-center flex-col ">
            <h2 className="opacity-80 text-[3rem] text-orange-600 my-20">Hungry!!!🤪 Get some food from the store</h2>
            <p className="opacity-80 text-[3rem] font-bold block">Total Amount = ₹ 0 </p>
              </div>):(<div className="mx-auto w-6/12 bg-slate-300">
                {filtered_store_data.map(data=>(<Veg_nonveg veg_nonveg={data} key={data.id}></Veg_nonveg>))}
                <p className="opacity-80 text-[3rem] font-bold block text-center">Total Amount = ₹ {price}🪙 </p></div>
                )}
        
        </div>)
} 

export default Cart;