import React from 'react'
import { NavLink } from "react-router-dom";
import logo from "../assets/brandlogo.png";
import search from '../assets/search_Icon.png'
// import '../Scripts/script'

const Navbar = () => {

    const focushandler = (e) => {
        console.log(e);
        document.querySelector(".movieinput").style.backgroundImage = "none";
        document.querySelector(".movieinput").style.paddingLeft = "16px";
    }

    const blurhandler = (e) => {
        console.log(e,'bh');

        document.querySelector(".movieinput").style.backgroundImage =` url(${search})`;
        document.querySelector(".movieinput").style.paddingLeft = "13%";
    }

    return (
        <div id="nav">
            <div id="nleft">
                <img className='navlogo' src={logo} alt="fedf" />
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
                {/* <h5>Github se kiya hai, update hote rahega deployment</h5> */}
                {/* <a href="https://github.com/Abhyuday911/c1-.git" target={'_blank'} rel= {'noreferrer'}><i className="ri-external-link-fill"></i> https://github.com/Abhyuday911/c1-.git</a> */}
                <form action="/getdets" method="get" id='#ncenter'>
                    <input onFocus={focushandler} onBlur={blurhandler} name="usernameTag" className='movieinput' type="text" id="ncenter" placeholder="Search" required autoComplete="off" />
                </form>
            </div>
        </div>
    )
}

export default Navbar