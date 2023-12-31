import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items: []},
    reducers:{
        //mutating the state|| directly modifying the state
        addItems:(state,action)=>{state.items.push(action.payload)},
        removeItems:(state,action)=>{
            const itemId= action.payload;
            
                state.items= state.items.filter((item)=>item.id !== itemId.id)
            
            },
        clearCart:(state)=>{state.items.length=0}
    }

})

export const {addItems,removeItems,clearCart}=cartSlice.actions;
export default cartSlice.reducer;