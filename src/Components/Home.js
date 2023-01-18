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
                <div className="slide">
                    <div id="nav">
                        <div id="nleft">
                            <p>Movies</p>
                            <p>TV Shows</p>
                            <p>People</p>
                            <p>More</p>
                        </div>
                        <div id="nright">Kuch hai</div>
                    </div>
                </div>
            </div>
            {MovieList}
            <hr />
            <Outlet />

        </>
    )
}

export default Home