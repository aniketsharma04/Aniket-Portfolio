"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { personal } from "@/data";

export default function About() {
  const fillsRef = useRef([]);

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
      { threshold: 0.3 }
    );
    fillsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="sec">
      <div className="stag">About me</div>
      <div className="ab-grid">
        {/* Left */}
        <div>
          <div className="ab-badge">Final year B.Tech student</div>
          {personal.about.map((p, i) => (
            <p key={i} className="ab-p" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <div className="ab-btns">
            <a href={personal.links.resume} target="_blank" rel="noreferrer" className="btn-f" style={{ fontSize: "13px", padding: "10px 20px" }}>
              View Resume
            </a>
            <a href="#projects" className="btn-g" style={{ fontSize: "13px", padding: "10px 20px" }}>
              See projects
            </a>
          </div>
          <div className="ab-cards">
            {personal.aboutCards.map((card) => (
              <div key={card.title} className="ab-card">
                <h4>{card.title}</h4>
                <p>{card.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — full square photo */}
        <div>
          <div className="ab-r-frame" style={{ aspectRatio: "1/1", padding: 0, background: "none", border: "1px solid var(--border)", borderRadius: "14px", overflow: "hidden", marginBottom: "22px", display: "block", position: "relative" }}>
            <Image
              src="/about.jpg"
              alt="Aniket Sharma"
              fill
              style={{ objectFit: "contain", objectPosition: "center center" }}
            />
          </div>

          <p className="ab-bio">{personal.bio}</p>
          <p className="sk-lbl">Core skills</p>

          {personal.skills.map((skill, i) => (
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

          <p className="ab-open">
            Open to: <span>{personal.openTo}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
