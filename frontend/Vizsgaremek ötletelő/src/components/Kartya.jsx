import {useState}from 'react';
export default function Kartya({ cim, leiras, kep}) {
    const [counter, setCounter]=useState(0)
    return(
        <div className={counter==0? "card":"card like"}>
            <h1>{cim}</h1>
            <img src={kep} alt="egyes" />
            <p>{leiras}</p>
        </div>
    )
}