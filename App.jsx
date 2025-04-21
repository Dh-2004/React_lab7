
  import React, { useState } from "react";
  import "./index.css";
  import sampleimage from "./vincent.jpg"; // Import the image
  
  const ProfileCard = ({ name, bio, initialBgColor }) => {
  const [bgColor, setBgColor] = useState(initialBgColor);
  const [hovered, setHovered] = useState(false);
  
  const handleMouseEnter = () => {
  setHovered(true);
  setBgColor("linear-gradient(135deg, #FFD700, #FFA07A)");
  };
  
  const handleMouseLeave = () => {
  setHovered(false);
  setBgColor(initialBgColor);
  };
  
  return (
  <div
  className={`profile-card ${hovered ? "hovered" : ""}`}
  style={{ background: bgColor, color: hovered ? "#000000" : "#000000" }}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  >
  <img src={sampleimage} alt={name} className="profile-pic" />
  <h2 className="profile-name">{name}</h2>
  <p className="profile-bio">{bio}</p>
  </div>
  );
  };
  
  const App=()=>{
    return (
      <div className="app-container">
        <ProfileCard
        name="Vincent Van Gogh"
        bio="Artist- Creater - Visionary 
        Vincent Willem van Gogh was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. 
        In just over a decade, he created approximately 2,100 artworks, including around 860 oil paintings, most of them in the last two years of his life"
        initialBgColor="linear-gradient(135deg,#ADD8E6,rgb(146,23,23))"/>
      </div>
    );
  };
  export default App;
