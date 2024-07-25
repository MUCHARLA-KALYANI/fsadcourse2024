import DataFetching from "./DataFetching";
import Assign3 from "./assign3";
import Cards from "./assign1";
import {BrowserRouter,Routes,Route} from "react-router-dom";

export default function App(){
    return(
      <BrowserRouter>
           <Routes>
            <Route path="/" element={<DataFetching/>} ></Route>
            <Route path="/products" element={<Assign3/>} ></Route>
            <Route path="/cards" element={<Cards/>} ></Route>
           </Routes>
      </BrowserRouter>
    )
}