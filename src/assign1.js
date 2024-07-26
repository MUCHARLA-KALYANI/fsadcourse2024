import React from "react";
import "./assign1.css";
import Navigation from "./Navigation";

const data = [
    {
        img: "../ashwinkumar.jpg",
        name: "ashwin",
        about: "A versatile actor with very unique acting skills"
    },
    {
        img: "../arjit.jpeg",
        name: "arjit",
        about: "A versatile singer with very unique singing skills"
    },
    {
        img: "../anirudh.jpeg",
        name: "armaan malik",
        about: "A versatile singer with very unique singing skills"
    },
    {
        img: "../vaishnav.jpeg",
        name: "vaishnav",
        about: "A versatile actor with very unique acting skills"
    },
    {
        img: "../vaishnav.jpeg",
        name: "vaishnav",
        about: "A versatile actor with very unique acting skills"
    },
    {
        img: "../vaishnav.jpeg",
        name: "vaishnav",
        about: "A versatile actor with very unique acting skills"
    },
    {
        img: "../vaishnav.jpeg",
        name: "vaishnav",
        about: "A versatile actor with very unique acting skills"
    },
    {
        img: "../vaishnav.jpeg",
        name: "vaishnav",
        about: "A versatile actor with very unique acting skills"
    }
];

export default function Cards() {
    return (
        <>
        <Navigation/>
        <div className="cards-container">
            {data.map((d, i) => 
                <div className="card-container" key={i}>
                    <img src={d.img} alt="" className="card-img" />
                    <div>
                        <p className="card-title">{d.name}</p>
                        <p className="card-description">{d.about}</p>
                        <button className="card-btn">Read More</button>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}
