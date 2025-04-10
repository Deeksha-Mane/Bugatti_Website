import React from "react";
import InfoCard from "./InfoCard";
import "../styles/InfoCard.css";
import "../styles/InfoSection.css";
import Car1 from "../assets/car-img1.jpg";
import Car2 from "../assets/car-img2.jpeg";
import Working from "../assets/working-at-bugatti.jpg";

function InfoSection() {
  return (
    <div className="info-section">
      <InfoCard
        image={Car1}
        title="IF COMPARABLE, IT IS NO LONGER BUGATTI"
        subtitle="DISCOVER BUGATTI"
        buttonText="LEARN MORE ABOUT BUGATTI"
        link="https://www.bugatti.com/en/about/discover-bugatti"
      />
      <InfoCard
        image={Car2}
        title="MILESTONES IN THE AUTOMOTIVE HISTORY"
        subtitle="HISTORIC MODELS"
        buttonText="LEARN MORE ABOUT OUR HISTORIC MODELS"
        link="https://www.bugatti.com/en/classic-icons/historic-models"
      />
      <InfoCard
        image={Working}
        title="WORKING AT BUGATTI"
        subtitle="CAREERS"
        buttonText="LEARN MORE ABOUT CAREERS AT BUGATTI"
        link="https://www.bugatti.com/en/about/careers"
      />
    </div>
  );
}

export default InfoSection;