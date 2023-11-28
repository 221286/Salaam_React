import { useState } from "react"
import Accordion_list_menu from "./Accordion_list_menu"


const Accordion_restaurant_menu= ({accordion_card})=>{
    const [accordion_drop,set_accordion]=useState(false);
    function handle_accordion(){
        set_accordion(!accordion_drop);
    }
    

    const {title,categories}=accordion_card?.card?.card
    console.log(accordion_card?.card?.card.categories[0].title)
return (<div className="  w-6/12 mx-auto shadow-lg my-3 p-3 bg-slate-100">
    <div className="flex font-bold justify-between shadow-xl m-4 p-2" onClick={handle_accordion}><span className="text-col" 
    >{title}</span><span>💠</span></div>
    <span>{ accordion_drop &&  categories.map((all,arr)=> 
    

    (
    <Accordion_list_menu Accordion_list={all} key={arr}></Accordion_list_menu>))}</span>
    </div>)

}

export default Accordion_restaurant_menu;