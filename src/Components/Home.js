import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

const Home = () => {

    const [Movies, setMovies] = useState([]);
    const getPopularMovies = async () => {
        try {
            const { data } = await axios.get(
                "https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1"
            );
            setMovies(data.results);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getPopularMovies();
    }, []);

    let MovieList = "Loading...";
    if (Movies.length > 0) {
        MovieList = Movies.map((m) => (
            <li key={m.id}>
                <Link to={`/details/${m.id}`}>{m.original_title}</Link>
            </li>
        ));
    }
    return (
        <>
            <div id="main">
                <div id='slide1' className="slide">
                    {/* <div id="nav">
                        <div id="nleft">
                            <p>Movies</p>
                            <p>TV Shows</p>
                            <p>People</p>
                            <p>More</p>

                        </div>
                        <div id="nright"><h4>plain wala mal niche hai</h4></div>
                    </div> */}
                    <div id="maincontent">
                        <h1>Popular movies</h1>
                        <div className="d-flex simple">
                            <div id="simpleL"><ul>{MovieList}</ul></div>
                            <Outlet />
                        </div>
                    </div>
                </div>
                <div className="slide"></div>
            </div>
        </>
    )
}

export default Home