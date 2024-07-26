import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { globalContext } from "./App";


export default function Navigation() {
    const{ globalsetIsLogin}=useContext(globalContext);
    const{globalCount}=useContext(globalContext);
    const navigate=useNavigate();
    const logout=()=>{
       
        globalsetIsLogin(false);
        navigate('/');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <a class="navbar-brand" href="#">Navbar</a> */}

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cards" className="nav-link">Items</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/data" className="nav-link">Details</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">Cart({globalCount})</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">Profile</Link>
                        </li>
                        <button class="btn btn-outline-success my-2 my-sm-0 mr-0" type="submit" onClick={logout}>Logout</button>
                    </ul>
                </div>
            </nav>
        </div>
    );
}