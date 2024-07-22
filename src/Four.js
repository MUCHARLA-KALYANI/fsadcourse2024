
    
    
export default function Four(){
    const arr=["Kalyani","Uha","Varshini","Dinesh","Chandana","Kundana"];
    return arr.map((arr1,index)=><li key={index}>{arr1}</li>);
}