import { useEffect, useState } from "react"

const useOnlinestatus = () =>{
    const [getonlinestatus,setonlinestatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlinestatus(false);
        })
        window.addEventListener("online",()=>{
            setonlinestatus(true);

        })
        
    },[]);
    return getonlinestatus;
}

export default useOnlinestatus;