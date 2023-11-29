import Classyuser from "./classyuser";
import { Component } from "react";

import usercontext from "../utils/usercontext";

class Aboutus extends Component{
    constructor(props){
        super(props)
        console.log("This is parent constructor");
    }
    componentDidMount(){
        console.log("this is parent did mount");
    }
    
    render(){
        console.log("This is parent render");
        return (<div>
                 <usercontext.Consumer>{({Loginuser})=>(<Classyuser name={"Anis Osama"} contact={"8210218453"} value={Loginuser}></Classyuser>)}</usercontext.Consumer>
                
                </div>)}
}
export default Aboutus;