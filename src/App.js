import DataFetching from "./DataFetching";
import Assign3 from "./assign3";
import Cards from "./assign1";

import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./Home";
import { createContext, useState } from "react";
import Profile from "./Profile";
import Cart from "./cart";

export const globalContext = createContext();
// export const UserContextCard = createContext();
export default function App(){
  const[globalCount,setGlobalCount]=useState(0);
  const[userDetails,setUserDetails]=useState({});
  const [globalIsLogin, globalsetIsLogin] = useState(false);
  const [globalUserCart, globalsetUserCart] = useState([]);
  const [globalListObject, globalsetListObject] = useState([]);
    return(
        <globalContext.Provider value={{globalCount,setGlobalCount,userDetails,setUserDetails,globalIsLogin, globalsetIsLogin,globalUserCart, globalsetUserCart,globalListObject, globalsetListObject}}>
      <BrowserRouter>   
           <Routes>
           <Route path="/" element={<Home/>} ></Route>
            <Route path="/data" element={<DataFetching/>} ></Route>
            <Route path="/products" element={<Assign3/>} ></Route>
            <Route path="/cards" element={<Cards/>} ></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
           </Routes>
           
      </BrowserRouter>
      </globalContext.Provider>
    )
}