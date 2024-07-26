import { useState } from "react";
import Login from "./login";
import Register from "./register";


export default function Twelve() {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            <button onClick={() => setShowLogin(true)}>Login</button>
            <button onClick={() => setShowLogin(false)}>Register</button>
            {showLogin ? <Login /> : <Register />}
        </div>
    );
}
