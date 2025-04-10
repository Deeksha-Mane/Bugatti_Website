import React from "react";
import "../styles/SurMesure.css";
import Handcrafted_Bugatti from "../assets/bugatti-logo-2.jpg";
import Car from "../assets/car-img3.jpg";
import Mistral from "../assets/mistral.jpg";

function SurMesure() {
    return(
        <div className="sur-mesure">
            <div className="image">
                <img src={Mistral} />
            </div>
            <div className="heritage">
                <h2>HERITAGE, CRAFTSMANSHIP AND INNOVATION</h2>
                <h5>At BUGATTI, we translate our customers' visions to create <br />unique pieces of personalised automotive art.</h5>
                <button type="button"><a href="https://www.bugatti.com/en/about/sur-mesure"></a>LEARN MORE ABOUT SUR MESURE</button>
            </div>
        </div>
    );
}

export default SurMesure;