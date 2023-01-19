import React from 'react'
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
import Home from "./Components/Home";
import Popularmovies from './Components/Popularmovies';
// import Tester from './Components/Tester';
import "./Stylesheets/mycss.css"

const App = () => {

    useEffect(() => {
        console.log("majak nahi urane ka 😒");
    }, [])
    

    return (
        <div>

            <Routes>
                <Route path="/" element={<Home />}>
                <Route path="/popular" element={<Popularmovies />}>
                    <Route path="/popular/details/:id" element={<Details />} />
                </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
