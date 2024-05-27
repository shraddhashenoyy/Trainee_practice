// UseState

// import React from "react";
// import { useState } from "react";


// function App(){
//     const[age,setAge]=useState("28");

// return(
//     <div>
//         <h1>My favorite color is {age}!</h1>
//         <button type="button"
//         onClick={() => setAge("26")}>26</button>
//         <button type="button"
//         onClick={() => setAge("29")}>29</button>
//         <button type="button"
//         onClick={() => setAge("25")}>25</button>
//         <button type="button"
//         onClick={() => setAge("30")}>30</button>
//     </div>
//     );
// }
// export default App;

// useEffect()

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function App1(){
    const[count,setCount]=useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1);
        },10);
    });

    return <h1>Rendered{count} times</h1>
}
export default App1;