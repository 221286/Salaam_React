import React from "react";

class Classyuser extends React.Component{ 
    constructor(props){
        super(props)
        this.state={
            count:1,
        }
        
    }
    render(){
        const {name,contact}=this.props;
        const {count}=this.state;
        return(
        <div className="classy"><h1>User Proile</h1>
        <h2>{count}</h2>
        <button onClick={()=>{this.setState({count:this.state.count})}}>Increment</button>
        <h3>Name:{name}</h3>
        <h3>Contact:{contact}</h3>
        <h4>gmail:anisosama07@gmail.com</h4></div>)

    }


}
export default Classyuser;