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
                    Top Rated
                </NavLink>
                <p>More</p>
            </div>
            <div id="nright">
                <h5>Github se kiya hai, update hote rahega deployment</h5>
                <a href="https://github.com/Abhyuday911/c1-.git" target={'_blank'} rel= {'noreferrer'}><i className="ri-external-link-fill"></i> https://github.com/Abhyuday911/c1-.git</a>
            </div>
        </div>
    )
}

export default Navbar