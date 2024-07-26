import { useContext, useEffect, useState } from "react";
import './assign1.css';
import { globalContext } from "./App";

export default function Eight({ index }) {
    const { globalCount, setGlobalCount } = useContext(globalContext);
    const { globalsetUserCart } = useContext(globalContext);
    const { globalListObject } = useContext(globalContext);
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
        setGlobalCount(globalCount + 1);
        const selectedItem = globalListObject[index];
        console.log("Selected Item on Increment:", selectedItem);
        globalsetUserCart((prevCart) => [...prevCart, selectedItem]);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
            setGlobalCount(globalCount - 1);
            const selectedItem = globalListObject[index];
            console.log("Selected Item on Decrement:", selectedItem);
            globalsetUserCart((prevCart) => {
                const itemIndex = prevCart.findIndex(item => item.id === selectedItem.id);
                if (itemIndex > -1) {
                    const newCart = [...prevCart];
                    newCart.splice(itemIndex, 1);
                    return newCart;
                }
                return prevCart;
            });
        }
    };

    useEffect(() => {
        console.log("use effect is called");
    }, [count]);

    return (
        <div>
            {count === 0 ?
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
