import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err = useRouteError();
    console.log(err);
    return(
    <div>
        <h1>This is the error page_type</h1>
        <h2>Fuck Off You dumb Ass ...What page do you want to go to</h2>
        <h4>{err.data}</h4>
        <h4>{err.status}: {err.statusText}</h4>
    </div>
)}

export default Error;