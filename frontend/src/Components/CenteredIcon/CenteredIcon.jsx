import React, { useState, useEffect } from "react";
import "./CenteredIcon.css"; // Import your CSS file

function CenteredIcon({ onDataLoaded }) {
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowIcon(false);
      onDataLoaded(); // Call the parent component's callback to trigger data loading
    }, 1000); // Hide the icon after 3 seconds
  }, [onDataLoaded]);

  return (
    <div className={`center-icon ${showIcon ? "visible" : "hidden"}`}>
      <img src={require("../../Static/Images/logo.png")} alt="Centered Icon" />
    </div>
  );
}

export default CenteredIcon;
