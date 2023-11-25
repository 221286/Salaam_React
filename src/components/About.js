import Classyuser from "./classyuser";
import { Component } from "react";

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
                <Classyuser name={"Anis Osama"} contact={"8210218453"}></Classyuser>
                </div>)}
}
export default Aboutus;