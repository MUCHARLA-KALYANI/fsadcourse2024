import { useRef, useState } from "react";


export default function Eleven(){

        const firstRef=useRef(null);
          //reference variable   
        
        const function1=(e)=>{
            e.preventDefault(); //prevent reload
             console.log("form submitted");  
             console.log(firstRef.current.value); 
             if(firstRef.current.value!==''){
                firstRef.current.value='';//to make input field empty after submission
             } 
        };
       return(
         <div>
            <form onSubmit={function1}>
                <input type="text" ref={firstRef} />
                <button type="submit" >Submit</button>
            </form>
         </div>
       );
}