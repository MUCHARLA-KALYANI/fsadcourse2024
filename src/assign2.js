
import "./assign2.css";
import Eight from "./Eight";
import Nine from "./Nine";

export default function Assign2(){
    return(
        <div>
      <div className="c1">
       <span> <img src="../Strawberry-Tarts.png" alt="" className="img1" /></span>
       <span><h1>Product Description</h1>
       <p>Strawberries are widely cherished for their vibrant red color, juicy texture, and sweet flavor. Below is an overview of their characteristics, nutritional benefits, and uses.</p>
       <h2>$200.00</h2>
       <Eight/></span>
      </div>
      <div className="c1">
        <Nine/>
      </div>
      </div>
    );
}