"use client";
import { personal } from "@/data";

const GithubIcon = () => <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>;
const LinkedInIcon = () => <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>;
const WebIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>;

export default function Footer({ onThemeToggle, isDark }) {
  return (
    <footer>
      <div className="ft-top">
        <div>
          <div className="ft-brand-name">{personal.name}</div>
          <p className="ft-brand-desc">I build performant, scalable web apps and AI developer tools. Available for full-time roles &amp; internships.</p>
          <div className="ft-soc">
            <a href={personal.links.github} target="_blank" rel="noreferrer"><GithubIcon /></a>
            <a href={personal.links.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href={personal.links.portfolio} target="_blank" rel="noreferrer"><WebIcon /></a>
          </div>
        </div>
        <div>
          <div className="ft-col-title">Explore</div>
          <ul className="ft-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Articles</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="ft-col-title">Connect</div>
          <ul className="ft-links">
            <li><a href={personal.links.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={personal.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={personal.links.codechef} target="_blank" rel="noreferrer">CodeChef</a></li>
            <li><a href={personal.links.gfg} target="_blank" rel="noreferrer">GeeksForGeeks</a></li>
            <li><a href={`mailto:${personal.email}`}>Email</a></li>
          </ul>
        </div>
        <div className="ft-nl">
          <div className="ft-col-title">Stay updated</div>
          <p>Get occasional updates about projects and writing.</p>
          <div className="nl-row">
            <input type="email" placeholder="Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="ft-btm">
        <span>© 2026 {personal.name}</span>
        <button className="theme-btn" onClick={onThemeToggle}>
          {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </footer>
  );
}
