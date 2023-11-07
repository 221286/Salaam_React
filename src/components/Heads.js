import {HEADER_LOGO_UI} from "../utils/constants.js"

const Heads = ()=>{
    return (<div className="header-container">
            <div className="logo-container">
                <img alt="logo" src={HEADER_LOGO_UI}/>
            </div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
    </div>)
};

export default Heads;