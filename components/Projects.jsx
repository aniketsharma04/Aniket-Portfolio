"use client";
import { projects } from "@/data";
import ProjectMedia from "@/components/ProjectMedia";
import Spotlight from "@/components/ui/spotlight";
import { Reveal } from "@/components/ui/reveal";

const GithubIcon = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    style={{ width: 13, height: 13 }}
  >
    <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
    style={{ width: 13, height: 13 }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const links = (p) =>
  p.links ??
  (p.link ? [{ href: p.link, label: p.linkLabel, type: p.linkType }] : []);

export default function Projects() {
  return (
    <section id="projects" className="sec">
      <Reveal>
        <div className="stag">Work</div>
        <h2 className="sh">Selected Projects</h2>
        <p className="sd">Featured work: case studies &amp; live demos.</p>
      </Reveal>

      <div className="proj-grid">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.08}>
            <Spotlight className="proj-card">
              <div className="proj-thumb">
                <ProjectMedia project={p} />
              </div>
              <div className="proj-body">
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="ptg">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="proj-name">{p.name}</div>
                {p.org && <div className="proj-org">{p.org}</div>}
                <p className="proj-desc">{p.desc}</p>
                {links(p).length > 0 ? (
                  <div className="proj-lnks">
                    {links(p).map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-lnk"
                      >
                        {l.type === "github" ? (
                          <GithubIcon />
                        ) : (
                          <ExternalIcon />
                        )}
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <span className="proj-private">
                    Client project · code is confidential
                  </span>
                )}
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
