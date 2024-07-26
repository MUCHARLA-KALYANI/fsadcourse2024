
import { useContext, useEffect } from "react";
import { globalContext } from "./App";
import Navigation from "./Navigation";
function Profile(){
    const{userDetails,setUserDetails}=useContext(globalContext);
    useEffect(()=>{
        const name = localStorage.getItem()
    })
    
    return(
        <div>
            <Navigation/>
            <h6>Id:{userDetails.id}</h6>
            <h6>Email:{userDetails.email}</h6>
            <h6>Branch:{userDetails.branch}</h6>
            <h6>Year:{userDetails.yearValue}</h6>
            <h6>Gender:{userDetails.gender}</h6>
        </div>   
    );
}

export default Profile;