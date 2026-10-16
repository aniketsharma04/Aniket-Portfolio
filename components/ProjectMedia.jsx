"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import ProjectVisual from "@/components/ProjectVisual";

// Fills a project card's thumbnail: video (muted loop while on screen) → image → designed visual → fallback
export default function ProjectMedia({ project: p }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Respect reduced-motion: leave the poster frame up
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.25 });
    observer.observe(video);
    return () => observer.disconnect();
  }, [p.video]);

  const background = { background: `linear-gradient(135deg, ${p.bgFrom}, ${p.bgTo})` };

  return (
    <div className="proj-img" style={background}>
      {p.video ? (
        <video
          ref={videoRef}
          className="proj-media"
          src={p.video}
          poster={p.image}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${p.name} demo`}
        />
      ) : p.image ? (
        <Image
          className="proj-media"
          src={p.image}
          alt={`${p.name} screenshot`}
          fill
          sizes="(max-width: 860px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      ) : p.visual ? (
        <ProjectVisual visual={p.visual} />
      ) : (
        <div className="proj-fallback">
          <span className="proj-fallback-icon">{p.emoji}</span>
          <span className="proj-fallback-lbl">Preview coming soon</span>
        </div>
      )}
    </div>
  );
}
