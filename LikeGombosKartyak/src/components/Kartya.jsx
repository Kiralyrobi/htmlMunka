import {useState}from 'react';
export default function Kartya({emoji, cim, leiras}) {
    const [counter, setCounter]=useState(0)
    return(
        <div className={counter==0? "card":"card like"}>
            <h1>{emoji} {cim}</h1>
            <p>{leiras}</p>
            <div className="likes">
                <button onClick={()=>setCounter(counter+1)}>{counter==0?"🤍":"❤️"}</button>{counter}
            </div>
            <small>{counter==0&& "Ez a kártya nem kapott még likeot"}
            </small>
        </div>
    )
}