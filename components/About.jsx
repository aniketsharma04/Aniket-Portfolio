"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { personal } from "@/data";
import ResumeButtons from "@/components/ResumeButtons";
import Spotlight from "@/components/ui/spotlight";
import { Reveal } from "@/components/ui/reveal";

export default function About({ view }) {
  const fillsRef = useRef([]);

  // Re-run when the view changes so newly shown skill bars animate in too
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.width = e.target.dataset.w;
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    fillsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [view]);

  return (
    <section id="about" className="sec">
      <div className="ab-title-row">
        <div className="stag">About me</div>
      </div>
      <Reveal className="ab-grid">
        {/* Left */}
        <div>
          <div className="ab-badge">AI Team · Navyug Infosolutions</div>
          {personal.about.map((p, i) => (
            <p
              key={i}
              className="ab-p"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
          <div className="ab-btns">
            <ResumeButtons
              className="btn-f"
              style={{ fontSize: "13px", padding: "10px 20px" }}
            />
            <a
              href="#projects"
              className="btn-g"
              style={{ fontSize: "13px", padding: "10px 20px" }}
            >
              See projects
            </a>
          </div>
          <div className="ab-cards">
            {personal.aboutCards.map((card) => (
              <Spotlight key={card.title} className="ab-card">
                <h4>{card.title}</h4>
                <p>{card.value}</p>
              </Spotlight>
            ))}
          </div>
        </div>

        {/* Right: profile card */}
        <div>
          <Spotlight className="ab-profile-card" size={480}>
            {/* Card header */}
            <div className="ab-pc-hdr">
              <div className="ab-pc-photo">
                <Image
                  src="/avatar.jpg"
                  alt="Aniket Sharma"
                  fill
                  sizes="52px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div>
                <div className="ab-pc-name">{personal.name}</div>
                <div className="ab-pc-role">{view.role}</div>
              </div>
            </div>

            <p className="ab-bio">{personal.bio}</p>

            <div className="ab-pc-divider" />

            <p className="sk-lbl">Core skills</p>
            {view.skillGroups?.map((group) => (
              <div key={group.name} className="sk-grp">
                <div className="sk-grp-n">{group.name}</div>
                <div className="sk-chips">
                  {group.items.map((s) => (
                    <span key={s} className="ptg">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            {view.skills?.map((skill, i) => (
              <div key={skill.name} className="sk-row">
                <div className="sk-top">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="sk-bar">
                  <div
                    className="sk-fill"
                    data-w={`${skill.value}%`}
                    ref={(el) => (fillsRef.current[i] = el)}
                  />
                </div>
              </div>
            ))}

            <div className="ab-pc-divider" />
            <p className="ab-open">
              Open to: <span>{personal.openTo}</span>
            </p>
          </Spotlight>
        </div>
      </Reveal>
    </section>
  );
}
