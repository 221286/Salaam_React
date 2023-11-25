import React from "react";

class Classyuser extends React.Component{ 
    constructor(props){
        super(props)
        this.state={
            count:1,
        }
        console.log("this is child constructor") 
    }
    componentDidMount(){
        console.log("this is child did mount");
    }
    render(){
        const {name,contact}=this.props;
        const {count}=this.state;
        console.log("this is child render");
        return(
        <div className="classy"><h1>User Profile</h1>
        <h2>{count}</h2>
        <button onClick={()=>{//never update variables directly
            this.setState({count: this.state.count + 1,});
            }}>Increment</button>
        <h3>Name:{name}</h3>
        <h3>Contact:{contact}</h3>
        <h4>gmail:anisosama07@gmail.com</h4></div>)

    }


}
export default Classyuser;