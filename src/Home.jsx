import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react"; // Correct import from Builder.io Motion
import AnimatedStars from "./components/AnimatedStars.jsx"; // Assuming you have this component
import './App.css';
import './index.css';

function Home() {
    // State for tilt data
    // const [tiltData, setTiltData] = useState({ beta: 0, gamma: 0 });

    // // Handle device orientation changes
    // useEffect(() => {
    //     const handleOrientation = (event) => {
    //         const { beta, gamma } = event; // beta (x-axis), gamma (y-axis)
    //         setTiltData({ beta, gamma });
    //     };

    //     // Listen for device orientation changes
    //     window.addEventListener('deviceorientation', handleOrientation);

    //     // Cleanup the event listener on component unmount
    //     return () => {
    //         window.removeEventListener('deviceorientation', handleOrientation);
    //     };
    // }, []);

    // Apply the tilt data to transform properties
    // const tiltEffect = {
    //     transform: `rotateX(${tiltData.beta}deg) rotateY(${tiltData.gamma}deg)`,
    //     transition: 'transform 0.1s ease-out',
    // };

    return (
      <div className="you-are-magic-container">
  <div className="centered-content">
    <div className="you-line">
      <Link to="/you" className="you-link glow-you">YOU</Link>
    </div>
    <div className="you-line">
      <span className="you-text">ARE</span>
    </div>
    <div className="you-line">
      <span className="you-text magic">MAGIC</span>
    </div>
  </div>

  <AnimatedStars />
</div>

    );
}

export default Home;
