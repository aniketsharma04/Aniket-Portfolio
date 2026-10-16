"use client";
import { useState } from "react";
import { focusViews } from "@/data";

export default function FocusSwitch({ focus, onChange }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the address bar already holds the link
    }
  };

  return (
    <div className="fsw-wrap">
      <span className="fsw-lbl">Viewing as</span>
      <div className="fsw" role="group" aria-label="Choose which profile to view">
        {Object.entries(focusViews).map(([key, v]) => (
          <button
            key={key}
            type="button"
            className={focus === key ? "on" : ""}
            aria-pressed={focus === key}
            onClick={() => onChange(key)}
          >
            {v.label}
          </button>
        ))}
      </div>
      <button type="button" className="fsw-copy" onClick={copyLink}>
        {copied ? "✓ Link copied" : "Copy link to this view"}
      </button>
    </div>
  );
}
