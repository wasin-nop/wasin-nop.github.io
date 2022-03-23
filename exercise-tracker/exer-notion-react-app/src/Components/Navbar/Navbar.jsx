import React from "react";
import "./Navbar.css";

const Navbar = () => {
  //   const toggleButton = document.getElementsByClassName("toggle-button")[0];
  //   const navbarLinks = document.getElementsByClassName("navbar-links")[0];

  //   toggleButton.addEventListener("click", () => {
  //     navbarLinks.classList.toggle("active");
  //   });
  return (
    // <!-- Navbar -->
    <header className="header-nav">
      <nav className="container navbar">
        <div className="brand-title">
          <span className="color-green-yellow ">Exer</span>
          <span className="color-white">Notion</span>
        </div>
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#">Add Activity</a>
            </li>
            <li>
              <a href="./activity-history.html">Activity History</a>
            </li>
            <li>
              <a href="#">Subscribe</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
