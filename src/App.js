import React from 'react'
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
import Home from "./Components/Home";
import "./Stylesheets/mycss.css"

const App = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/details/:id" element={<Details />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
