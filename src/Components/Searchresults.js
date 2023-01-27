import React from 'react'
import { useParams } from 'react-router-dom'

const Searchresults = () => {

    const {dets} = useParams();
    return (
        <div id="main">
            <div id='slide1' className="slide">
                <div id="maincontent">
                    <h1>search result: {dets}</h1>
                    <hr />
                    <i className="ri-check-double-fill checkmark"></i>
                </div>
            </div>
            <div className="slide"></div>
        </div>
    )
}

export default Searchresults