import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const Searchresults = () => {

    const [apiData, setapiData] = useState(null)
    const { dets } = useParams();
    useEffect(() => {
        (async function () {
            try {
                const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5916c3f8aebf48725786f494decb0db8&query=${dets}&page=1`)
                setapiData(data)
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        })();

    }, [dets])

    let values = "loading......"

    if (apiData) {
        values = apiData.results.map((params) => {
            return (
                <li key={params.id}>
                    <div className="results-imgcontainer">
                        <div className="ul-results-imgoverlay"></div>
                        <img src={`https://image.tmdb.org/t/p/w500${params.poster_path}`} alt="Censored" />
                    </div>
                    <div className="results-li-card"></div>
                </li>
            )
        })
    }


    return (
        <div id="main">
            <div id='slide1' className="slide">
                <div id="maincontent">
                    <h1 className='search-h1'>Top search results:</h1>
                    <ul className='ul-results'>
                        {values}
                    </ul>
                </div>
            </div>
            {/* <div className="slide"></div> */}
        </div>
    )
}

export default Searchresults