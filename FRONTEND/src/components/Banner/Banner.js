import React from 'react';
import bgImage from "../../video/video.mp4";
import { useNavigate } from 'react-router-dom';
import "./Banner.css"
import Habout from '../Habout/Habout';

function Banner() {
    const navigate = useNavigate();

    return (
        <>
            <div className="main-banner" id="home" style={{ marginBottom: "100px" }}>
                <video autoPlay muted loop id="bg-video">
                    <source src={bgImage} type="video/mp4" />
                </video>

                <div className="video-overlay header-text">
                    <div className="caption">
                        <h6><em style={{ color: "#ed563b" }}>Welcome</em> , I Coder </h6>
                        <h2>Code By <em> I Coder </em></h2>
                        <div className="main-button" onClick={() => navigate('/contact')}>
                            <a href="">Meet Our Experts</a>
                        </div>
                    </div>
                </div>
            </div>
            <Habout />
        </>
    );
}

export default Banner;
