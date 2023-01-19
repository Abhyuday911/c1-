import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div id="nav">
            <div id="nleft">
                <NavLink
                    className={({ isActive }) => (isActive ? "activeNavLink" : "")}
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "activeNavLink" : "")}
                    to="/popular"
                >
                    Popular
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "activeNavLink" : "")}
                    to="/latest"
                >
                    Latest 
                </NavLink>
                <p>More</p>
            </div>
            <div id="nright"><h5>Github se kiya hai to update hote rahega</h5></div>
        </div>
    )
}

export default Navbar