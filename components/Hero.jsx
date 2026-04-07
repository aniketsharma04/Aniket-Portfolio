import { personal } from "@/data";

export default function Hero() {
  return (
    <section id="home">
      <div className="h-avail">
        <span className="h-dot" />
        Available for Full Stack Roles &amp; Projects
      </div>

      <h1 className="h-h1">{personal.tagline}</h1>
      <p className="h-desc">{personal.description}</p>

      <div className="h-btns">
        <a href="#projects" className="btn-f">View my work</a>
        <a href="#contact" className="btn-g">Let&apos;s work together</a>
        <a href={personal.links.resume} target="_blank" rel="noreferrer" className="btn-g">
          View Resume ↓
        </a>
      </div>

      <div className="h-stack">
        {personal.stack.map((s) => (
          <span key={s} className="pill">{s}</span>
        ))}
      </div>

      <div className="h-banner">
        <div className="h-banner-in">
          {personal.stats.map((stat, i) => (
            <span key={stat.label} style={{ display: "contents" }}>
              {i > 0 && <div className="bdiv" />}
              <a href={stat.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
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
