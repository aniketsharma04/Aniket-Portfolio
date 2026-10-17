// Illustrated thumbnails for projects without a screenshot or demo video (and for
// confidential client work, where real images can't be shown).
// All shapes are generated from fixed formulas so server and client render identically.

const lerp = (a, b, t) => Math.round(a + (b - a) * t);
const heatColor = (t) => {
  // dark plum → coral → amber
  const stops = [
    [74, 22, 74],
    [255, 77, 109],
    [255, 209, 102],
  ];
  const [a, b, u] =
    t < 0.5 ? [stops[0], stops[1], t * 2] : [stops[1], stops[2], (t - 0.5) * 2];
  return `rgb(${lerp(a[0], b[0], u)},${lerp(a[1], b[1], u)},${lerp(a[2], b[2], u)})`;
};

function SlideHeatmap() {
  const cells = [];
  const size = 12;
  for (let y = 0; y < 15; y++) {
    for (let x = 0; x < 27; x++) {
      // Irregular tissue outline
      const dx = (x - 13) / 11.5,
        dy = (y - 7) / 6.2;
      if (dx * dx + dy * dy > 1 + 0.12 * Math.sin(x * 1.3 + y * 0.7)) continue;
      // Two "tumor" hotspots the attention model focuses on
      const h1 = Math.exp(-((x - 17) ** 2 / 10 + (y - 5) ** 2 / 6));
      const h2 = Math.exp(-((x - 8) ** 2 / 8 + (y - 9) ** 2 / 5));
      const t = Math.min(
        1,
        h1 + 0.75 * h2 + 0.08 * (1 + Math.sin(x * 2.1 + y * 1.7)),
      );
      cells.push(
        <rect
          key={`${x}-${y}`}
          x={x * size + 1}
          y={y * size + 1}
          width={size - 2}
          height={size - 2}
          rx="2"
          fill={heatColor(t)}
          opacity={(0.35 + 0.65 * t).toFixed(2)}
        />,
      );
    }
  }
  return (
    <svg
      viewBox="0 0 324 180"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {cells}
    </svg>
  );
}

function CameraGrid() {
  const frames = [];
  for (let i = 0; i < 12; i++) {
    const col = i % 4,
      row = Math.floor(i / 4);
    const x = 12 + col * 76,
      y = 10 + row * 52;
    const active = i === 5;
    // The plate drifts across successive cameras, split into two after cutting (cams 9+)
    const plateX = 8 + ((i * 13) % 34);
    frames.push(
      <g key={i}>
        <rect
          x={x}
          y={y}
          width="68"
          height="44"
          rx="4"
          fill="#15181d"
          stroke={active ? "#a8ff78" : "#3a3f47"}
          strokeWidth={active ? 1.6 : 1}
        />
        <text
          x={x + 5}
          y={y + 10}
          fontSize="6"
          fill="#7d8590"
          fontFamily="monospace"
        >
          CAM {String(i + 1).padStart(2, "0")}
        </text>
        {i < 8 ? (
          <rect
            x={x + plateX}
            y={y + 18}
            width="26"
            height="14"
            rx="1.5"
            fill="#8b949e"
            opacity="0.85"
          />
        ) : (
          <>
            <rect
              x={x + 8}
              y={y + 18}
              width="20"
              height="14"
              rx="1.5"
              fill="#8b949e"
              opacity="0.85"
            />
            <rect
              x={x + 34}
              y={y + 18}
              width="20"
              height="14"
              rx="1.5"
              fill="#8b949e"
              opacity="0.85"
            />
          </>
        )}
        {active && (
          <>
            <rect
              x={x + plateX - 3}
              y={y + 15}
              width="32"
              height="20"
              fill="none"
              stroke="#a8ff78"
              strokeWidth="1.2"
              strokeDasharray="3 2"
            />
            <text
              x={x + plateX - 3}
              y={y + 42}
              fontSize="6"
              fill="#a8ff78"
              fontFamily="monospace"
            >
              PL-2041
            </text>
          </>
        )}
      </g>,
    );
  }
  return (
    <svg
      viewBox="0 0 324 180"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {frames}
    </svg>
  );
}

function Worker({ x, helmet, vest }) {
  return (
    <g>
      <circle cx={x} cy="62" r="11" fill="#c9a27e" />
      {helmet && (
        <path d={`M${x - 13} 60 a13 12 0 0 1 26 0 z`} fill="#ffd166" />
      )}
      <rect
        x={x - 17}
        y="76"
        width="34"
        height="58"
        rx="10"
        fill={vest ? "#ff8c1a" : "#4b5563"}
      />
      {vest && (
        <rect
          x={x - 17}
          y="100"
          width="34"
          height="5"
          fill="#f5f5f5"
          opacity="0.85"
        />
      )}
      <rect x={x - 14} y="134" width="11" height="40" rx="4" fill="#374151" />
      <rect x={x + 3} y="134" width="11" height="40" rx="4" fill="#374151" />
    </g>
  );
}

function DetectionBoxes() {
  const box = (x, color, label, dashed) => (
    <g>
      <rect
        x={x - 28}
        y="44"
        width="56"
        height="134"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeDasharray={dashed ? "5 4" : undefined}
        rx="3"
      />
      <rect
        x={x - 28}
        y="32"
        width={label.length * 5.4 + 10}
        height="13"
        fill={color}
        rx="2"
      />
      <text
        x={x - 23}
        y="41.5"
        fontSize="8"
        fontWeight="700"
        fill="#111"
        fontFamily="monospace"
      >
        {label}
      </text>
    </g>
  );
  return (
    <svg
      viewBox="0 0 324 180"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <Worker x={62} helmet vest />
      {box(62, "#4ade80", "PPE OK")}
      <Worker x={162} vest />
      {box(162, "#f87171", "NO HELMET")}
      {/* Partly out of frame, so the system abstains rather than raising an alarm */}
      <g opacity="0.7">
        <Worker x={300} helmet />
      </g>
      {box(290, "#9ca3af", "UNKNOWN", true)}
    </svg>
  );
}

// Shared bits for the app mockups below
const MONO = "monospace";
const Pane = (props) => (
  <rect rx="6" fill="#11151c" stroke="#2a313c" strokeWidth="1" {...props} />
);
const Bar = ({ x, y, w, o = 0.35 }) => (
  <rect x={x} y={y} width={w} height="4" rx="2" fill="#c9d1d9" opacity={o} />
);

function TicketDesk() {
  const tickets = [
    ["#4127", "Refund not received", "#f87171", "OPEN"],
    ["#4126", "Can't reset password", "#fbbf24", "PENDING"],
    ["#4125", "Invoice in wrong currency", "#4ade80", "SOLVED"],
    ["#4124", "App crashes on login", "#4ade80", "SOLVED"],
  ];
  return (
    <svg
      viewBox="0 0 324 180"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <Pane x="12" y="10" width="178" height="150" />
      <text x="22" y="25" fontSize="7" fill="#7d8590" fontFamily={MONO}>
        INBOX · 4 TICKETS
      </text>
      {tickets.map(([id, title, color, status], i) => {
        const y = 32 + i * 24;
        return (
          <g key={id}>
            <rect
              x="18"
              y={y}
              width="166"
              height="20"
              rx="4"
              fill={i === 0 ? "#1b2230" : "#161b23"}
              stroke={i === 0 ? "#60a5fa" : "none"}
            />
            <text
              x="24"
              y={y + 13}
              fontSize="6.5"
              fill="#7d8590"
              fontFamily={MONO}
            >
              {id}
            </text>
            <text x="48" y={y + 13} fontSize="7" fill="#e6edf3">
              {title}
            </text>
            <rect
              x={146}
              y={y + 6}
              width="34"
              height="9"
              rx="4.5"
              fill={color}
              opacity="0.2"
            />
            <text
              x={163}
              y={y + 12.6}
              fontSize="5.5"
              fontWeight="700"
              fill={color}
              textAnchor="middle"
              fontFamily={MONO}
            >
              {status}
            </text>
          </g>
        );
      })}
      <Pane x="200" y="10" width="112" height="150" />
      <text x="210" y="25" fontSize="7" fill="#7d8590" fontFamily={MONO}>
        LIVE CHAT
      </text>
      <rect x="208" y="33" width="74" height="22" rx="8" fill="#232a35" />
      <text x="215" y="47" fontSize="6.5" fill="#e6edf3">
        Still no refund :(
      </text>
      <rect x="228" y="61" width="76" height="30" rx="8" fill="#2563eb" />
      <text x="235" y="73" fontSize="6.5" fill="#fff">
        On it! Refund sent,
      </text>
      <text x="235" y="83" fontSize="6.5" fill="#fff">
        arrives in 2 days
      </text>
      <text
        x="304"
        y="100"
        fontSize="5.5"
        fill="#4ade80"
        textAnchor="end"
        fontFamily={MONO}
      >
        replied in 42s
      </text>
    </svg>
  );
}

function SocialFeed() {
  const post = (x, y, name, hue, liked, likes) => (
    <g>
      <Pane x={x} y={y} width="92" height="124" />
      <circle cx={x + 12} cy={y + 13} r="6" fill={hue} />
      <text
        x={x + 22}
        y={y + 15.5}
        fontSize="6.5"
        fill="#e6edf3"
        fontWeight="600"
      >
        {name}
      </text>
      <rect
        x={x + 6}
        y={y + 25}
        width="80"
        height="56"
        rx="4"
        fill={hue}
        opacity="0.28"
      />
      <path
        d={`M${x + 14} ${y + 75} l18 -22 l12 13 l9 -9 l25 18 z`}
        fill={hue}
        opacity="0.55"
      />
      <path
        d={`M${x + 12} ${y + 92} c-3-4-9-1-6 3 l6 5 l6-5 c3-4-3-7-6-3z`}
        fill={liked ? "#f43f5e" : "none"}
        stroke={liked ? "#f43f5e" : "#7d8590"}
        strokeWidth="1"
      />
      <text
        x={x + 22}
        y={y + 96}
        fontSize="6.5"
        fill={liked ? "#f43f5e" : "#7d8590"}
        fontFamily={MONO}
      >
        {likes}
      </text>
      <Bar x={x + 6} y={y + 104} w={70} />
      <Bar x={x + 6} y={y + 112} w={46} o={0.2} />
    </g>
  );
  return (
    <svg
      viewBox="0 0 324 180"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {post(12, 12, "maya.dev", "#22d3ee", true, "128")}
      {post(116, 12, "rohan_k", "#a78bfa", false, "64")}
      {post(220, 12, "priya.s", "#34d399", true, "211")}
      {/* Next page already loading in: infinite scroll */}
      <g opacity="0.5">
        <rect
          x="12"
          y="142"
          width="300"
          height="30"
          rx="6"
          fill="#11151c"
          stroke="#2a313c"
          strokeDasharray="3 3"
        />
      </g>
    </svg>
  );
}

function ChatWindow() {
  const people = [
    ["#f97316", "A"],
    ["#38bdf8", "R"],
    ["#a3e635", "S"],
  ];
  return (
    <svg
      viewBox="0 0 324 180"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <Pane x="12" y="10" width="300" height="160" />
      <text x="24" y="26" fontSize="7.5" fill="#e6edf3" fontWeight="600">
        # weekend-plans
      </text>
      {people.map(([c, l], i) => (
        <g key={l}>
          <circle
            cx={262 + i * 13}
            cy="23"
            r="6"
            fill={c}
            stroke="#11151c"
            strokeWidth="1.5"
          />
          <text
            x={262 + i * 13}
            y="25.5"
            fontSize="6"
            fill="#111"
            fontWeight="700"
            textAnchor="middle"
          >
            {l}
          </text>
        </g>
      ))}
      <circle cx="298" cy="18" r="2.2" fill="#4ade80" />
      <line x1="12" y1="34" x2="312" y2="34" stroke="#2a313c" />
      <circle cx="28" cy="50" r="7" fill="#f97316" />
      <rect x="40" y="42" width="112" height="18" rx="8" fill="#232a35" />
      <text x="48" y="54" fontSize="7" fill="#e6edf3">
        Who&apos;s in for Saturday?
      </text>
      <rect x="196" y="66" width="104" height="18" rx="8" fill="#ea580c" />
      <text x="204" y="78" fontSize="7" fill="#fff">
        Count me in!
      </text>
      <text
        x="300"
        y="91"
        fontSize="5.5"
        fill="#7d8590"
        textAnchor="end"
        fontFamily={MONO}
      >
        ✓✓ seen
      </text>
      <circle cx="28" cy="106" r="7" fill="#38bdf8" />
      <rect x="40" y="98" width="30" height="16" rx="8" fill="#232a35" />
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={49 + i * 6}
          cy="106"
          r="2"
          fill="#c9d1d9"
          opacity={0.4 + i * 0.2}
        />
      ))}
      <text x="76" y="109" fontSize="6" fill="#7d8590" fontFamily={MONO}>
        Rohan is typing…
      </text>
    </svg>
  );
}

function KanbanBoard() {
  const cols = [
    [
      "BACKLOG",
      [
        ["#9ca3af", 52],
        ["#60a5fa", 40],
      ],
    ],
    [
      "TO-DO",
      [
        ["#fbbf24", 58],
        ["#f87171", 44, "overdue"],
      ],
    ],
    [
      "IN-PROGRESS",
      [
        ["#f87171", 50],
        ["#fbbf24", 36],
      ],
    ],
    [
      "DONE",
      [
        ["#4ade80", 46, "done"],
        ["#4ade80", 54, "done"],
      ],
    ],
  ];
  return (
    <svg
      viewBox="0 0 324 180"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {cols.map(([title, cards], c) => {
        const x = 10 + c * 77;
        return (
          <g key={title}>
            <Pane x={x} y="10" width="71" height="160" />
            <text
              x={x + 7}
              y="24"
              fontSize="6"
              fill="#7d8590"
              fontFamily={MONO}
            >
              {title}
            </text>
            {cards.map(([dot, w, state], i) => {
              const y = 31 + i * 38;
              const stroke =
                state === "overdue"
                  ? "#f87171"
                  : state === "done"
                    ? "#4ade80"
                    : "#2a313c";
              return (
                <g key={i}>
                  <rect
                    x={x + 5}
                    y={y}
                    width="61"
                    height="32"
                    rx="4"
                    fill="#1a2029"
                    stroke={stroke}
                    strokeWidth={state ? 1.2 : 1}
                  />
                  <circle cx={x + 11} cy={y + 8} r="2.5" fill={dot} />
                  <Bar x={x + 17} y={y + 6} w={w - 14} o={0.5} />
                  <Bar x={x + 9} y={y + 15} w={w - 10} o={0.2} />
                  {state === "done" ? (
                    <path
                      d={`M${x + 9} ${y + 25} l3 3 l6 -6`}
                      fill="none"
                      stroke="#4ade80"
                      strokeWidth="1.4"
                    />
                  ) : (
                    <text
                      x={x + 9}
                      y={y + 28}
                      fontSize="5.5"
                      fill={state ? "#f87171" : "#7d8590"}
                      fontFamily={MONO}
                    >
                      {state ? "due yesterday" : "due Fri"}
                    </text>
                  )}
                  <circle
                    cx={x + 58}
                    cy={y + 25}
                    r="4"
                    fill={["#a78bfa", "#38bdf8", "#f97316"][(c + i) % 3]}
                  />
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

function FitnessPlan() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const load = [0.7, 0.45, 0.9, 0.3, 0.8, 0.6, 0.15];
  return (
    <svg
      viewBox="0 0 324 180"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <Pane x="12" y="10" width="170" height="150" />
      <text x="22" y="25" fontSize="7" fill="#7d8590" fontFamily={MONO}>
        THIS WEEK · AI PLAN
      </text>
      {load.map((v, i) => {
        const h = 78 * v;
        return (
          <g key={i}>
            <rect
              x={26 + i * 21}
              y={112 - h}
              width="13"
              height={h}
              rx="3"
              fill="#a8ff78"
              opacity={0.35 + 0.6 * v}
            />
            <text
              x={32.5 + i * 21}
              y="122"
              fontSize="6"
              fill="#7d8590"
              textAnchor="middle"
              fontFamily={MONO}
            >
              {days[i]}
            </text>
          </g>
        );
      })}
      <Pane x="192" y="10" width="120" height="70" />
      <text x="202" y="25" fontSize="7" fill="#7d8590" fontFamily={MONO}>
        TODAY
      </text>
      {[
        ["Squats", "4×8"],
        ["Bench press", "4×6"],
        ["Plank", "3×60s"],
      ].map(([n, r], i) => (
        <g key={n}>
          <text x="202" y={39 + i * 12} fontSize="7" fill="#e6edf3">
            {n}
          </text>
          <text
            x="302"
            y={39 + i * 12}
            fontSize="6.5"
            fill="#a8ff78"
            textAnchor="end"
            fontFamily={MONO}
          >
            {r}
          </text>
        </g>
      ))}
      <Pane x="192" y="88" width="120" height="40" />
      {/* Voice narration waveform */}
      {Array.from({ length: 26 }, (_, i) => {
        // Rounded: Node and the browser can differ in the last digit of sin/cos, which breaks hydration
        const h =
          Math.round(
            (4 + 14 * Math.abs(Math.sin(i * 0.9) * Math.cos(i * 0.37))) * 100,
          ) / 100;
        return (
          <rect
            key={i}
            x={200 + i * 4.1}
            y={108 - h / 2}
            width="2.2"
            height={h}
            rx="1.1"
            fill="#78ffd6"
            opacity="0.8"
          />
        );
      })}
    </svg>
  );
}

const ART = {
  heatmap: SlideHeatmap,
  cameras: CameraGrid,
  detections: DetectionBoxes,
  tickets: TicketDesk,
  feed: SocialFeed,
  chat: ChatWindow,
  kanban: KanbanBoard,
  fitness: FitnessPlan,
};

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
