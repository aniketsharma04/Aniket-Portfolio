import "./globals.css";

export const metadata = {
  title: "Aniket Sharma | Data Scientist & Software Engineer",
  description:
    "Data Scientist and Software Engineer building AI-powered products end to end: LLM pipelines in Python and FastAPI, shipped as scalable apps with React, Next.js and Node.js.",
  keywords: ["Data Scientist", "Software Engineer", "Full Stack Developer", "Python", "LLM", "React", "Node.js", "Next.js", "AI", "Aniket Sharma"],
  authors: [{ name: "Aniket Sharma" }],
  openGraph: {
    title: "Aniket Sharma | Data Scientist & Software Engineer",
    description: "Building AI-powered products end to end, from data and LLMs to production apps.",
    url: "https://portfolio-main-86tq.vercel.app/",
    siteName: "Aniket Sharma Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
