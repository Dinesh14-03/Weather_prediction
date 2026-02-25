import './App.css';
import data from './response.json';
import { useState } from 'react';

function Login() {
    const [show , setshow] = useState(false);
    const weather = () => {
        const items = [];

        for (let key in data) {
            items.push(
                <h2 key={key}>
                    {data[key].city} : {data[key].temperature}
                </h2>
            );
        }
        return items;
    };

    return (
        <>
            <h1>Please check the weather status</h1>
            <button onClick={()=>setshow(true)}>Click here</button>
            {show && weather()}
        </>
    );
}

export default Login;