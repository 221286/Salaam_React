import React, {lazy,Suspense} from "react";
import  ReactDOM  from "react-dom/client";
import Heads from "./components/Heads.js";
//import Restcard from "./components/Restcard.js";
import Body from "./components/Body.js"
import { createBrowserRouter ,RouterProvider, Outlet } from "react-router-dom";
import Aboutus from "./components/About.js";
import Error from "./components/Error.js";
import Contactus from "./components/Contact.js";
import Restmenulist from "./components/Restmenulist.js";
//import Grocery from "./components/Grocery.js";





const Grocer = lazy(()=>import("./components/Grocery.js"))



const App_layout =()=>{
    return (<div className="main-container">
              <Heads></Heads>
              <Outlet />
    </div>)
}
const routerapp = createBrowserRouter([{
  path:"/",
  element:<App_layout></App_layout>,
  children:[
    {
      path:"/",
      element:<Body></Body>
    },
  {
    path:"/About",
    element: <Aboutus />
  },
  ,
  {
    path:"/Grocery",
    element: <Suspense fallback={<h1>Loading...</h1>}><Grocer /></Suspense>
  },
  {
    path:"/Contact",
    element:<Contactus></Contactus>
  },
    {
      path:"/restaurant/:resId",
      element:<Restmenulist />
    }],
  errorElement:<Error></Error>
}])

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerapp} />);