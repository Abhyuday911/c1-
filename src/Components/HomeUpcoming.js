import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/element/css/navigation'
import "swiper/element/css/thumbs"



register();

const HomeUpcoming = () => {

    const [UpcomingMovies, setUpcomingMovies] = useState([]);
    const getUpcomingMovies = async () => {
        try {
            const { data } = await axios.get(
                "https://api.themoviedb.org/3/movie/upcoming?api_key=5916c3f8aebf48725786f494decb0db8&language=en-US&page=1"
            );
            setUpcomingMovies(data.results);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);

    return (
        <>
            <h1 id='swipertitle'>Upcoming Movies</h1>
            {UpcomingMovies.length ? <swiper-container grab-cursor={true} navigation="true" thumbs-swiper=".my-thumbs" slides-per-view="5" space-between='20' >{UpcomingMovies.map((m, idx) => {
                return (<swiper-slide key={m.id} lazy="true"><div class="imgoverlay"></div><img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                    alt={m.poster_path} /></swiper-slide>)
            })}</swiper-container> : <div id="holder"></div>}
        </>
    )
}

export default HomeUpcoming