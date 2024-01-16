
"use client";
import React from "react";
import ReactPlayer from "react-player";

const FooterVideo = () => {
    //video path
    let videosrc = "/public/altcoinvoyagegooter.mp4";

    return (
        <div>
            <h1>my custome player</h1>
            <ReactPlayer
                width="500px"
                height="400px"
                url={ videosrc }
                controls={ true }
                // light is usefull incase of dark mode
                light={ false }
                // picture in picture
                pip={ true }
            />
            <source src={ videosrc } type="video/mp4" />
        </div>
    );
};

export default FooterVideo;