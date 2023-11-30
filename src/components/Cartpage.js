import { useSelector } from "react-redux";
import Veg_nonveg from "./Accordion_inside_veg_non_veg";
const Cart=() =>{

    const store_data = useSelector((store)=>store.cart.items) ;
    //console.log(store_data);

    return (<div className="m-1 p-1 ">
        <div className="text-center "><h3 className="text-4xl font-bold text-orange-600">🚗Cart</h3></div>
        {store_data.length===0?
        (<div className="h-full flex justify-center items-center text-orange-600 my-20">
            <h2 className="opacity-80 text-[3rem]">Hungry!!!🤪 Get some food from the store</h2>
              </div>):(<div className="mx-auto w-6/12 bg-slate-300">
                {store_data.map(data=>(<Veg_nonveg veg_nonveg={data} key={data.id}></Veg_nonveg>))}</div>)}
        
        </div>)
} 

export default Cart;