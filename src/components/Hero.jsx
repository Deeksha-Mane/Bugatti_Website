import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/EX0AIOfKRBg?autoplay=1&mute=1&loop=1&playlist=EX0AIOfKRBg&controls=0&modestbranding=1&showinfo=0"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <div className="hero-content">
        {/* <h2>THIS IS FOR</h2>
        <h2>ETERNITY</h2> */}
        <h2>BUGATTI</h2>
        <br />
        <button type="button" className="discover">Discover the Bugatti Tourbillon</button>
      </div>
    </div>
  );
}

export default Hero;
