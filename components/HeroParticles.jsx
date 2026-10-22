"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function HeroParticles({ isDark }) {
  const [ready, setReady] = useState(false);

  // The engine only needs to be set up once per page load
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(() => {
    const color = isDark ? "#a8ff78" : "#22c55e";
    return {
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 60, density: { enable: true } },
        color: { value: color },
        links: { enable: true, color, distance: 140, opacity: 0.15, width: 1 },
        move: { enable: true, speed: 0.6, outModes: { default: "out" } },
        opacity: { value: { min: 0.2, max: 0.5 } },
        size: { value: { min: 1, max: 2.5 } },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "grab" } },
        modes: { grab: { distance: 160, links: { opacity: 0.35 } } },
      },
      motion: { reduce: { factor: 4, value: true } },
    };
  }, [isDark]);

  if (!ready) return null;

  return (
    <Particles id="hero-particles" className="h-particles" options={options} />
  );
}
