# Aniket Sharma — Portfolio (Next.js)

A clean, dark-themed personal portfolio inspired by Jillur Rahman's design, built with **Next.js 14 App Router**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → open http://localhost:3000

# Build for production
npm run build
npm start
```

## 📁 Project Structure

```
aniket-portfolio/
├── app/
│   ├── layout.js        # Root layout + metadata + Google Fonts
│   ├── page.js          # Main page (assembles all sections)
│   └── globals.css      # All styles (CSS variables, dark/light theme)
├── components/
│   ├── Sidebar.jsx      # Fixed left sidebar + nav + socials
│   ├── Hero.jsx         # Landing section with stats banner
│   ├── About.jsx        # Bio, skill bars, about cards
│   ├── Experience.jsx   # Alternating timeline layout
│   ├── Projects.jsx     # 6-project grid
│   ├── Blog.jsx         # 3 article cards
│   ├── Testimonials.jsx # 2-column recommendation cards
│   ├── Contact.jsx      # Contact form + details
│   └── Footer.jsx       # Footer with newsletter + theme toggle
└── data/
    └── index.js         # ✏️ All your content & links in one place
```

## ✏️ Updating Your Content

All content lives in **`data/index.js`** — just edit that file:

- Update links (LinkedIn, GitHub, resume, etc.)
- Add/remove projects
- Update experience entries
- Change skills & percentages

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at **vercel.com** for automatic deployments.

## 🎨 Features

- ✅ Dark / Light mode toggle
- ✅ Responsive (mobile sidebar)
- ✅ Alternating timeline for Experience
- ✅ Animated skill bars
- ✅ Active nav highlighting on scroll
- ✅ SEO metadata (title, description, OpenGraph)
- ✅ All 6 projects included
- ✅ Correct links (LinkedIn, GitHub, CodeChef, GFG, Portfolio)
