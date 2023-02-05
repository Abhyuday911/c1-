import React from 'react'
import HomeSlider from './HomeSlider'

const Home = () => {

    return (
        <div id="main">
            <div id='slide1' className="slide">
                <div id="maincontent">
                    <div id="title">
                        <div id="particles-js" className="particleDiv">
                            <div id="particleDivChild">
                                <h1>Welcome to Movie dets</h1>
                                <h5>One website for all your movie updates</h5>
                            </div>
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