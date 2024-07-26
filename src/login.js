import { useContext, useEffect, useRef, useState } from "react";
import { globalContext } from "./App";

export default function Login() {
    const cid = useRef(null);
    const pwd = useRef(null);
    const [msg, setMsg] = useState('');
    const { globalIsLogin, globalsetIsLogin} = useContext(globalContext);
    const{userDetails,setUserDetails}=useContext(globalContext);

    useEffect(() => {
        cid.current.focus();
        localStorage.setItem("name","ReactJs");
        localStorage.setItem("Branch","IT");
    }, []);

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (cid.current.value === userDetails.id && pwd.current.value ===userDetails.password) {
            console.log("formSubmitted");
            setMsg("correct");
            globalsetIsLogin(true);
        } else if (cid.current.value !== "" && pwd.current.value !== "") {
            setMsg("incorrect");
        }

        cid.current.value = '';
        pwd.current.value = '';
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={onFormSubmit}>
                <div className="card p-4" style={{ width: '20rem' }}>
                    <h3 className="text-center mb-4">Login</h3>
                    <div className="form-group">
                        <p className="text-muted">Provide your details to login</p>
                        <label htmlFor="collegeId">College Id</label>
                        <input
                            type="text"
                            className="form-control"
                            id="collegeId"
                            ref={cid}
                            placeholder="College Id"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            ref={pwd}
                            placeholder="Password"
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-dark mt-3">Login</button>
                    </div>
                    <h1 className="text-center mt-3">{msg}</h1>
                </div>
            </form>
        </div>
    );
}
