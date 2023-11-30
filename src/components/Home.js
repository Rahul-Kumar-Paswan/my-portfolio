import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  const linkStyle = {
    textDecoration: 'none', // Remove underline
  };

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh', // Center vertically on the page
  };

  return (
    <div style={centerStyle}>
      <h2>HEY, I’M RAHUL KUMAR PASWAN</h2>
      <p>I am a software engineer with a passion for building products that are both user-friendly and aesthetically pleasing.</p>
      <p>I am also passionate about writing and design, and I am always looking for new ways to combine my skills to create something truly unique.</p>
      <p>Please feel free to explore my website and learn more about me.</p>
      <div className="links">
        <Link to="/projects" style={linkStyle} className="link">See My Projects</Link>
        <Link to="/about" style={linkStyle} className="link">More About Me</Link>
      </div>
    </div>
  );
}

export default Home;
