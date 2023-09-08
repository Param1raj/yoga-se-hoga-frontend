import React from "react";
import Particle from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "./particleConfig";
import { Engine } from "tsparticles-engine";
import Style from "./particle.module.css";

function ParticleComp() {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };
  return (
    <Particle
      className={Style.main}
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 300,
            },
          },
          color: {
            value: "#1bebff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#fff",
            },
            polygon: {
              nb_sides: 2,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 0.01,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 130,
            color: "#fff",
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 4,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        smooth: true,
        retina_detect: true,
        fullScreen: false,
      }}
    ></Particle>
  );
}

export default ParticleComp;
