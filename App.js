import React from "react";
import  ReactDOM  from "react-dom/client";

//JSX (is transpiled before it reaches the Javascript engine) parcel -babel
//JSX=>React element(object)=>html elemnt(render)

const Jsxhead= ()=>(<h1 id="first" className="first1"> This is pehla Salaam</h1>); 
const elem = <h1>This is element</h1>

const Secondheadcomponent =()=>(<div>
<Jsxhead />
{Jsxhead()}
{elem}
<Jsxhead></Jsxhead>
<h1 id="#second"> This is dusra Salaam
</h1></div>);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<Secondheadcomponent />);