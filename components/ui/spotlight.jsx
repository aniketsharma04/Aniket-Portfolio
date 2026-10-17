"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Adapted from the 21st.dev "Spotlight" component by kevingirelli.
// A soft light follows the pointer across a card, and along its edge. Only two
// CSS variables change per frame, so nothing re-renders; touch screens skip it.

// Two masks, one clipped to the content box: "exclude" keeps only the 1px padding ring
const RING_MASK =
  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)";

const lightClassName = cn(
  "pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0",
  "transition-opacity duration-300 motion-reduce:transition-none",
  "group-focus-within/spotlight:opacity-100 group-hover/spotlight:opacity-100",
);

export default function Spotlight({
  as: Comp = "div",
  size = 360,
  color = "var(--green)",
  ring = true,
  className,
  children,
  onPointerMove,
  ...props
}) {
  const frame = useRef(0);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const circle = `${size}px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%)`;

  return (
    <Comp
      className={cn("group/spotlight relative isolate", className)}
      onPointerMove={(event) => {
        onPointerMove?.(event);
        if (event.pointerType === "touch") return;
        const target = event.currentTarget;
        const { clientX, clientY } = event;
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() => {
          const bounds = target.getBoundingClientRect();
          target.style.setProperty(
            "--spotlight-x",
            `${clientX - bounds.left}px`,
          );
          target.style.setProperty(
            "--spotlight-y",
            `${clientY - bounds.top}px`,
          );
        });
      }}
      {...props}
    >
      <span
        aria-hidden="true"
        className={lightClassName}
        style={{
          background: `radial-gradient(${circle}, color-mix(in oklab, ${color} 9%, transparent), transparent 70%)`,
        }}
      />
      {ring && (
        <span
          aria-hidden="true"
          className={cn(lightClassName, "p-px")}
          style={{
            background: `radial-gradient(${circle}, color-mix(in oklab, ${color} 55%, transparent), transparent 60%)`,
            mask: RING_MASK,
            maskComposite: "exclude",
            WebkitMask: RING_MASK,
            WebkitMaskComposite: "xor",
          }}
        />
      )}
      {children}
    </Comp>
  );
}
