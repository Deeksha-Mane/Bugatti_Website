import React from "react";
import "../styles/InfoCard.css";

function InfoCard({ image, title, subtitle, buttonText, link }) {
  return (
    <div className="info-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="info-overlay">
        <h5>{subtitle}</h5>
        <h2>{title}</h2>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button>{buttonText}</button>
        </a>
      </div>
    </div>
  );
}
 
export default InfoCard;