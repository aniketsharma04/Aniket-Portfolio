import { experience } from "@/data";
import Spotlight from "@/components/ui/spotlight";
import { Reveal } from "@/components/ui/reveal";

export default function Experience() {
  const items = experience.map((item) => ({ ...item, ...item.byFocus?.all }));

  return (
    <section id="experience" className="sec">
      <Reveal>
        <p className="stag">Career Path</p>
        <h2 className="sh">Experience &amp; Education</h2>
        <p className="sd">
          A look at my professional roles and academic background that have
          shaped my journey in data science and software engineering.
        </p>
      </Reveal>

      <div className="tl">
        {items.map((item, i) => (
          // Cards alternate sides; CSS places card, dot and spacer in their columns
          <div
            key={i}
            className={`tl-item ${i % 2 === 0 ? "tl-left" : "tl-right"}`}
          >
            <Reveal className="tl-card-wrap">
              <Spotlight className="tl-card">
                <div className="tl-date-badge">📅 {item.date}</div>
                <div className="ei-role">{item.role}</div>
                <div className="ei-co">{item.company}</div>
                <p className="ei-desc">{item.description}</p>
                <div className="ei-tags">
                  {item.tags.map((t) => (
                    <span key={t} className="etag">
                      {t}
                    </span>
                  ))}
                </div>
                {item.liveLink && (
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "var(--green)",
                      marginTop: "12px",
                    }}
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      style={{ width: "13px", height: "13px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View live dashboard →
                  </a>
                )}
              </Spotlight>
            </Reveal>
            <div className="tl-dot-col">
              <div className="tl-dot">{item.emoji}</div>
            </div>
            <div className="tl-empty" />
          </div>
        ))}
      </div>
    </section>
  );
}
