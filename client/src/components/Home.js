import React from 'react';
import image1 from "../images/homepage_banner.png"

const Home = () => {
    return (
        <>
        <div className="home_background">
            <div className="homepage_container">
               <img src={image1} alt="Homepage banner" />
            </div>
        </div>
        </>
    )
}

export default Home;
