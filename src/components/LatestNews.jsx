import React from "react";
import "../styles/LatestNews.css";

function LatestNews() {
  return (
    <div className="news-container">
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/R-1YNV3XcE0?autoplay=1&mute=1&loop=1&playlist=R-1YNV3XcE0&controls=0&modestbranding=1&showinfo=0"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <div className="news-content">
        <h2>A RECORD-BREAKING FORCE OF NATURE</h2>
        <h4>
          Setting a new benchmark at 453.91km/h.A triumph of
          passion,precision,and performance.
        </h4>
        <button type="button" className="record">
          WATCH THE RECORD
        </button>
      </div>
    </div>
  );
}

export default LatestNews;
