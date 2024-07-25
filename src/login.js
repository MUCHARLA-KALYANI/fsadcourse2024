import { useEffect, useRef, useState } from "react";
import './login.css';
export default function Login() {
    const cid = useRef(null);
    const pwd = useRef(null);
    const [msg, setmsg] = useState('');


    useEffect(() => {
        cid.current.focus();
    });

    const onformsubmit = (e) => {
        e.preventDefault();

        if (cid.current.value === "kal" && pwd.current.value === "kal") {
            console.log("formSubmitted");
            console.log(cid.current.value);
            console.log(pwd.current.value);
            console.log("correct");
            setmsg("correct");
        } else if(cid.current.value !== "" && pwd.current.value !== "") {
            setmsg("incorrect");
        }
        cid.current.value = '';
        pwd.current.value = '';

    }


    return (
        <div>
            <form>
                <div className="card" style={{ border: '1px solid #808080', marginleft: '10px', width: 'fit-content' }}>
                    <h3>Login</h3>
                    <div>
                        <p style={{color:'grey'}}>provide your details to login</p>
                        <p>College Id</p>
                        <input type="text" ref={cid} placeholder="College Id"/>
                        <p>Password</p>
                        <input type="password" ref={pwd} placeholder="Password" />
                    </div>
                    <div>
                        <p></p>
                        <button type="submit" class="btn btn-dark  " onClick={onformsubmit}>Login</button>
                    </div>
                </div>
            </form>
            <h1>{msg}</h1>
        </div>
    )
}