//example for useRef
import React from "react";
import {useState} from "react";
import {useRef} from "react";
const App=()=>{
    const[name,setName]=useState("");
    const count=useRef(0)
    count.current++;

    console.log(count);
    return(
        <div>
            <input type="text" onChange={(e)=>setName(E.TARGET.VALUE)}/>
            <h2> Name:{name}</h2>
            <h2>Renders:{count.current}</h2>
        </div>
    );
};
export default App;