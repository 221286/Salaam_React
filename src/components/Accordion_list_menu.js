import Veg_nonveg_nonveg from "./Accordion_inside_veg_non_veg";
const Accordion_list_menu =({Accordion_list})=>{
    const {title,itemCards}=Accordion_list;
    //console.log(Accordion_list.itemCards.map(menu=>menu.card.info))
    return (
    <div className="text-left"><h3 className="font-bold text-orange-300">{title}</h3><hr className="font-black"/>
     <div>{itemCards.map(menu=>(<Veg_nonveg_nonveg veg_nonveg={menu.card.info} key={menu.card.info.id}></Veg_nonveg_nonveg>))}</div>
    
    </div>)
}
export default Accordion_list_menu;