import Image from "next/image";
import { personal } from "@/data";
import FocusSwitch from "@/components/FocusSwitch";
import HeroParticles from "@/components/HeroParticles";

export default function Hero({ view, focus, onFocusChange, isDark }) {
  return (
    <section id="home">
      <HeroParticles isDark={isDark} />
      <div className="h-wrap">
        <div className="h-left">
          <FocusSwitch focus={focus} onChange={onFocusChange} />

          <div className="h-avail">
            <span className="h-dot" />
            {view.availability}
          </div>

          <h1 className="h-h1">{view.tagline}</h1>
          <p className="h-desc">{view.description}</p>

          <div className="h-btns">
            <a href="#projects" className="btn-f">
              View my work
            </a>
            <a href="#contact" className="btn-g">
              Let&apos;s work together
            </a>
            <a
              href={personal.links.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-g"
            >
              View Resume ↓
            </a>
          </div>

          <div className="h-stack">
            {view.stack.map((s) => (
              <span key={s} className="pill">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="h-right">
          <div className="h-photo-wrap">
            <Image
              src="/about.jpg"
              alt="Aniket Sharma"
              fill
              sizes="(max-width: 860px) 100vw, 420px"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>
        </div>
      </div>

      <div className="h-banner">
        <div className="h-banner-in">
          {personal.stats.map((stat, i) => (
            <span key={stat.label} style={{ display: "contents" }}>
              {i > 0 && <div className="bdiv" />}
              <a
                href={stat.link}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className="bs">
                  <div className="bs-n">{stat.value}</div>
                  <div className="bs-l">{stat.label}</div>
                </div>
              </a>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
