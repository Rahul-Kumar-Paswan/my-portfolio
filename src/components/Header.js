import { useState } from "react";
import "../styles/navbar.css";
import logoImage from "../assets/my-logo.jpg"; // Import the logo image

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <div className={`brand-logo ${isNavExpanded ? "hidden" : ""}`}>
        <a href="/">
          <img
            src={logoImage}
            alt="Logo"
            style={{ width: "72px", height: "48px" }}
          />
        </a>
      </div>
      <div className="menu-container">
        <button
          className={`hamburger ${isNavExpanded ? "hidden" : ""}`}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          ☰
        </button>
        <div
          className={`navigation-menu ${isNavExpanded ? "expanded" : ""}`}
          onClick={() => {
            setIsNavExpanded(false);
          }}
        >
          <a href="/">
            <img
              src={logoImage}
              alt="Logo"
              style={{ width: "72px", height: "48px" }}
              className="logo-image"
            />
          </a>
          <h3 className="name">Rahul Kumar Paswan</h3>
          <ul class="main-links">
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
          </ul>
          <ul class="social-links">
            <li>
              <a href="https://github.com/yourgithubusername" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yourlinkedinusername"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
