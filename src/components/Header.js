import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logoImage from "../assets/my-logo.jpg";
import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div>
      <div className={`brand-logo ${isNavExpanded ? "hidden" : ""}`}>
        <a href="/">
          <img
            src={logoImage}
            alt="Logo"
            style={{ width: "72px", height: "48px" }}
          />
        </a>
      </div>
      <button
        className={`hamburger ${isNavExpanded ? "hidden" : "right"}`}
        onClick={toggleNav}
      >
        ☰
      </button>
      <nav className={`navigation ${isNavExpanded ? "expanded" : ""}`}>
        <div className="menu-container">
          <button
            className={`close-button ${isNavExpanded ? "hidden" : "right"}`}
            onClick={toggleNav}
          >
            ✕
          </button>
        </div>
      </nav>
      <div className={`navigation-menu ${isNavExpanded ? "expanded" : ""}`}>
        {/* ... rest of your code */}
        <a href="/">
          <img
            src={logoImage}
            alt="Logo"
            style={{ width: "72px", height: "48px" }}
            className="logo-image"
          />
        </a>
        <h3 className="name">Rahul Kumar Paswan</h3>
        <ul className="main-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a
              href="https://github.com/Rahul-Kumar-Paswan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="GitHub" className="social-logo" />
            </a>
            <a
              href="https://linkedin.com/in/rahul-kumar-paswan-b1b57b227"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
