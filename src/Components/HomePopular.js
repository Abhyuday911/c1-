
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';

register();

const HomePopular = () => {

    const [PopularHomePopularMovies, setPopularHomePopularMovies] = useState([]);
    const getPopularHomePopularMovies = async () => {
        try {
            const { data } = await axios.get(
                "https://api.themoviedb.org/3/movie/popular?api_key=5916c3f8aebf48725786f494decb0db8"
            );
            setPopularHomePopularMovies(data.results);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getPopularHomePopularMovies();
    }, []);

    return (
        <>
            <h1 id='swipertitle'>Popular Movies</h1>
            {PopularHomePopularMovies.length ? <swiper-container grab-cursor={true} navigation="true" thumbs-swiper=".my-thumbs" slides-per-view="5" space-between='20'>{PopularHomePopularMovies.map((m, idx) => {
                return (<swiper-slide key={m.id} lazy="true"><div id="imgoverlay"></div><img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                    alt={m.poster_path} /></swiper-slide>)
            })}</swiper-container> : <div id="holder"></div>}
        </>
    )
}

export default HomePopular