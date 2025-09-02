import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function HeroParticles() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // tsParticles engine yükleme
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));

    // Mobil kontrolü
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!init) return null;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Gradient arka plan */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#212121] to-[#ffffff] z-0" />

      {/* Particle canvas */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-10"
        style={{ background: "transparent" }} // canvas tamamen şeffaf
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: isMobile ? 20 : 140 },
            color: { value: "#c9c1b8" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
            move: { enable: true, speed: 1 },
            links: { enable: true, distance: 150, opacity: 0.4, width: 1 },
          },
          interactivity: {
            events: {
              onHover: { enable: !isMobile, mode: "bubble" },
              onClick: { enable: !isMobile, mode: "push" },
            },
            modes: {
              bubble: { distance: 200, size: 10, duration: 0.3, opacity: 0.8 },
              repulse: { distance: 150, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Başlık */}
      <div className="relative z-20 flex items-center h-full">
        <h1 className="inter-bold text-[8vw] text-[#c9c1b8] ml-[10vw]">Hi!</h1>
      </div>

      {/* Alt fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-30" />
    </section>
  );
}
