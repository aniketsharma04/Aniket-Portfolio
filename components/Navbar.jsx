"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { personal } from "@/data";

// Floating island navbar, adapted from the 21st.dev "Morphing Island Navbar" by abushaidislam7.
// A pill slides under the hovered link and settles on the section in view.

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Writing" },
  { href: "#testimonials", label: "Recommendations" },
];

const SunIcon = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-4 w-4"
  >
    <circle cx="12" cy="12" r="4" />
    <path
      strokeLinecap="round"
      d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
    />
  </svg>
);
const MoonIcon = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
    />
  </svg>
);

const spring = { type: "spring", stiffness: 450, damping: 35 };

export default function Navbar({ isDark, onThemeToggle }) {
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && setActive("#" + e.target.id),
        ),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // The pill follows the pointer, and falls back to the section in view
  const pill = hovered ?? active;

  const island = cn(
    "flex items-center gap-1 rounded-full border p-1.5 backdrop-blur-2xl transition-shadow duration-300",
    "border-[var(--border)] bg-[color-mix(in_oklab,var(--bg2)_88%,transparent)]",
    scrolled && "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.45)]",
  );

  return (
    <header className="fixed inset-x-0 top-4 z-[200] flex justify-center px-4 select-none">
      <div className="relative w-full max-w-[1080px]">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#home"
            className={cn(island, "pr-4")}
            aria-label="Back to top"
          >
            <span className="relative h-8 w-8 overflow-hidden rounded-full border border-[var(--border2)]">
              <Image
                src="/avatar.jpg"
                alt=""
                fill
                sizes="32px"
                className="object-cover object-top"
              />
            </span>
            <span className="text-[13px] font-semibold tracking-tight text-[var(--t1)]">
              {personal.name}
            </span>
          </a>

          {/* Desktop island */}
          <nav
            className={cn(island, "hidden lg:flex")}
            onMouseLeave={() => setHovered(null)}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHovered(item.href)}
                className={cn(
                  "relative z-10 rounded-full px-4 py-2 text-[13px] font-medium tracking-tight transition-colors duration-200",
                  pill === item.href
                    ? "text-[var(--t1)]"
                    : "text-[var(--t2)] hover:text-[var(--t1)]",
                )}
              >
                {pill === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 z-[-1] rounded-full bg-[var(--card)] ring-1 ring-[var(--border)]"
                    transition={spring}
                  />
                )}
                {item.label}
              </a>
            ))}
          </nav>

          <div className={island}>
            <button
              onClick={onThemeToggle}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[var(--t2)] transition-colors hover:bg-[var(--card)] hover:text-[var(--t1)]"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <a
              href="#contact"
              className="hidden rounded-full bg-[var(--t1)] px-4 py-1.5 text-[13px] font-medium text-[var(--bg)] transition-opacity hover:opacity-85 sm:inline-flex"
            >
              Let&apos;s talk
            </a>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center gap-[4px] rounded-full hover:bg-[var(--card)] lg:hidden"
            >
              <span
                className={cn(
                  "block h-[1.5px] w-4 rounded bg-[var(--t1)] transition-transform",
                  menuOpen && "translate-y-[2.75px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-[1.5px] w-4 rounded bg-[var(--t1)] transition-transform",
                  menuOpen && "-translate-y-[2.75px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 32,
                mass: 0.6,
              }}
              className="absolute inset-x-0 top-[60px] overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--bg2)_94%,transparent)] p-2 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] backdrop-blur-2xl lg:hidden"
            >
              {[...navItems, { href: "#contact", label: "Contact" }].map(
                (item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-[14px] font-medium transition-colors hover:bg-[var(--card)]",
                      active === item.href
                        ? "text-[var(--t1)]"
                        : "text-[var(--t2)]",
                    )}
                  >
                    {item.label}
                    <span className="text-[var(--t3)]">→</span>
                  </a>
                ),
              )}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
