import React from "react";
import InfoCard from "./InfoCard";
import "../styles/InfoCard.css";
import "../styles/CarSection.css";
import Tourbillon from "../assets/tourbillon.jpg";
import Mistral from "../assets/mistral.jpg";
import Bolide from "../assets/bolide.jpg";
import Chiron from "../assets/chiron.jpg";
import Divo from "../assets/divo.jpg";
import Centodieci from "../assets/centodieci.jpg";

function CarSection() {
    return(
        <div className="car-section">
            <InfoCard
            image={Tourbillon}
            title="Tourbillon"
            subtitle="TIMELESS ELEGANCE AND SPEED"
            buttonText="LEARN MORE"
            link="https://www.bugatti.com/en/models/tourbillon"
            />

            <InfoCard
            image={Mistral}
            title="Mistral"
            subtitle="THE ULTIMATE ROADSTER"
            buttonText="LEARN MORE"
            link="https://www.bugatti.com/en/models/w16-mistral"
            />

            <InfoCard
            image={Bolide}
            title="Bolide"
            subtitle="LA PUR SANG DES AUTOMOBILES"
            buttonText="LEARN MORE"
            link="https://www.bugatti.com/en/models/bolide"
            />

            <InfoCard
            image={Chiron}
            title="Chiron"
            subtitle="FACETS OF PERFORMANCE"
            buttonText="LEARN MORE"
            link="https://www.bugatti.com/en/models/chiron"
            />

            <InfoCard
            image={Divo}
            title="Divo"
            subtitle="MODERN COACHBUILDING AT ITS BEST"
            buttonText="LEARN MORE"
            link="https://www.bugatti.com/en/models/divo"
            />

            <InfoCard
            image={Centodieci}
            title="Centodieci"
            subtitle="REMINISCENCE OF AN ICON"
            buttonText="LEARN MORE"
            link="https://www.bugatti.com/en/models/centodieci"
            />      
        </div>
    );
}

export default CarSection;