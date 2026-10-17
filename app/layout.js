import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  style: ["normal", "italic"],
});
const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Aniket Sharma | Data Scientist & Software Engineer",
  description:
    "Data Scientist and Software Engineer building AI-powered products end to end: LLM pipelines in Python and FastAPI, shipped as scalable apps with React, Next.js and Node.js.",
  keywords: [
    "Data Scientist",
    "Software Engineer",
    "Full Stack Developer",
    "Python",
    "LLM",
    "React",
    "Node.js",
    "Next.js",
    "AI",
    "Aniket Sharma",
  ],
  authors: [{ name: "Aniket Sharma" }],
  openGraph: {
    title: "Aniket Sharma | Data Scientist & Software Engineer",
    description:
      "Building AI-powered products end to end, from data and LLMs to production apps.",
    url: "https://portfolio-main-86tq.vercel.app/",
    siteName: "Aniket Sharma Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${sans.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
