import React, { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from "tsparticles"
import HomeSlider from './HomeSlider'
import shitt from '../assets/particles.json'

const Home = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div id="main">
            <div id='slide1' className="slide">
                <div id="maincontent">
                    <div id="title">
                        <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={shitt} height={240} />
                        <div id="particleDivChild">
                            <h1>Welcome to Movie dets</h1>
                            <h5>One website for all your movie updates</h5>
                        </div>
                    </div>
                    <HomeSlider />
                </div>
            </div>
            {/* <div className="slide"></div> */}
        </div>
    )
}

export default Home