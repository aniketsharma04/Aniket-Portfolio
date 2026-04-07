export const personal = {
  name: "Aniket Sharma",
  role: "Full Stack Developer",
  tagline: "Hi — I'm Aniket Sharma, a full stack developer building scalable apps & AI-powered developer tools",
  description:
    "I bridge the gap between ideas and production-ready software. Using React, Node.js, Next.js, NestJS, and AI APIs, I build accessible, performant applications that scale reliably across all environments.",
  about: [
    "I'm a <strong>Full Stack Developer</strong> and B.Tech student at IIIT Nagpur, specialising in Electronics and Communication Engineering (graduating May 2026). I design and build clean, scalable web applications and developer tools using React, Node.js, Next.js, NestJS, and AI APIs.",
    "Currently at <strong>Navyug Infosolutions</strong>, I'm building a full-stack AI coding assistant as a VS Code extension — integrating OpenClaw's agent gateway with Gemini and Ollama LLMs, a FastAPI backend, real-time WebSocket streaming, and a ClawHub skills marketplace for one-click install of 50+ agent skills.",
    "I care a lot about performance, clean architecture, and maintainable code so teams can iterate quickly with confidence. Outside work I enjoy competitive programming and experimenting with AI tooling.",
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
    resume: "https://drive.google.com/file/d/1OwY6xT8F4j2LVyxWSdj8iI5OXB5HY-E-/view?usp=drive_link",
    playcafe: "https://playcafe.in",
  },
  stats: [
    { value: "500+", label: "Problems Solved", link: "https://github.com/aniketsharma04" },
    { value: "1905+", label: "CodeChef Rating ↗", link: "https://codechef.com/users/anikets_iiitn" },
    { value: "2", label: "Internships ↗", link: "https://linkedin.com/in/aniket-sharma-07ba6617b/" },
    { value: "4 ★", label: "CodeChef Stars ↗", link: "https://codechef.com/users/anikets_iiitn" },
  ],
  aboutCards: [
    { title: "Education", value: "B.Tech ECE — IIIT Nagpur (Expected May 2026)" },
    { title: "Currently", value: "SWE Intern — Navyug Infosolutions (AI Team)" },
    { title: "Location", value: "Faridabad, India · Open to Remote" },
    { title: "Previous", value: "Full Stack Intern — PlayGG, Jaipur" },
  ],
  bio: "I build scalable full-stack apps and AI-driven developer tools, with a strong focus on clean code, performance, and real-world impact. I work with stacks like React, Next.js, Node.js, NestJS, MongoDB, MySQL, Redis, and Gemini API.",
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
  stack: ["React", "Next.js", "Node.js", "TypeScript", "NestJS", "MongoDB"],
};

export const experience = [
  {
    side: "left",
    date: "Jan 2026 – Present",
    emoji: "💼",
    role: "Software Engineering Intern",
    company: "Navyug Infosolutions · AI Team · Noida",
    description:
      "Architected and developed a full-stack AI coding assistant as a VS Code extension, integrating OpenClaw's agent orchestration gateway with Gemini and Ollama LLMs. Built a three-tier architecture — TypeScript webview frontend, async FastAPI backend, and WebSocket-based gateway. Shipped a ClawHub skills marketplace with 50+ agent skills and engineered production-grade resilience with Redis caching, retry logic, and runId-filtered streaming. ~4,000 lines of production code.",
    tags: ["#VS Code API", "#TypeScript", "#Python", "#FastAPI", "#OpenClaw SDK", "#Gemini API", "#WebSocket", "#Redis", "#LLM Integration"],
    liveLink: null,
  },
  {
    side: "right",
    date: "Aug 2025 – Nov 2025",
    emoji: "💼",
    role: "Full Stack Developer Intern",
    company: "PlayGG · Jaipur",
    description:
      "Engineered a cafe management dashboard with Next.js 15 and NestJS supporting real-time bookings, inventory tracking, and payments for 20+ device categories. Architected modular booking and food-ordering workflows with TypeORM and MySQL, ensuring reliable cart sync and session handling. Designed responsive UI with Tailwind CSS and React Query with real-time notifications.",
    tags: ["#Next.js 15", "#NestJS", "#TypeORM", "#MySQL", "#React Query", "#Tailwind CSS"],
    liveLink: "https://playcafe.in",
  },
  {
    side: "left",
    date: "2022 – May 2026",
    emoji: "🎓",
    role: "B.Tech — Electronics & Communication Engineering",
    company: "Indian Institute of Information Technology, Nagpur",
    description:
      "Pursuing core computer science subjects alongside ECE fundamentals. Active competitive programmer — 500+ problems solved across platforms. Achieved 4-star CodeChef rating (1905+) and 1775+ rating on GeeksForGeeks.",
    tags: ["#DSA", "#System Design", "#Competitive Programming", "#IIIT Nagpur"],
    liveLink: null,
  },
  {
    side: "right",
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

export const projects = [
  {
    emoji: "🚇",
    bgFrom: "#004e92", bgTo: "#000428",
    tags: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "Socket.io"],
    name: "Metro Diaries",
    desc: "A Delhi Metro travel companion platform where commuters post their trips and find co-travelers on the same route. Features real-time chat (WebSocket), Dijkstra-based route finder across 250+ stations, connection requests, identity verification with face detection (MediaPipe), and an MDX blog — all with Google OAuth via Supabase.",
    link: "https://metrodiaries.in",
    linkLabel: "Live demo", linkType: "external",
  },
  {
    emoji: "🛠️",
    bgFrom: "#1a1a2e", bgTo: "#16213e",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    name: "Customer Service Platform",
    desc: "A comprehensive customer service platform with ticket management, live chat support, and automated response systems. Integrated Intercom API for real-time messaging, reducing average first response time to under 1 minute. Handles 500+ concurrent support tickets.",
    link: "https://github.com/aniketsharma04/Customer-Service-Platform",
    linkLabel: "Case study", linkType: "github",
  },
  {
    emoji: "🔗",
    bgFrom: "#0f2027", bgTo: "#2c5364",
    tags: ["React", "TypeScript", "Appwrite", "Tailwind CSS"],
    name: "Connect App",
    desc: "A JWT-secure social platform with real-time CRUD via Appwrite, supporting 1000+ test users with sub-200ms latency. Enhanced API efficiency by 45% using React Query caching and optimistic updates. Features an explore feed with infinite scroll.",
    link: "https://github.com/aniketsharma04/ConnectApp",
    linkLabel: "Case study", linkType: "github",
  },
  {
    emoji: "💬",
    bgFrom: "#1a0a00", bgTo: "#2d1300",
    tags: ["React.js", "Node.js", "MongoDB", "Socket.io"],
    name: "Real-time Chatting Application",
    desc: "A full-stack real-time chat application enabling instant messaging with multiple users. Features include message persistence, user authentication, typing indicators, and group chat functionality with Socket.io integration.",
    link: "https://github.com/aniketsharma04",
    linkLabel: "Case study", linkType: "github",
  },
  {
    emoji: "✅",
    bgFrom: "#0a1628", bgTo: "#1a2a48",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    name: "Task Management Application",
    desc: "A comprehensive task management system with features for organizing, prioritizing, and tracking work progress. Includes task categories, due dates, progress tracking, team collaboration, and deadline notifications.",
    link: "https://github.com/aniketsharma04/Task-Manager",
    linkLabel: "Case study", linkType: "github",
  },
  {
    emoji: "🌐",
    bgFrom: "#0e1117", bgTo: "#1a2332",
    tags: ["React.js", "CSS3", "JavaScript", "Responsive Design"],
    name: "Portfolio Website",
    desc: "A responsive personal portfolio website built with React.js to showcase projects, skills, and professional experience. Features include smooth scrolling navigation, contact form integration, and optimized performance across all devices.",
    link: "https://portfolio-main-86tq.vercel.app/",
    linkLabel: "Live demo", linkType: "external",
  },
  {
    emoji: "🤖",
    bgFrom: "#0e170e", bgTo: "#1a321a",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI/Gemini", "ElevenLabs", "Supabase"],
    name: "Fit AI Coach",
    desc: "Developing — An AI-powered fitness assistant built with Next.js that generates personalized workout and diet plans using LLMs. Features AI-generated exercise routines, personalized meal plans, voice narration, AI image generation, PDF export, and dark/light mode.",
    link: "https://github.com/aniketsharma04/FitAI_Coach",
    linkLabel: "Case study", linkType: "github",
  },
];

export const testimonials = [
  {
    initials: "SK", name: "Senior Developer", role: "AI Team · Navyug Infosolutions",
    text: '"Aniket picked up the VS Code extension API and Gemini integration incredibly fast. The orchestration pipeline he designed is clean, robust, and genuinely production-ready. A strong problem-solver."',
  },
  {
    initials: "PM", name: "Tech Lead", role: "Full Stack · PlayGG, Jaipur",
    text: '"Delivered the entire cafe management dashboard — real-time features, modular workflows, clean UI — on schedule. Aniket writes maintainable code that\'s easy to build on."',
  },
  {
    initials: "CP", name: "Classmate, IIIT Nagpur", role: "B.Tech ECE · Batch 2022–26",
    text: '"One of the most consistent competitive programmers in our batch. A 4-star on CodeChef and 500+ problems solved — Aniket brings the same rigour to every project he builds."',
  },
  {
    initials: "AR", name: "Project Collaborator", role: "Open Source · Remote",
    text: '"The Connect App\'s infinite scroll and React Query caching felt seamless even at scale. Aniket has a rare ability to balance developer experience with end-user performance."',
  },
];

export const blogs = [
  {
    emoji: "🧠", bgFrom: "#0e1117", bgTo: "#1a2332",
    date: "Feb 12, 2026", category: "AI",
    title: "Building a VS Code Extension with Gemini API for Auto Test Generation",
    snippet: "How I architected a multi-stage AI orchestration pipeline with language detection, prompt optimization, and retry logic for reliable unit test generation.",
  },
  {
    emoji: "⚡", bgFrom: "#0e170e", bgTo: "#1a321a",
    date: "Jan 5, 2026", category: "React",
    title: "Boosting API Efficiency 45% with React Query and Optimistic Updates",
    snippet: "A practical breakdown of how React Query's caching strategies and optimistic mutations dramatically improve perceived performance in a social app.",
  },
  {
    emoji: "🏗️", bgFrom: "#170e0e", bgTo: "#321a1a",
    date: "Dec 10, 2025", category: "Backend",
    title: "NestJS vs Express.js: When to Use Each for Scalable Node.js APIs",
    snippet: "A deep dive into architectural differences and real-world scenarios where NestJS's opinionated structure pays off over Express's flexibility.",
  },
];
