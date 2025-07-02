import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBg = () => {
  const particlesInit = async (main) => {
    await loadFull(main); // Load all tsparticles features
  };

  return (
    <Particles
      id="starry-sky"
      init={particlesInit}
      options={{
        background: {
           color: { value: "linear-gradient(to right, #cc2b5e, #753a88)" }, // Dark night sky
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 150, // Total number of stars
            density: {
              enable: true,
              area: 800, // Spread across the canvas
            },
          },
          color: { value: "#ffffff" }, // Star color
          shape: {
            type: "circle", // Using circle for star points
          },
          opacity: {
            value: 1,
            random: true, // Random opacity for twinkling effect
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.3,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 }, // Random star sizes
          },
          move: {
            enable: true,
            speed: 0.2, // Slow drifting stars
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Stars move away on hover
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBg;
