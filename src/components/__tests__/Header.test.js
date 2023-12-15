import { render } from "@testing-library/react"
import Heads from "../Heads"
import { Provider } from "react-redux"
import appstore from "../../../Store_and_slices/appstore"
import { useState } from "react"
import { BrowserRouter } from "react-router-dom"

//import usercontext from "../../utils/usercontext" 

test("Should contain login in the head",()=>{
    render(<BrowserRouter>
    <Provider store={appstore}>
        <Heads />           
    </Provider>
    
    </BrowserRouter>);
    
})