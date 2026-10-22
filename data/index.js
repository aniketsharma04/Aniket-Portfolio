// The site can be viewed through three lenses, picked with the switch in the
// hero or shared directly as /?focus=swe or /?focus=ds. "all" is the default.
export const focusViews = {
  all: {
    label: "All",
    role: "Data Scientist & Software Engineer",
    availability: "Open to Data Science & Software Engineering roles",
    tagline:
      "Hi, I'm Aniket Sharma, a data scientist and software engineer building AI systems end to end, from models to production web apps and apps",
    description:
      "At Navyug Infosolutions I build deep learning, computer vision and GenAI systems for healthcare, industrial and enterprise clients, and the software that ships them: FastAPI backends, agentic LLM pipelines and full-stack apps with React and Next.js.",
    stack: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "GenAI / LLMs",
      "FastAPI",
      "React",
      "Next.js",
      "Node.js",
    ],
    // Grouped skills (no percentage bars) for views that cover data science
    skillGroups: [
      {
        name: "Machine Learning & Deep Learning",
        items: [
          "Python",
          "PyTorch",
          "scikit-learn",
          "Hugging Face Transformers",
          "Statistics",
        ],
      },
      {
        name: "Computer Vision & GenAI",
        items: [
          "OpenCV",
          "YOLO",
          "OCR",
          "Vision-Language Models",
          "LangGraph",
          "LLM Fine-Tuning (LoRA/QLoRA)",
        ],
      },
      {
        name: "Software Engineering",
        items: [
          "React / Next.js",
          "TypeScript",
          "Node.js / NestJS",
          "FastAPI",
          "SQL / MongoDB",
          "Redis",
        ],
      },
      {
        name: "Data & MLOps",
        items: [
          "Pandas",
          "NumPy",
          "Data Visualization",
          "MLflow",
          "Azure",
          "Git",
        ],
      },
    ],
  },
  swe: {
    label: "Software Engineer",
    workLabel: "software engineering",
    role: "Software Engineer",
    availability: "Open to Software Engineering roles",
    tagline:
      "Hi, I'm Aniket Sharma, a software engineer building scalable apps & AI-powered developer tools",
    description:
      "I bridge the gap between ideas and production-ready software. Using React, Node.js, Next.js, NestJS, and AI APIs, I build accessible, performant applications that scale reliably across all environments.",
    stack: ["React", "Next.js", "Node.js", "TypeScript", "NestJS", "MongoDB"],
    skills: [
      { name: "React / Next.js", value: 92 },
      { name: "JavaScript / TypeScript", value: 90 },
      { name: "Node.js / Express / NestJS", value: 85 },
      { name: "HTML / CSS / Tailwind", value: 90 },
      { name: "MongoDB / MySQL", value: 82 },
      { name: "AI / LLM Integration", value: 80 },
      { name: "C++ / DSA", value: 88 },
      { name: "Redis", value: 75 },
    ],
  },
  ds: {
    label: "Data Scientist",
    workLabel: "data science",
    role: "Data Scientist",
    availability: "Open to Data Science roles",
    tagline:
      "Hi, I'm Aniket Sharma, a data scientist building deep learning, computer vision and GenAI systems that make it to production",
    description:
      "On the AI team at Navyug Infosolutions I build end-to-end ML systems for healthcare, industrial and enterprise clients, from weakly-supervised medical imaging and real-time object detection to OCR with vision-language models and LLM fine-tuning. I focus on turning complex data into reliable, high-impact systems.",
    stack: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "YOLO",
      "Vision-Language Models",
      "LangGraph",
      "MLflow",
    ],
    skillGroups: [
      {
        name: "Machine Learning & Deep Learning",
        items: [
          "Python",
          "PyTorch",
          "scikit-learn",
          "Hugging Face Transformers",
          "Machine Learning",
          "Deep Learning",
          "Statistics",
        ],
      },
      {
        name: "Computer Vision",
        items: ["OpenCV", "YOLO", "OCR", "Vision-Language Models"],
      },
      {
        name: "Generative AI",
        items: ["LangGraph", "LLM Fine-Tuning (LoRA/QLoRA)", "Generative AI"],
      },
      {
        name: "Data & MLOps",
        items: [
          "SQL",
          "Pandas",
          "NumPy",
          "Data Visualization",
          "MLflow",
          "FastAPI",
          "Azure",
          "Git",
        ],
      },
    ],
  },
};

export const personal = {
  name: "Aniket Sharma",
  role: focusViews.all.role,
  about: [
    "I'm a <strong>Data Scientist &amp; Software Engineer</strong> on the AI team at <strong>Navyug Infosolutions</strong>, with a B.Tech in Electronics and Communication Engineering from IIIT Nagpur (2022–2026). I work across deep learning, computer vision and generative AI, and I build the software that takes those models to production.",
    "As a <strong>data scientist</strong>, I've built a weakly-supervised deep-learning pipeline that classifies gigapixel breast-cancer slides for Dr. Lal PathLabs (0.99–1.00 slide-level AUC), a 12-camera steel-plate tracking and OCR system for JSW Steel, and a production PPE-detection system for HMEL. As a <strong>software engineer</strong>, I've built a LangGraph agentic pipeline for compliance control testing and a full-stack AI coding assistant as a VS Code extension.",
    "I care a lot about rigorous evaluation, clean architecture, and maintainable code so teams can iterate quickly with confidence. Outside work I enjoy competitive programming and experimenting with AI tooling.",
  ],
  location: "Faridabad, India",
  openTo: "Remote, Full-time, Internship, On-site (Open to Relocate Anywhere)",
  email: "aniket.sharma.ani04@gmail.com",
  phone: "+91-9868459890",
  links: {
    linkedin: "https://linkedin.com/in/aniket-sharma-07ba6617b/",
    github: "https://github.com/aniketsharma04",
    portfolio: "https://portfolio-main-86tq.vercel.app/",
    codechef: "https://codechef.com/users/anikets_iiitn",
    gfg: "https://geeksforgeeks.org/user/aniketshaul0x/",
    instagram: "https://instagram.com/aniketsharma054",
    resume:
      "https://drive.google.com/file/d/1OwY6xT8F4j2LVyxWSdj8iI5OXB5HY-E-/view?usp=drive_link",
    playcafe: "https://playcafe.in",
  },
  stats: [
    {
      value: "500+",
      label: "Problems Solved",
      link: "https://github.com/aniketsharma04",
    },
    {
      value: "1905+",
      label: "CodeChef Rating ↗",
      link: "https://codechef.com/users/anikets_iiitn",
    },
    {
      value: "2",
      label: "Internships ↗",
      link: "https://linkedin.com/in/aniket-sharma-07ba6617b/",
    },
    {
      value: "4 ★",
      label: "CodeChef Stars ↗",
      link: "https://codechef.com/users/anikets_iiitn",
    },
  ],
  aboutCards: [
    { title: "Education", value: "B.Tech ECE, IIIT Nagpur (2022–2026)" },
    {
      title: "Currently",
      value:
        "Data Scientist & Software Engineer at Navyug Infosolutions (AI Team)",
    },
    { title: "Location", value: "Faridabad, India · Open to Remote" },
    { title: "Previous", value: "Full Stack Intern at PlayGG, Jaipur" },
  ],
  bio: "I build AI systems end to end, from deep learning and computer vision models in PyTorch to the FastAPI backends and full-stack apps that ship them, with a strong focus on rigorous evaluation, clean code, and real-world impact.",
};

export const experience = [
  {
    side: "left",
    date: "Sep 2026 – Jan 2027 · Contract",
    emoji: "💼",
    role: "Forward Deployed Engineer (Software Engineer)",
    company: "Lazer Gametech Pvt. Ltd. · PlayGG · Freelance",
    description:
      "Building PlayGG's Android/iOS app and PlayCafe, the dashboard gaming cafés run their counter on. The mobile app brings PlayGG's BGMI and Valorant tournament platform to phones, in Expo / React Native and TypeScript on a FastAPI backend (PostgreSQL, Redis, Cloudflare R2): tournament discovery, squad creation and invites, captain roster controls, and match-day lobbies, room reveals and disputes ported line for line from the website so both always agree. Auth uses a per-user JWT in the phone's secure keystore with no secrets in the app; Play Store launch is next. PlayCafe (live, Next.js 15 + NestJS / TypeORM) handles live bookings split per device, so staff can extend, re-price or bill one console without touching the rest, plus block-based pricing, split cash + online payments, device, food and game inventory, and revenue history with PDF export.",
    tags: [
      "#React Native",
      "#Expo",
      "#TypeScript",
      "#FastAPI",
      "#PostgreSQL",
      "#Redis",
      "#Next.js 15",
      "#NestJS",
      "#TypeORM",
    ],
    liveLink: "https://playcafe.in",
  },
  {
    side: "right",
    date: "Jan 2026 – Present",
    emoji: "💼",
    role: "Data Scientist & Software Engineer",
    company: "Navyug Infosolutions Pvt. Ltd. · AI Team · Noida (On-site)",
    description:
      "Design, build and deploy machine learning, computer-vision and GenAI solutions for healthcare, industrial and enterprise clients, from data preparation and model development through to production. Client work includes breast-cancer whole-slide image classification (Dr. Lal PathLabs), steel-plate tracking and ID recognition (JSW Steel) and PPE detection (HMEL). On the engineering side, built a LangGraph agentic orchestration pipeline for compliance control testing and a full-stack AI coding-assistant VS Code extension on a FastAPI backend.",
    tags: [
      "#Python",
      "#PyTorch",
      "#Computer Vision",
      "#YOLO",
      "#VLMs",
      "#LangGraph",
      "#FastAPI",
      "#TypeScript",
      "#MLflow",
    ],
    liveLink: null,
    // Replaces the fields above in that view
    byFocus: {
      ds: {
        role: "Data Scientist",
        description:
          "Design, build and deploy machine learning, computer-vision and GenAI solutions for healthcare, industrial and enterprise clients, from data preparation and model development through to production. Built a weakly-supervised deep-learning pipeline for breast-cancer whole-slide image classification (Dr. Lal PathLabs), a 12-camera steel-plate tracking and ID-recognition system (JSW Steel) and a production PPE-detection system (HMEL), plus a LangGraph agentic orchestration pipeline for compliance control testing (5-stage planner sub-graph, executor/evaluator loop, recovery router).",
        tags: [
          "#Python",
          "#PyTorch",
          "#Multiple-Instance Learning",
          "#Computer Vision",
          "#YOLO11",
          "#OCR",
          "#VLMs",
          "#LangGraph",
          "#MLflow",
        ],
      },
      swe: {
        role: "Software Engineer",
        description:
          "Architected and developed a full-stack AI coding assistant as a VS Code extension, integrating OpenClaw's agent orchestration gateway with Gemini and Ollama LLMs. Built a three-tier architecture: TypeScript webview frontend, async FastAPI backend, and WebSocket-based gateway. Shipped a ClawHub skills marketplace with 50+ agent skills and engineered production-grade resilience with Redis caching, retry logic, and runId-filtered streaming (~4,000 lines of production code). Also built a LangGraph agentic orchestration pipeline for compliance control testing (5-stage planner sub-graph, executor/evaluator loop, recovery router).",
        tags: [
          "#VS Code API",
          "#TypeScript",
          "#Python",
          "#FastAPI",
          "#LangGraph",
          "#Gemini API",
          "#WebSocket",
          "#Redis",
          "#LLM Integration",
        ],
      },
    },
  },
  {
    side: "left",
    date: "Aug 2025 – Nov 2025",
    emoji: "💼",
    role: "Full Stack Developer Intern",
    company: "PlayGG · Jaipur",
    description:
      "Engineered a cafe management dashboard with Next.js 15 and NestJS supporting real-time bookings, inventory tracking, and payments for 20+ device categories. Architected modular booking and food-ordering workflows with TypeORM and MySQL, ensuring reliable cart sync and session handling. Designed responsive UI with Tailwind CSS and React Query with real-time notifications.",
    tags: [
      "#Next.js 15",
      "#NestJS",
      "#TypeORM",
      "#MySQL",
      "#React Query",
      "#Tailwind CSS",
    ],
    liveLink: "https://playcafe.in",
  },
  {
    side: "right",
    date: "2022 – 2026",
    emoji: "🎓",
    role: "B.Tech in Electronics & Communication Engineering",
    company: "Indian Institute of Information Technology, Nagpur",
    description:
      "Studied core computer science subjects alongside ECE fundamentals. Active competitive programmer with 500+ problems solved across platforms. Achieved 4-star CodeChef rating (1905+) and 1775+ rating on GeeksForGeeks.",
    tags: [
      "#DSA",
      "#System Design",
      "#Competitive Programming",
      "#IIIT Nagpur",
    ],
    liveLink: null,
  },
  {
    side: "left",
    date: "Mar 2022",
    emoji: "🎓",
    role: "Senior Secondary Certificate (CBSE)",
    company: "Kendriya Vidyalaya No. 1, Faridabad",
    description:
      "Completed Senior Secondary with 85% in the Science stream. Developed strong analytical foundations that underpin my approach to software engineering today.",
    tags: ["#CBSE", "#Science Stream", "#85%"],
    liveLink: null,
  },
];

// Card thumbnails, first match wins:
//   video: "/projects/x.mp4"  loops muted while the card is on screen (image is used as its still frame)
//   image: "/projects/x.png"  screenshot
//   visual: { kind, headline, caption }  illustrated card for confidential client work
//   otherwise the emoji on a gradient
export const projects = [
  // Client work at Navyug has no public links, so `org` is shown instead
  {
    emoji: "🔬",
    bgFrom: "#3a0d2e",
    bgTo: "#14060f",
    tags: ["Python", "PyTorch", "MIL (CLAM)", "Computer Vision"],
    name: "Breast Cancer Whole-Slide Image Classification",
    org: "Dr. Lal PathLabs · via Navyug",
    tracks: ["ds"],
    video: "/projects/dlpl.mp4",
    image: "/projects/dlpl-poster.jpg",
    visual: {
      kind: "heatmap",
      headline: "0.99–1.00 AUC",
      caption: "Slide-level · BRACS / TCGA / Post-NAT",
    },
    desc: "A weakly-supervised deep-learning pipeline (CLAM attention-based Multiple-Instance Learning) that classifies gigapixel breast-cancer slides as tumor vs. normal from slide-level labels alone. Moving from a ResNet50 baseline to pathology foundation encoders (UNI, CONCH) and fixing a 20x/40x scanner mismatch lifted results to 0.99–1.00 slide-level AUC and up to 98.99% accuracy on BRACS/TCGA/Post-NAT. Attention heatmaps were validated against expert pathologist annotations (0.9964 ROI AUC), within a 6-stage pipeline using patient-grouped 5-fold cross-validation and a 100-slide held-out set.",
    link: null,
  },
  {
    emoji: "🏭",
    bgFrom: "#2b2f36",
    bgTo: "#0f1114",
    tags: ["Python", "Computer Vision", "OCR", "VLMs"],
    name: "Steel Plate Tracking & ID Recognition",
    org: "JSW Steel · via Navyug",
    tracks: ["ds"],
    visual: {
      kind: "cameras",
      headline: "12 cameras · plate lineage",
      caption: "ID marking → cutting → stacking",
    },
    desc: "In progress: a computer-vision system that tracks steel plates across a 12-camera finishing line, from ID marking through cutting and stacking, including parent-to-child plate lineage after cutting. Benchmarked plate-ID OCR with GPT and Claude Haiku vision-language models against ground-truth IDs; now fine-tuning open-source models to replace paid APIs and cut inference cost at scale.",
    link: null,
  },
  {
    emoji: "🦺",
    bgFrom: "#4a3000",
    bgTo: "#1a1100",
    tags: ["Python", "YOLO11", "OpenCV", "MLflow"],
    name: "PPE Detection System",
    org: "HMEL (HPCL-Mittal Energy Ltd) · via Navyug",
    tracks: ["ds"],
    visual: {
      kind: "detections",
      headline: "Green / Red / Gray",
      caption: "Tri-state PPE verdicts on refinery CCTV",
    },
    desc: "A production PPE-compliance system (YOLO11 detector + rules engine) monitoring helmets, glasses, vests, gloves and boots on refinery CCTV feeds, with a tri-state Green/Red/Gray verdict that avoids false alarms when body zones are out of frame. Extending it with negative-class training on a frozen backbone to avoid catastrophic forgetting, MLflow experiment tracking, and YOLO26's P2 small-object head for distant-worker detection.",
    link: null,
  },
  {
    emoji: "🚇",
    bgFrom: "#004e92",
    bgTo: "#000428",
    tags: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "Socket.io"],
    name: "Metro Diaries",
    tracks: ["swe", "ds"],
    video: "/projects/metro-diaries.mp4",
    image: "/projects/metro-diaries.png",
    desc: "A Delhi Metro travel companion platform where commuters post their trips and find co-travelers on the same route. Features real-time chat (WebSocket), Dijkstra-based route finder across 250+ stations, connection requests, identity verification with face detection (MediaPipe), and an MDX blog, all with Google OAuth via Supabase.",
    link: "https://metrodiaries.in",
    linkLabel: "Live at metrodiaries.in",
    linkType: "external",
  },
  {
    emoji: "🛠️",
    bgFrom: "#1a1a2e",
    bgTo: "#16213e",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    name: "Customer Service Platform",
    tracks: ["swe"],
    desc: "A comprehensive customer service platform with ticket management, live chat support, and automated response systems. Integrated Intercom API for real-time messaging, reducing average first response time to under 1 minute. Handles 500+ concurrent support tickets.",
    link: "https://github.com/aniketsharma04/Customer-Service-Platform",
    linkLabel: "Case study",
    linkType: "github",
  },
  {
    emoji: "🔗",
    bgFrom: "#0f2027",
    bgTo: "#2c5364",
    tags: ["React", "TypeScript", "Appwrite", "Tailwind CSS"],
    name: "Connect App",
    tracks: ["swe"],
    desc: "A JWT-secure social platform with real-time CRUD via Appwrite, supporting 1000+ test users with sub-200ms latency. Enhanced API efficiency by 45% using React Query caching and optimistic updates. Features an explore feed with infinite scroll.",
    link: "https://github.com/aniketsharma04/ConnectApp",
    linkLabel: "Case study",
    linkType: "github",
  },
  {
    emoji: "💬",
    bgFrom: "#1a0a00",
    bgTo: "#2d1300",
    tags: ["React.js", "Node.js", "MongoDB", "Socket.io"],
    name: "Real-time Chatting Application",
    tracks: ["swe"],
    desc: "A full-stack real-time chat application enabling instant messaging with multiple users. Features include message persistence, user authentication, typing indicators, and group chat functionality with Socket.io integration.",
    link: "https://github.com/aniketsharma04",
    linkLabel: "Case study",
    linkType: "github",
  },
  {
    emoji: "✅",
    bgFrom: "#0a1628",
    bgTo: "#1a2a48",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    name: "Task Management Application",
    tracks: ["swe"],
    video: "/projects/pro-manage.mp4",
    image: "/projects/pro-manage-poster.jpg",
    desc: "A comprehensive task management system with features for organizing, prioritizing, and tracking work progress. Includes task categories, due dates, progress tracking, team collaboration, and deadline notifications.",
    link: "https://github.com/aniketsharma04/Task-Manager",
    linkLabel: "Case study",
    linkType: "github",
  },
  {
    emoji: "🌐",
    bgFrom: "#0e1117",
    bgTo: "#1a2332",
    tags: ["Next.js 16", "React 19", "CSS", "JavaScript"],
    name: "Portfolio Website",
    tracks: ["swe"],
    image: "/projects/portfolio.png",
    desc: "A modern, high-performance personal portfolio built with Next.js 16 (App Router) and React 19. One shareable link with Data Scientist and Software Engineer views, content driven from data/index.js, responsive dark/light mode, and SEO-optimized architecture.",
    link: "https://portfolio-main-86tq.vercel.app/",
    linkLabel: "Live demo",
    linkType: "external",
  },
  {
    emoji: "🤖",
    bgFrom: "#0e170e",
    bgTo: "#1a321a",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI/Gemini",
      "ElevenLabs",
      "Supabase",
    ],
    name: "Fit AI Coach",
    tracks: ["swe", "ds"],
    desc: "In development: an AI-powered fitness assistant built with Next.js that generates personalized workout and diet plans using LLMs. Features AI-generated exercise routines, personalized meal plans, voice narration, AI image generation, PDF export, and dark/light mode.",
    link: "https://github.com/aniketsharma04/FitAI_Coach",
    linkLabel: "Case study",
    linkType: "github",
  },
];

export const testimonials = [
  {
    initials: "SK",
    name: "Senior Developer",
    role: "AI Team · Navyug Infosolutions",
    text: '"Aniket picked up the VS Code extension API and Gemini integration incredibly fast. The orchestration pipeline he designed is clean, robust, and genuinely production-ready. A strong problem-solver."',
  },
  {
    initials: "PM",
    name: "Tech Lead",
    role: "Full Stack · PlayGG, Jaipur",
    text: '"Delivered the entire cafe management dashboard (real-time features, modular workflows, clean UI) on schedule. Aniket writes maintainable code that\'s easy to build on."',
  },
  {
    initials: "CP",
    name: "Classmate, IIIT Nagpur",
    role: "B.Tech ECE · Batch 2022–26",
    text: '"One of the most consistent competitive programmers in our batch. A 4-star on CodeChef and 500+ problems solved. Aniket brings the same rigour to every project he builds."',
  },
  {
    initials: "AR",
    name: "Project Collaborator",
    role: "Open Source · Remote",
    text: '"The Connect App\'s infinite scroll and React Query caching felt seamless even at scale. Aniket has a rare ability to balance developer experience with end-user performance."',
  },
];

export const blogs = [
  {
    emoji: "🧠",
    bgFrom: "#0e1117",
    bgTo: "#1a2332",
    date: "Feb 12, 2026",
    category: "AI",
    title:
      "Building a VS Code Extension with Gemini API for Auto Test Generation",
    snippet:
      "How I architected a multi-stage AI orchestration pipeline with language detection, prompt optimization, and retry logic for reliable unit test generation.",
  },
  {
    emoji: "⚡",
    bgFrom: "#0e170e",
    bgTo: "#1a321a",
    date: "Jan 5, 2026",
    category: "React",
    title:
      "Boosting API Efficiency 45% with React Query and Optimistic Updates",
    snippet:
      "A practical breakdown of how React Query's caching strategies and optimistic mutations dramatically improve perceived performance in a social app.",
  },
  {
    emoji: "🏗️",
    bgFrom: "#170e0e",
    bgTo: "#321a1a",
    date: "Dec 10, 2025",
    category: "Backend",
    title: "NestJS vs Express.js: When to Use Each for Scalable Node.js APIs",
    snippet:
      "A deep dive into architectural differences and real-world scenarios where NestJS's opinionated structure pays off over Express's flexibility.",
  },
];
