// functionalComponent

import { useEffect,useState } from "react";
import './assign1.css';

export default function Eight(){
    const [count,setCount]=useState(0);

    const handleIncrement=()=> {
        setCount(count + 1);
      };
      const handleDecrement=()=> {
       count===0? setCount(0):setCount(count-1);
      };

    useEffect(()=>{
       console.log("use effect is called");
    },[count]);

    return(
        <div>
       
        {count===0?    
        <div>
                <button onClick={handleIncrement} className="btn1">Add to cart</button>
        </div>
        :
        <div className="cmp">  
             <button onClick={handleDecrement} className="btn">-</button>
            <span className="cnt">{count}</span>
            <button onClick={handleIncrement} className="btn">+</button>
        </div>
        }
        </div>
        
    );
}