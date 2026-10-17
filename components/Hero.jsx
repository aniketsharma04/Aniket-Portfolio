"use client";
import Image from "next/image";
import { personal } from "@/data";
import ResumeButtons from "@/components/ResumeButtons";
import { BlurText, Reveal } from "@/components/ui/reveal";

export default function Hero({ view }) {
  return (
    <section id="home">
      {/* Soft glow and a faded grid behind the hero */}
      <div className="h-bg" aria-hidden="true">
        <div className="h-glow" />
        <div className="h-grid" />
      </div>

      <div className="h-wrap">
        <div className="h-left">
          <Reveal y={10} className="h-avail">
            <span className="h-dot" />
            {view.availability}
          </Reveal>

          <BlurText
            as="h1"
            className="h-h1"
            text={view.tagline}
            delay={0.1}
            stagger={0.035}
          />

          <Reveal delay={0.55} y={12}>
            <p className="h-desc">{view.description}</p>
          </Reveal>

          <Reveal delay={0.7} y={12} className="h-btns">
            <a href="#projects" className="btn-f">
              See my work →
            </a>
            <ResumeButtons />
          </Reveal>

          <Reveal delay={0.85} y={12} className="h-stack">
            {view.stack.map((s) => (
              <span key={s} className="pill">
                {s}
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.3} y={30} className="h-right">
          <div className="h-photo-wrap">
            <Image
              src="/about.jpg"
              alt="Aniket Sharma"
              fill
              sizes="(max-width: 860px) 100vw, 420px"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
            <div className="h-photo-tag">
              <span className="h-dot" /> Currently on the AI team at Navyug
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={1} className="h-stats">
        {personal.stats.map((stat) => (
          <a
            key={stat.label}
            href={stat.link}
            target="_blank"
            rel="noreferrer"
            className="bs"
          >
            <div className="bs-n">{stat.value}</div>
            <div className="bs-l">{stat.label}</div>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
