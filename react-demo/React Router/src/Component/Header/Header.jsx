import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Header(){
    return(
        <>
           <nav>
             <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
             </ul>
            </nav>
       </>
    )
}

export default Header;