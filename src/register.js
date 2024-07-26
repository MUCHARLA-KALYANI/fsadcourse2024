import React, { useContext, useState } from "react";
import { globalContext } from "./App";

export default function Register() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [branch, setBranch] = useState('');
    const [yearValue, setYear] = useState('');
    const [gender, setGender] = useState('');
    const [user, setUser] = useState(null);
    const { userDetails, setUserDetails } = useContext(globalContext);
    
    const getId = (e) => setId(e.target.value);
    const getPassword=(e)=>setPassword(e.target.value);
    const getEmail = (e) => setEmail(e.target.value);
    const getBranch = (e) => setBranch(e.target.value);
    const getGender = (e) => setGender(e.target.value);
    const getYear = (e) => setYear(e.target.value);

    const submitData = (e) => {
        e.preventDefault();
        const obj = { id,password, email, branch, yearValue, gender };
        setUser(obj);
        setUserDetails(obj);
        console.log(obj);
        console.log(user);
        console.log(userDetails);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={submitData}>
                <div className="card p-4" style={{ width: '20rem' }}>
                    <h3 className="text-center mb-4">Register</h3>
                    <div className="form-group">
                        <p className="text-muted">Provide your details to register</p>
                        <label htmlFor="collegeId">College Id</label>
                        <input
                            type="text"
                            className="form-control"
                            id="collegeId"
                            placeholder="College Id"
                            onChange={getId}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            onChange={getPassword}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Your email"
                            onChange={getEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="branch">Branch</label>
                        <select className="form-control" id="branch" onChange={getBranch}>
                            <option value="IT">Information Technology</option>
                            <option value="CSE">CSE</option>
                            <option value="ECE">ECE</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Year</label>
                        <select className="form-control" id="year" onChange={getYear}>
                            <option value="I">I</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <div onChange={getGender}>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="genderOptions" id="male" value="male" />
                                <label className="form-check-label" htmlFor="male">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="genderOptions" id="female" value="female" />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="genderOptions" id="other" value="other" />
                                <label className="form-check-label" htmlFor="other">Other</label>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-dark mt-3">Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
