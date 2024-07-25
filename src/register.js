import { useEffect, useRef, useState } from "react";
import './login.css';
export default function Register() {
    // const cid = useRef(null);
    // const pwd = useRef(null);
    // const nid = useRef(null);
    const[id,setId]=useState('');
    const[email,setEmail]=useState('');
    const[branch,setBranch] = useState('');
    const[yearValue,setYear] = useState('');
    const [gender,setGender]=useState('');
    const[user,setuser]=useState();

    const getId =(e)=>{
        setId(e.target.value);
        
    }
    const getemail = (e) =>{
        setEmail(e.target.value);

    }
    const getbranch=(e)=>{
        setBranch(e.target.value);
    }
    const getGender=(e)=>{
        setGender(e.target.value);
    }
    const getyear=(e)=>{
        setYear(e.target.value);
    }

    const onFormSubmit=(e)=>{
        e.preventDefault();
        console.log(id);
        console.log(email);
        console.log(branch);
        console.log(yearValue);
        console.log(gender);
        
    }

    const submitData=(e)=>{
        e.preventDefault();
        const obj={
            id,email,branch,yearValue,gender
        }
        setuser(obj);
        console.log(user);
    }
    return (
        <div>
            <form>
                <div className="card" style={{ border: '1px solid #808080', marginleft: '10px', width: 'fit-content' }}>
                    <h3>Register</h3>
                    <div>
                        <p style={{ color: 'grey' }}>provide your details to register</p>
                        <p>College Id</p>
                        <input type="text"  placeholder="College Id" onChange={getId} />
                        <p>Password</p>
                        <input type="password" placeholder="Password" />
                        <p>Email Address</p>
                        <input type="text"  placeholder=" your email" onChange={getemail} />
                        <p>Branch</p>
                        <select class="form-control" onChange={getbranch}>
                            <option value="IT">Information Technology</option>
                            <option value="CSE">CSE</option>
                            <option value="ECE">ECE</option>
                        </select>
                        <p>Year</p>
                        <select class="form-control"  onChange={getyear}>
                            <option value="I">I</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                        </select>
                        <p>Gender</p>
                        <div onChange={getGender}>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male" onChange={getGender}/>
                                <label class="form-check-label" for="inlineRadio1" >male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female" onChange={getGender}/>
                                <label class="form-check-label" for="inlineRadio2">female</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="other" onChange={getGender}/>
                                <label class="form-check-label" for="inlineRadio3">other</label>
                        </div>
                        </div>
                    </div>
                    <div>
                        <p></p>
                        <button type="submit" className="btn btn-dark" onClick={submitData} >Register</button>
                    </div>
                </div>
            </form>
            
        </div>
    )
}