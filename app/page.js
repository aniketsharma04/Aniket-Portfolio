"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Mascot from "@/components/Mascot";
import { focusViews } from "@/data";

// The "Viewing as" role switch is hidden for now, so everyone sees "All".
// Set to true to bring back the switch and ?focus= links.
const FOCUS_SWITCH = false;

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [focus, setFocus] = useState("all");

  // Shared links like /?focus=ds open straight into that view
  useEffect(() => {
    if (!FOCUS_SWITCH) return;
    const f = new URLSearchParams(window.location.search).get("focus");
    if (f && focusViews[f]) setFocus(f);
  }, []);

  const changeFocus = (f) => {
    setFocus(f);
    const url = new URL(window.location.href);
    if (f === "all") url.searchParams.delete("focus");
    else url.searchParams.set("focus", f);
    window.history.replaceState(null, "", url);
  };

  const view = focusViews[focus];

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
          <div
            className="mhdr-av"
            style={{ overflow: "hidden", background: "none" }}
          >
            <img
              src="/avatar.jpg"
              alt="AS"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: "50%",
              }}
            />
          </div>
          Aniket Sharma
        </div>
        <button
          className="mhdr-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        role={view.role}
      />

      <div
        className="main"
        onClick={() => sidebarOpen && setSidebarOpen(false)}
      >
        <Hero
          view={view}
          focus={focus}
          onFocusChange={FOCUS_SWITCH ? changeFocus : undefined}
          isDark={isDark}
        />
        <About view={view} />
        <Experience focus={focus} />
        <Projects focus={focus} />
        <Blog />
        <Testimonials />
        <Contact />
        <Footer onThemeToggle={toggleTheme} isDark={isDark} />
      </div>

      <Mascot />
    </>
  );
}
