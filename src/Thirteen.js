import React, { useEffect, useState } from "react";
import "./assign3.css";
import Eight from "./Eight";
import axios from 'axios';

export default function Thirteen() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            const res = await axios.get('https://fakestoreapi.com/products');
            if (!res.ok) {
                console.error("Failed to fetch data");
                return;
            }
            const resData = await res.json();
            setData(resData);
        };
        fetchMyData();
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                {data.map((d) => (
                    <div key={d.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={d.image} className="card-img-top" alt={d.title} />
                            <div className="card-body">
                                <h5 className="card-title">{d.title}</h5>
                                <p className="card-text"><strong>Price: </strong>${d.price}</p>
                                <p className="card-text"><strong>Category: </strong>{d.category}</p>
                                <Eight/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
