import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./styles.css";

function AnimatedStars() {
    
    const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);
  
  
  
  
  
  
  
  
  
  
    return (
    <Particles
      id="tsparticles"
      init={particlesInit} 
    
    options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        particles: {
          number: {
            value: 150,
            limit: 150,
            density: {
              enable: true,
              value_area: 500,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "star",
            stroke: {
              width: 0.3,
              color: "#000000",
            },
            polygon: {
              nb_sides: 4.37,
            },
            image: {
              src: "images/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
              sync: true,
            },
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 1,
            width: 3,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "bottom",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10,
              },
            },
            onClick: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 100,
              lineLinked: {
                opacity: 3,
              },
            },
            bubble: {
              distance: 400,
              size: 100,
              duration: 1,
              opacity: 1,
              speed: 1,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        backgroundMask: {
          enable: false,
          
        },
        retina_detect: true,
        fps_limit: 60,
        
      }}
    />
  );
}

export default AnimatedStars;