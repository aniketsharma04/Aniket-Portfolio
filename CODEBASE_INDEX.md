# Portfolio Website - Codebase Index

## 📋 Project Overview

**Project Name:** Aniket Sharma Portfolio Website  
**Type:** Personal Portfolio Website  
**Framework:** React.js (v19.1.0)  
**Deployment:** Vercel  
**Live URL:** https://portfolio-main-86tq.vercel.app/

---

## 🏗️ Project Structure

```
Aniket-Portfolio/
├── public/
│   ├── favicon.ico          # Site favicon
│   ├── index.html           # HTML template
│   ├── logo192.png          # App logo (192x192)
│   ├── logo512.png          # App logo (512x512)
│   ├── manifest.json        # PWA manifest
│   ├── profile.jpg          # Profile picture
│   └── robots.txt           # SEO robots file
│
├── src/
│   ├── App.js               # Main application component
│   ├── App.css              # Main application styles
│   ├── index.js             # React DOM entry point
│   ├── index.css            # Global base styles
│   ├── logo.svg             # React logo (unused)
│   ├── reportWebVitals.js   # Web vitals performance tracking
│   └── setupTests.js        # Jest testing setup
│
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lock file
└── README.md                # Project documentation
```

---

## 📦 Dependencies

### Core Dependencies
- **react** (^19.1.0) - React library
- **react-dom** (^19.1.0) - React DOM rendering
- **react-scripts** (5.0.1) - Create React App scripts

### Development Dependencies
- **@testing-library/react** (^16.3.0) - React testing utilities
- **@testing-library/jest-dom** (^6.6.3) - Jest DOM matchers
- **@testing-library/user-event** (^13.5.0) - User interaction testing
- **@testing-library/dom** (^10.4.0) - DOM testing utilities
- **web-vitals** (^2.1.4) - Web performance metrics

---

## 🎯 Application Architecture

### Entry Point
- **`src/index.js`**: React application entry point
  - Renders `App` component into root DOM element
  - Uses React 18+ `createRoot` API
  - Wraps app in `StrictMode` for development checks

### Main Component
- **`src/App.js`**: Single-page application component (576 lines)
  - Contains all sections and navigation logic
  - Manages active section state based on scroll position
  - Implements smooth scrolling navigation

---

## 🧩 Component Structure

### Navigation Bar
**Location:** Lines 35-100 in `App.js`

**Features:**
- Fixed position navigation with backdrop blur
- Active section highlighting based on scroll position
- Social media links (LinkedIn, CodeChef, GeeksforGeeks, GitHub)
- Smooth scroll to section on click
- Responsive design

**Social Links:**
- LinkedIn: https://www.linkedin.com/in/aniket-sharma-07ba6617b/
- CodeChef: https://www.codechef.com/users/anikets_iiitn
- GeeksforGeeks: https://www.geeksforgeeks.org/user/aniketshaul0x/
- GitHub: https://github.com/aniketsharma04

### Sections

#### 1. Home Section (`#home`)
**Location:** Lines 103-132

**Content:**
- Profile image (`/profile.jpg`)
- Name: "Aniket Sharma"
- Title: "Full Stack Developer | Building Interactive Web Experiences"
- Description
- CTA buttons:
  - LinkedIn connection
  - Resume download (Google Drive link)

#### 2. About Section (`#about`)
**Location:** Lines 135-156

**Content:**
- Professional introduction
- Educational background (B.Tech ECE at IIIT Nagpur)
- Technical expertise (MERN stack)
- Problem-solving achievements (400+ coding problems)
- Resume download button

#### 3. Experience Section (`#experience`)
**Location:** Lines 159-279

**Experience Cards:**

1. **Full Stack Developer Intern - PlayGG** (July 2025 - Current)
   - Technologies: Next.js 15, TypeScript, NestJS, MySQL, Tailwind CSS, React Query
   - Project: Cafe management dashboard (PlayCafe)
   - Link: https://www.playcafe.in

2. **C++ Programmer - CodSoft** (June 5 - July 5, 2024)
   - Technologies: C++, OOP, STL, Data Structures
   - Certificate link provided

3. **Competitive Programming Specialist**
   - CodeChef: 4★ (1900+ rating)
   - GeeksforGeeks: 4★ (1800+ rating)
   - Profile links included

#### 4. Projects Section (`#projects`)
**Location:** Lines 282-393

**Project Cards:**

1. **Customer Service Platform**
   - Tech: React.js, Node.js, MongoDB, Express.js
   - GitHub: https://github.com/aniketsharma04/Customer-Service-Platform

2. **Connect App**
   - Tech: React.js, Redux, Node.js, MongoDB
   - GitHub: https://github.com/aniketsharma04/ConnectApp

3. **Real-time Chatting Application**
   - Tech: React.js, Node.js, MongoDB, Socket.io
   - GitHub: https://github.com/aniketsharma04/ChatAPP
   - Note: Typo in URL (double 'h' in href)

4. **Task Management Application**
   - Tech: React.js, Node.js, MongoDB, Express.js
   - GitHub: https://github.com/aniketsharma04/Task-Manager

5. **Portfolio Website**
   - Tech: React.js, CSS3, JavaScript
   - GitHub: https://github.com/aniketsharma04/Aniket-Portfolio
   - Live: https://portfolio-main-86tq.vercel.app/

#### 5. Skills Section (`#skills`)
**Location:** Lines 396-540

**Skill Cards with Progress Bars:**
- C Programming (90%)
- C++ Programming - Competitive Coding (with profile links)
- JavaScript (95%)
- React.js (92%)
- Node.js (88%)
- Tailwind CSS (85%)
- MySQL & MongoDB (87%)
- Git & Version Control (90%)
- Full Stack Development (89%)

#### 6. Contact Section (`#contact`)
**Location:** Lines 543-573

**Contact Information:**
- Email: aniket.sharma.ani04@gmail.com
- Phone: +91 9868459890
- LinkedIn connection button

---

## 🎨 Styling Architecture

### CSS Files

#### `src/index.css`
- Base reset styles
- Font family definitions
- Minimal global styles

#### `src/App.css` (951 lines)
**Key Features:**
- Dark theme with gradient accents (#667eea to #764ba2)
- Responsive design with media queries
- Smooth animations and transitions
- Custom scrollbar styling
- Tooltip effects for social links

**Color Scheme:**
- Background: #0a0a0a (dark)
- Primary Gradient: #667eea → #764ba2 (purple-blue)
- Text: #ffffff (white), #b0b0b0 (light gray), #888 (gray)

**Responsive Breakpoints:**
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: 480px - 768px
- Small Mobile: < 480px

**Key Animations:**
- `fadeInUp` - Section entrance
- `rotate` - Profile image border
- `shine` - Skill icon shimmer
- `shimmer` - Progress bar animation
- `tooltipFadeIn` - Social link tooltips

---

## ⚙️ Functionality

### State Management
- **`activeSection`**: Tracks current visible section for navigation highlighting
  - Values: 'home', 'about', 'experience', 'projects', 'skills', 'contact'

### Scroll Detection
**Location:** Lines 7-23 in `App.js`

**Implementation:**
- `useEffect` hook listens to scroll events
- Calculates active section based on scroll position + 100px offset
- Updates `activeSection` state
- Cleans up event listener on unmount

### Smooth Scrolling
**Location:** Lines 25-30 in `App.js`

**Function:** `scrollToSection(sectionId)`
- Uses `scrollIntoView` with smooth behavior
- Prevents default anchor link behavior
- Called on navigation link clicks

---

## 🔗 External Resources

### Fonts
- **Google Fonts**: Inter (weights: 300, 400, 500, 600, 700)
- **Font Awesome**: v6.0.0 (via CDN)

### External Links
- **Resume**: Google Drive link
- **Social Profiles**: LinkedIn, CodeChef, GeeksforGeeks, GitHub
- **Projects**: Multiple GitHub repositories
- **Live Projects**: PlayCafe dashboard, Portfolio website

---

## 🐛 Known Issues / Notes

1. **Typo in Chat App Link** (Line 341)
   - URL has double 'h': `hhttps://github.com/...`
   - Should be: `https://github.com/...`

2. **Commented Code**
   - Instagram link commented out (lines 86-88)
   - Some skill tags commented out in experience section
   - Some project demo links commented out

3. **Unused Files**
   - `src/logo.svg` - React logo, not used in application

---

## 📊 Performance Features

### Web Vitals Tracking
- **File:** `src/reportWebVitals.js`
- Tracks: CLS, FID, FCP, LCP, TTFB
- Used for performance monitoring

### Optimization Features
- Smooth scroll behavior
- CSS animations (GPU-accelerated)
- Lazy loading ready (can be added)
- Responsive images
- Minimal dependencies

---

## 🧪 Testing Setup

### Test Configuration
- **File:** `src/setupTests.js`
- Uses `@testing-library/jest-dom` for DOM assertions
- Configured for Jest (via react-scripts)

### Available Test Scripts
```bash
npm test        # Run tests in watch mode
npm run build   # Production build
```

---

## 🚀 Deployment

### Build Process
1. Run `npm run build` to create production bundle
2. Output: `build/` directory
3. Deployed on Vercel with automatic deployments

### Environment
- Node.js environment
- React 19.1.0
- Modern browser support (ES6+)

---

## 📝 Code Quality

### Code Style
- ES6+ JavaScript
- React Hooks (useState, useEffect)
- Functional components
- Inline styles for dynamic values
- CSS modules pattern (single App.css)

### Best Practices
- ✅ Semantic HTML
- ✅ Accessibility considerations (target="_blank" with rel="noopener noreferrer")
- ✅ Responsive design
- ✅ Clean component structure
- ⚠️ Could benefit from component extraction for reusability

---

## 🔄 Potential Improvements

1. **Component Extraction**
   - Extract sections into separate components
   - Create reusable Card components
   - Separate Navigation component

2. **Data Management**
   - Move hardcoded data to JSON/config files
   - Easier content updates

3. **Performance**
   - Implement lazy loading for sections
   - Add image optimization
   - Code splitting

4. **Accessibility**
   - Add ARIA labels
   - Improve keyboard navigation
   - Add skip links

5. **SEO**
   - Update meta tags in index.html
   - Add structured data
   - Improve meta description

---

## 📚 Key Technologies Used

- **Frontend Framework:** React.js 19.1.0
- **Styling:** CSS3 (Custom, no framework)
- **Icons:** Font Awesome 6.0.0
- **Fonts:** Google Fonts (Inter)
- **Build Tool:** Create React App (react-scripts)
- **Deployment:** Vercel
- **Version Control:** Git

---

## 🎯 Section IDs Reference

For navigation and linking:
- `#home` - Home/hero section
- `#about` - About me section
- `#experience` - Work experience section
- `#projects` - Projects showcase section
- `#skills` - Skills and expertise section
- `#contact` - Contact information section

---

## 📞 Contact Information

**Owner:** Aniket Sharma  
**Email:** aniket.sharma.ani04@gmail.com  
**Phone:** +91 9868459890  
**LinkedIn:** https://www.linkedin.com/in/aniket-sharma-07ba6617b/  
**GitHub:** https://github.com/aniketsharma04

---

**Last Updated:** Based on current codebase state  
**Documentation Version:** 1.0

