"use client";
import { useState } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { focusViews } from "@/data";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const view = focusViews.all;

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <MotionConfig reducedMotion="user">
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} />
      <main className="main">
        <Hero view={view} />
        <About view={view} />
        <Experience />
        <Projects />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
