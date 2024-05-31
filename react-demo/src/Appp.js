import React from "react";
import ReactDOM from  "react-dom/client";


function Appp(){
    const cities=["Bangalore","Mumbai","Mangalore"];

    return(
        <div>
            <h1>Lists of Cities</h1>
            {cities.map((city,index)=>(
                <p key={index}>This is a {city}</p>
            ))}
        </div>
    );
}
export default Appp;
