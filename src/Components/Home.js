import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
// import Popularmovies from "./Popularmovies";


const Home = () => {

    return (
        <>
            <div id="main">
                <div id='slide1' className="slide">
                    <Navbar />
                    <div id="maincontent">
                        <Outlet />
                        <h1 id='merah1'><small> Ye mera home page hai iska koi majak nahi urayega,</small><br /> app nav bar se kam ke mal pe abhi jaye</h1>
                    </div>
                </div>
                <div className="slide"></div>
            </div>
        </>
    )
}

export default Home