"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = isDark ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="mhdr">
        <div className="mhdr-left">
          <div className="mhdr-av" style={{ overflow: "hidden", background: "none" }}>
            <img src="/avatar.jpg" alt="AS" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", borderRadius: "50%" }} />
          </div>
          Aniket Sharma
        </div>
        <button className="mhdr-btn" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </header>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main" onClick={() => sidebarOpen && setSidebarOpen(false)}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Blog />
        <Testimonials />
        <Contact />
        <Footer onThemeToggle={toggleTheme} isDark={isDark} />
      </div>
    </>
  );
}
