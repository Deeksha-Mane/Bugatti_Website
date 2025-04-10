import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="bugatti-navbar">
      <div className="navbar-left">
        <a href="#">LA MARQUE</a>
        <a href="#">HYPER SPORTS CARS</a>
        <a href="#">LIFESTYLE</a>
      </div>
      <div className="navbar-center">
        BUGATTI
      </div>
      <div className="navbar-right">
        <a href="#">NEWSROOM</a>
        <a href="#">STORE</a>
        <a href="#">EN</a>
        <a href="#">FR</a>
      </div>
    </nav>
  );
};

export default Navbar;
