import  ReactDOM  from "react-dom";
// import Sum from "./sum";
// import Intro from "./intro";
// import Five from "./five";
import Six from "./six";
const rootElement = document.getElementById('root');
const rootRef = ReactDOM.createRoot(rootElement);
// let a= 23;
// let b=26;
// let res= Sum(a,b);
rootRef.render(<Six/>);
// rootRef.render(res);
