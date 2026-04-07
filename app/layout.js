import "./globals.css";

export const metadata = {
  title: "Aniket Sharma | Full Stack Developer (React, Node.js, AI)",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, NestJS, and AI integrations. Building scalable apps and AI-powered developer tools.",
  keywords: ["Full Stack Developer", "React", "Node.js", "Next.js", "AI", "TypeScript", "Aniket Sharma"],
  authors: [{ name: "Aniket Sharma" }],
  openGraph: {
    title: "Aniket Sharma | Full Stack Developer",
    description: "Building scalable apps & AI-powered developer tools.",
    url: "https://portfolio-main-86tq.vercel.app/",
    siteName: "Aniket Sharma Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
