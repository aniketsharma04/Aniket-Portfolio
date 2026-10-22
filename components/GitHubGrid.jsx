"use client";
import { useEffect, useState } from "react";

// Live GitHub contribution calendar, drawn as a faded backdrop behind the hero stats.
// Data comes from a free public API that mirrors github.com/<user> (no token needed).
export default function GitHubGrid({ profileUrl }) {
  const username = profileUrl.replace(/\/+$/, "").split("/").pop();
  const [data, setData] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      {
        signal: AbortSignal.timeout(10000),
      },
    )
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => {
        if (!cancelled && d.contributions?.length) setData(d);
      })
      .catch(() => {}); // banner simply stays plain
    return () => {
      cancelled = true;
    };
  }, [username]);

  if (!data) return null;

  // GitHub columns start on Sunday: pad the first week so weekdays line up
  const days = data.contributions;
  const pad = new Date(`${days[0].date}T00:00:00`).getDay();
  const cells = [...Array(pad).fill(null), ...days];
  const weeks = Math.ceil(cells.length / 7);

  return (
    <>
      <div
        className="gh-grid"
        aria-hidden="true"
        style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }}
      >
        {cells.map((d, i) => (
          <span key={i} className={d ? `gh-c gh-l${d.level}` : "gh-c gh-pad"} />
        ))}
      </div>
      <a className="gh-cap" href={profileUrl} target="_blank" rel="noreferrer">
        {data.total.lastYear} contributions in the last year · GitHub ↗
      </a>
    </>
  );
}
