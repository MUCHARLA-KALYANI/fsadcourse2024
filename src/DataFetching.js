import { useEffect, useState } from "react";
import axios from 'axios';
import Navigation from "./Navigation";

export default function DataFetching() {

    const [data, setdata] = useState([]);
    useEffect(() => {
        const fetchMyData = async () => {
            const res = await axios.get('https://fakestoreapi.com/users');
            console.log(res);
           const resdata = await res.data;
            setdata(resdata);
             console.log(resdata);
        }
        fetchMyData();
    }, []);

    return (
        <div>
            <Navigation/>
            <table className="table table-sm table-dark">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">email</th>
                        <th scope="col">username</th> 
                        <th scope="col">firstname</th> 
                        <th scope="col">lastname</th> 
                        <th scope="col">phone number</th> 
                        <th scope="col">address</th>                     
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, index) =>
                        <tr key={index}>
                            <td>{d.id}</td>
                            <td>{d.email}</td>
                            <td>{d.username}</td>
                            <td>{d.name.firstname}</td>
                            <td>{d.name.lastname}</td>
                            <td>{d.phone}</td>
                            <td>{d.address.city}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    );
}