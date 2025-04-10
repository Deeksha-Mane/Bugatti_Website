import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>LA MARQUE</h4>
          <ul>
            <li>Discover BUGATTI</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Classic Icons</li>
            <li>Historic Models</li>
            <li>Racing Legends</li>
            <li>Les Patrons</li>
            <li>La Maison Pur Sang</li>
            <li>Dealer Finder</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>HYPER SPORTS CARS</h4>
          <ul>
            <li>TOURBILLON</li>
            <li>W16 MISTRAL</li>
            <li>BOLIDE</li>
            <li>CHIRON</li>
            <li>LA VOITURE NOIRE</li>
            <li>DIVO</li>
            <li>CENTODIECI</li>
            <li>Sur Mesure</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>CUSTOMER SERVICE</h4>
          <ul>
            <li>Individual Service and Contact</li>
            <li>Maintenance</li>
            <li>Service Partner Network</li>
            <li>Passeport Tranquillité</li>
            <li>Warranty</li>
            <li>Roadside Assistance</li>
            <li>Genuine Parts</li>
            <li>BUGATTI Accessories</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>LIFESTYLE</h4>
          <ul>
            <li>Art of Living</li>
            <li>Apparel & Accessories</li>
            <li>Watches & Jewellery</li>
            <li>Collectibles & Model Cars</li>
            <li>Store</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 BUGATTI AUTOMOBILES S.A.S.</p>
        <div className="footer-links">
          <a href="#">Legal Notice</a>&nbsp;&nbsp;
          <a href="#">Privacy Policy</a>&nbsp;&nbsp;
          <a href="#">Cookie Policy</a>&nbsp;&nbsp;
          <a href="#">Privacy Settings</a>&nbsp;&nbsp;
          <a href="#">Compliance & Whistleblower</a>&nbsp;&nbsp;
          <a href="#">Fuel Consumption</a>&nbsp;&nbsp;
          <a href="#">Modern Slavery Statement</a>&nbsp;&nbsp;
          <a href="#">Gender Equality Index</a>&nbsp;&nbsp;
        </div><br />
        <div className="footer-language">
          <span>LANGUAGE: </span>
          <a href="#">English</a> | <a href="#">Français</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;