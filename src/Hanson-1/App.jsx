import React, { useState } from "react";

export function App(){
    const[isShown, setHidden] = useState(false);
    return(
        <>
    <button onClick={() => setHidden(s => !s)} className="btn1">To see styling in functional component</button>
    {
        isShown ?
        <div className="box1">
        <h2>This is created using functional component</h2>
        <p className="text">this is done using external css</p>
        <p style={{color:"blue"}}>This is done using inline CSS</p>
        </div>:null
    }</>
    )
      

}
