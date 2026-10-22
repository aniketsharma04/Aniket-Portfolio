"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { createAvatar } from "@bible-strong/avatar-react";
import "@bible-strong/avatar-react/styles.css";
import definition from "@/data/kribi.avatar.json";

// Kribi: built with Bible Strong Avatar Lab by Stéphane Montlouis-Calixte
// (github.com/smontlouis/bible-strong-avatar-lab, AGPL-3.0)
const Kribi = createAvatar(definition);

const DROWSY_AFTER = 30000; // no mouse, scroll or typing for 30s
const SLEEP_AFTER = 8000; // drowsy for 8s, then asleep
const WAKE_FOR = 2000; // every animation loops, so "waking" hands back to idle on a timer
const REACT_FOR = 3500; // how long a one-off reaction plays before going back to idle
const FIDGET_EVERY = [6000, 9000]; // while idle, a quick happy/curious look every 6-9s
const FIDGET_FOR = 2500;
const SAY_FOR = 4500; // how long a speech bubble stays up

// What Kribi says when each section scrolls into the middle of the screen
const TIPS = {
  home: "Hi, I'm Kribi 👋 Aniket's sidekick",
  about: "A little about Aniket ✨",
  experience: "Where Aniket has worked 💼",
  projects: "Check out the projects 👀",
  blog: "Some things Aniket wrote ✍️",
  testimonials: "What people say about working with Aniket 💬",
  contact: "Got an idea? Drop a message 📬",
  footer: "Thanks for stopping by 🧡",
};

// Other components ask for a reaction (and optionally a line in the bubble) with
// mascot("celebrate", "Message sent! 🎉")
export const mascot = (animation, say) =>
  window.dispatchEvent(
    new CustomEvent("mascot", { detail: { animation, say } }),
  );

export default function Mascot() {
  const avatar = useRef(null);
  const button = useRef(null);
  const [still, setStill] = useState(null); // null until we know the motion preference
  const [bubble, setBubble] = useState({ text: "", on: false });
  const bubbleTimer = useRef(null);

  // Show a line in the speech bubble; ms = 0 keeps it up until the next line
  const say = useCallback((text, ms = SAY_FOR) => {
    clearTimeout(bubbleTimer.current);
    setBubble({ text, on: true });
    if (ms)
      bubbleTimer.current = setTimeout(
        () => setBubble((b) => ({ ...b, on: false })),
        ms,
      );
  }, []);
  const hush = useCallback(() => {
    clearTimeout(bubbleTimer.current);
    setBubble((b) => ({ ...b, on: false }));
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setStill(mq.matches);
    const onChange = () => setStill(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Speech bubble: a tip whenever a new section reaches the middle of the screen
  useEffect(() => {
    const sections = [
      ...document.querySelectorAll("section[id], footer"),
    ].filter((el) => TIPS[el.id || el.tagName.toLowerCase()]);
    let current = null;
    let settle = null;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (!hit) return;
        const key = hit.target.id || hit.target.tagName.toLowerCase();
        if (key === current) return;
        current = key;
        // wait until scrolling settles so a fast scroll doesn't flash every tip
        clearTimeout(settle);
        settle = setTimeout(() => say(TIPS[key]), 600);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    sections.forEach((el) => io.observe(el));
    return () => {
      clearTimeout(settle);
      io.disconnect();
    };
  }, [say]);

  useEffect(() => () => clearTimeout(bubbleTimer.current), []);

  useEffect(() => {
    if (still !== false) return;
    let state = "awake"; // awake | drowsy | asleep
    let back = null;
    let idleTimer = null;
    let sleepTimer = null;
    let fidgetTimer = null;
    let fidgets = 0;
    let current = null;

    // data-animation shows what is playing (or "error:<name>"), for debugging and tests
    const show = (name) => {
      current = name;
      const result = avatar.current?.play(name);
      if (button.current && result)
        button.current.dataset.animation = result.ok ? name : `error:${name}`;
    };

    const play = (name, holdMs) => {
      clearTimeout(back);
      show(name);
      if (holdMs) back = setTimeout(() => show("idle"), holdMs);
    };

    // Livelier idle: now and then a quick happy or curious look, then back to idle
    const armFidget = () => {
      clearTimeout(fidgetTimer);
      const [min, max] = FIDGET_EVERY;
      fidgetTimer = setTimeout(
        () => {
          if (state === "awake" && current === "idle")
            play(fidgets++ % 2 ? "curious" : "happy", FIDGET_FOR);
          armFidget();
        },
        min + Math.random() * (max - min),
      );
    };

    const armIdle = () => {
      clearTimeout(idleTimer);
      clearTimeout(sleepTimer);
      idleTimer = setTimeout(() => {
        state = "drowsy";
        play("drowsy");
        sleepTimer = setTimeout(() => {
          state = "asleep";
          play("sleeping");
          say("Zzz…", 0);
        }, SLEEP_AFTER);
      }, DROWSY_AFTER);
    };

    const onActivity = () => {
      if (state !== "awake") {
        if (state === "asleep") say("Oh! You're back 😄");
        state = "awake";
        play("waking", WAKE_FOR);
      }
      armIdle();
    };

    const onReaction = (e) => {
      const { animation, say: line } = e.detail;
      state = "awake";
      armIdle();
      // "thinking" stays on until the next reaction replaces it
      play(animation, animation === "thinking" ? 0 : REACT_FOR);
      if (line) say(line, animation === "thinking" ? 0 : SAY_FOR);
    };

    // Hover on desktop, tap on phones: pointerover fires for both
    const onPointerOver = (e) => {
      const el = e.target.closest?.("[data-mascot]");
      if (el && !el.contains(e.relatedTarget))
        play(el.dataset.mascot, REACT_FOR);
    };

    play("waking", WAKE_FOR);
    armIdle();
    armFidget();
    const activity = [
      "pointermove",
      "pointerdown",
      "keydown",
      "scroll",
      "touchstart",
    ];
    activity.forEach((t) =>
      window.addEventListener(t, onActivity, { passive: true }),
    );
    window.addEventListener("mascot", onReaction);
    document.addEventListener("pointerover", onPointerOver);
    return () => {
      clearTimeout(back);
      clearTimeout(idleTimer);
      clearTimeout(sleepTimer);
      clearTimeout(fidgetTimer);
      activity.forEach((t) => window.removeEventListener(t, onActivity));
      window.removeEventListener("mascot", onReaction);
      document.removeEventListener("pointerover", onPointerOver);
    };
  }, [still, say]);

  if (still === null) return null;

  return (
    <>
      {/* Decorative tips, so screen readers skip them */}
      <div
        className={`mascot-say${bubble.on ? " on" : ""}`}
        aria-hidden="true"
        onClick={hush}
      >
        {bubble.text}
      </div>
      <button
        ref={button}
        type="button"
        className="mascot"
        aria-label="Kribi, the site mascot. Click to make it laugh."
        onClick={() => !still && mascot("laughing", "Hehe, that tickles 😆")}
      >
        {still ? (
          <Kribi
            ref={avatar}
            defaultExpression="neutral"
            size="100%"
            ariaLabel="Kribi"
          />
        ) : (
          <Kribi
            ref={avatar}
            defaultAnimation="idle"
            size="100%"
            ariaLabel="Kribi"
          />
        )}
      </button>
    </>
  );
}
