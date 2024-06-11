import React from "react";
import ReactDOM from "react-dom/client";

function Event(){
    const newLogin =()=>{
        alert("Welcome to React page");
    }
    return(
        <button onClick={newLogin}>Click Here</button>
    );
}
export default Event;