import { useState } from "react";
import Login from "./login";
import Register from "./register";



export default function Twelve(){



 const[login,setLogin]=useState(true);
// const[register,setRegister]=useState('');

const Home=()=>{
    setLogin(true);
}
const Reg=()=>{
    setLogin(false);
}


    return(
        <div>
            <button  onClick={Home}>Login</button>
            <button  onClick={Reg}>Register</button>
            {
                login?
                <div> <Login/></div>:
                <div> <Register/></div>
            }
        </div>
    );
}