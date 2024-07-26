import React, { useContext } from "react";
import { globalContext } from "./App";
import Navigation from "./Navigation";

export default function Cart() {
    const { globalUserCart } = useContext(globalContext);

    return (
        <>
            <Navigation />
            <div className="container mt-5">
                <h2>Your Cart</h2>
                {globalUserCart.length > 0 ? (
                    <div className="row">
                        {globalUserCart.map((item, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card">
                                    <img src={item.image} className="card-img-top" alt={item.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text"><strong>Price: </strong>${item.price}</p>
                                        <p className="card-text"><strong>Category: </strong>{item.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
        </>
    );
}
