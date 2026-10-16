// Illustrated thumbnails for confidential client projects, where real images can't be shown.
// All shapes are generated from fixed formulas so server and client render identically.

const lerp = (a, b, t) => Math.round(a + (b - a) * t);
const heatColor = (t) => {
  // dark plum → coral → amber
  const stops = [[74, 22, 74], [255, 77, 109], [255, 209, 102]];
  const [a, b, u] = t < 0.5 ? [stops[0], stops[1], t * 2] : [stops[1], stops[2], (t - 0.5) * 2];
  return `rgb(${lerp(a[0], b[0], u)},${lerp(a[1], b[1], u)},${lerp(a[2], b[2], u)})`;
};

function SlideHeatmap() {
  const cells = [];
  const size = 12;
  for (let y = 0; y < 15; y++) {
    for (let x = 0; x < 27; x++) {
      // Irregular tissue outline
      const dx = (x - 13) / 11.5, dy = (y - 7) / 6.2;
      if (dx * dx + dy * dy > 1 + 0.12 * Math.sin(x * 1.3 + y * 0.7)) continue;
      // Two "tumor" hotspots the attention model focuses on
      const h1 = Math.exp(-(((x - 17) ** 2) / 10 + ((y - 5) ** 2) / 6));
      const h2 = Math.exp(-(((x - 8) ** 2) / 8 + ((y - 9) ** 2) / 5));
      const t = Math.min(1, h1 + 0.75 * h2 + 0.08 * (1 + Math.sin(x * 2.1 + y * 1.7)));
      cells.push(<rect key={`${x}-${y}`} x={x * size + 1} y={y * size + 1} width={size - 2} height={size - 2} rx="2" fill={heatColor(t)} opacity={(0.35 + 0.65 * t).toFixed(2)} />);
    }
  }
  return (
    <svg viewBox="0 0 324 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {cells}
    </svg>
  );
}

function CameraGrid() {
  const frames = [];
  for (let i = 0; i < 12; i++) {
    const col = i % 4, row = Math.floor(i / 4);
    const x = 12 + col * 76, y = 10 + row * 52;
    const active = i === 5;
    // The plate drifts across successive cameras, split into two after cutting (cams 9+)
    const plateX = 8 + ((i * 13) % 34);
    frames.push(
      <g key={i}>
        <rect x={x} y={y} width="68" height="44" rx="4" fill="#15181d" stroke={active ? "#a8ff78" : "#3a3f47"} strokeWidth={active ? 1.6 : 1} />
        <text x={x + 5} y={y + 10} fontSize="6" fill="#7d8590" fontFamily="monospace">CAM {String(i + 1).padStart(2, "0")}</text>
        {i < 8 ? (
          <rect x={x + plateX} y={y + 18} width="26" height="14" rx="1.5" fill="#8b949e" opacity="0.85" />
        ) : (
          <>
            <rect x={x + 8} y={y + 18} width="20" height="14" rx="1.5" fill="#8b949e" opacity="0.85" />
            <rect x={x + 34} y={y + 18} width="20" height="14" rx="1.5" fill="#8b949e" opacity="0.85" />
          </>
        )}
        {active && (
          <>
            <rect x={x + plateX - 3} y={y + 15} width="32" height="20" fill="none" stroke="#a8ff78" strokeWidth="1.2" strokeDasharray="3 2" />
            <text x={x + plateX - 3} y={y + 42} fontSize="6" fill="#a8ff78" fontFamily="monospace">PL-2041</text>
          </>
        )}
      </g>
    );
  }
  return (
    <svg viewBox="0 0 324 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {frames}
    </svg>
  );
}

function Worker({ x, helmet, vest }) {
  return (
    <g>
      <circle cx={x} cy="62" r="11" fill="#c9a27e" />
      {helmet && <path d={`M${x - 13} 60 a13 12 0 0 1 26 0 z`} fill="#ffd166" />}
      <rect x={x - 17} y="76" width="34" height="58" rx="10" fill={vest ? "#ff8c1a" : "#4b5563"} />
      {vest && <rect x={x - 17} y="100" width="34" height="5" fill="#f5f5f5" opacity="0.85" />}
      <rect x={x - 14} y="134" width="11" height="40" rx="4" fill="#374151" />
      <rect x={x + 3} y="134" width="11" height="40" rx="4" fill="#374151" />
    </g>
  );
}

function DetectionBoxes() {
  const box = (x, color, label, dashed) => (
    <g>
      <rect x={x - 28} y="44" width="56" height="134" fill="none" stroke={color} strokeWidth="2" strokeDasharray={dashed ? "5 4" : undefined} rx="3" />
      <rect x={x - 28} y="32" width={label.length * 5.4 + 10} height="13" fill={color} rx="2" />
      <text x={x - 23} y="41.5" fontSize="8" fontWeight="700" fill="#111" fontFamily="monospace">{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 324 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Worker x={62} helmet vest />
      {box(62, "#4ade80", "PPE OK")}
      <Worker x={162} vest />
      {box(162, "#f87171", "NO HELMET")}
      {/* Partly out of frame, so the system abstains rather than raising an alarm */}
      <g opacity="0.7"><Worker x={300} helmet /></g>
      {box(290, "#9ca3af", "UNKNOWN", true)}
    </svg>
  );
}

const ART = { heatmap: SlideHeatmap, cameras: CameraGrid, detections: DetectionBoxes };

export default function ProjectVisual({ visual }) {
  const Art = ART[visual.kind];
  return (
    <div className="pv">
      <div className="pv-art">{Art && <Art />}</div>
      <div className="pv-txt">
        <div className="pv-head">{visual.headline}</div>
        <div className="pv-cap">{visual.caption}</div>
      </div>
    </div>
  );
}
