import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Aniket Sharma</div>
          <div className="nav-menu">
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => {e.preventDefault(); scrollToSection('home');}}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => {e.preventDefault(); scrollToSection('about');}}
            >
              About
            </a>
            <a 
              href="#experience" 
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={(e) => {e.preventDefault(); scrollToSection('experience');}}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => {e.preventDefault(); scrollToSection('projects');}}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={(e) => {e.preventDefault(); scrollToSection('skills');}}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => {e.preventDefault(); scrollToSection('contact');}}
            >
              Contact
            </a>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/aniket-sharma-07ba6617b/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/aniketsharma054" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.codechef.com/users/anikets_iiitn" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-code"></i>
            </a>
            <a href="https://www.geeksforgeeks.org/user/aniketshaul0x/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-laptop-code"></i>
            </a>
            <a href="https://github.com/aniketsharma04" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="container">
          <div className="profile-image">
            <img src="/profile.jpg" alt="Aniket Sharma" />
          </div>
          <h1 className="gradient-text">Hi, I'm Aniket Sharma</h1>
          <p className="subtitle">Full Stack Developer | Building Interactive Web Experiences</p>
          <p className="description">
            I specialize in building fast, modern, and scalable web applications using the latest technologies.
          </p>
          <div className="cta-buttons">
            <a 
              href="https://www.linkedin.com/in/aniket-sharma-07ba6617b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <i className="fab fa-linkedin"></i> Connect on LinkedIn
            </a>
            <a 
              href="https://drive.google.com/drive/folders/1mrtmeTs044I9j8TxFyz1EArmsBtEharn?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fas fa-file-pdf"></i> Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="section-divider"></div>
          <div className="about-content">
            <p>
              Hello! I'm Aniket Sharma, a dedicated Full Stack Developer currently pursuing a B.Tech in Electronics and Communication Engineering at IIIT Nagpur. With a strong grasp of modern technologies including MongoDB, Express.js, React.js, and Node.js (MERN stack), I specialize in building scalable, and responsive web applications. My hands-on experience ranges from building real-time chat platforms with socket-based communication to creating secure task management systems using JWT and Redux Toolkit. I strive to ensure that performance, security, and user experience are at the core of every project I develop.
            </p>
            <p>
              What sets me apart is my solid foundation in software engineering principles, paired with a problem-solving mindset that's been sharpened by solving 400+ coding problems across various platforms and active competitive programming. Whether it's backend logic or pixel-perfect frontend interfaces, I believe in clean, maintainable code and always push myself to learn and implement the best practices. I'm eager to take on new challenges and create meaningful, impactful solutions as a full stack developer.
            </p>
            <a 
              href="https://drive.google.com/drive/folders/1mrtmeTs044I9j8TxFyz1EArmsBtEharn?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fas fa-file-pdf"></i> Resume
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title gradient-text">My Experience</h2>
          <div className="section-divider"></div>
          
          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="experience-info">
                <h3>C++ Programmer</h3>
                <h4>CodSoft</h4>
                <div className="experience-badge">
                  <a 
                    href="https://drive.google.com/drive/folders/1selpuO4G5cXY0fIO8SeokSLu71l7o7N7?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="badge"
                  >
                    Offer Letter and Certificate
                  </a>
                </div>
                <p className="experience-date">June 5, 2024 - July 5, 2024</p>
              </div>
            </div>
            <div className="experience-description">
              <p>
                During my internship at CodSoft as a C++ Developer, I designed and deployed interactive console-based applications such as a number guessing game, calculator, and to-do list manager. I focused on optimizing control flow, implementing modular programming, and enhancing data handling with STL/vector, which significantly improved efficiency, maintainability, and user engagement.
              </p>
              <div className="skills-tags">
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Object-Oriented Programming</span>
                <span className="skill-tag">STL</span>
                <span className="skill-tag">Data Structures</span>
              </div>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="experience-info">
                <h3>Competitive Programming Specialist</h3>
                <h4>CodeChef & GeeksforGeeks</h4>
                <div className="experience-achievements">
                  <div className="achievement-badge">
                    <span className="badge-highlight">4★ CodeChef Coder</span>
                    <span className="badge-rating">1900+ Rating</span>
                  </div>
                  <div className="achievement-badge">
                    <span className="badge-highlight">4★ GfG Coder</span>
                    <span className="badge-rating">1800+ Rating</span>
                  </div>
                </div>
                <p className="experience-date">Ongoing Competitive Programming Journey</p>
              </div>
            </div>
            <div className="experience-description">
              <p>
                Achieved exceptional performance in competitive programming with notable accomplishments including 3★ with Global Rank 7 in CodeChef's Starters 187 and 4★ with Global Rank 46 in CodeChef's Starters 188 weekly contests. Currently maintaining 4★ status on both CodeChef (1900+ rating) and GeeksforGeeks (1800+ rating), demonstrating strong problem-solving skills and algorithmic thinking in C++ programming.
              </p>
              <div className="experience-links">
                <a href="https://www.codechef.com/users/anikets_iiitn" target="_blank" rel="noopener noreferrer" className="experience-link">
                  <i className="fas fa-external-link-alt"></i> CodeChef Profile
                </a>
                <a href="https://www.geeksforgeeks.org/user/aniketshaul0x/" target="_blank" rel="noopener noreferrer" className="experience-link">
                  <i className="fas fa-external-link-alt"></i> GeeksforGeeks Profile
                </a>
              </div>
              <div className="skills-tags">
                <span className="skill-tag">C++ Programming</span>
                <span className="skill-tag">Data Structures & Algorithms</span>
                <span className="skill-tag">Problem Solving</span>
                <span className="skill-tag">Competitive Programming</span>
                <span className="skill-tag">Mathematical Thinking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title gradient-text">My Projects</h2>
          <div className="section-divider"></div>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Customer Service Platform</h3>
              <p>
                A comprehensive customer service platform with ticket management, live chat support, and automated response systems. Features include customer data analytics, priority-based ticket routing, and real-time notifications for improved customer satisfaction.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Express.js</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/aniketsharma04" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                {/* <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a> */}
              </div>
            </div>

            <div className="project-card">
              <h3>Connect App</h3>
              <p>
                A social networking application that enables users to connect, share content, and communicate through posts, comments, and direct messaging. Includes user authentication, profile management, and real-time activity feeds.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Redux</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/aniketsharma04" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                {/* <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a> */}
              </div>
            </div>

            <div className="project-card">
              <h3>Real-time Chatting Application</h3>
              <p>
                A full-stack real-time chat application that enables instant messaging with multiple users. Features include message persistence, user authentication, typing indicators, and group chat functionality with Socket.io integration.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Socket.io</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/aniketsharma04" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                {/* <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a> */}
              </div>
            </div>

            <div className="project-card">
              <h3>Task Management Application</h3>
              <p>
                A comprehensive task management system with features for organizing, prioritizing, and tracking work progress. Includes task categories, due dates, progress tracking, team collaboration, and deadline notifications.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Express.js</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/aniketsharma04" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                {/* <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a> */}
              </div>
            </div>

            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>
                A responsive personal portfolio website built with React.js to showcase projects, skills, and professional experience. Features include smooth scrolling navigation, contact form integration, and optimized performance across all devices.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Responsive Design</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/aniketsharma04" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                {/* <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title gradient-text">My Skills</h2>
          <div className="section-divider"></div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>C Programming</h3>
              <p>
                Strong foundation in C programming with expertise in system-level programming, memory management, and data structures. Developed efficient algorithms and optimized code for performance-critical applications.
              </p>
              <div className="skill-level">
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>C++ Programming - Competitive Coding</h3>
              <p>
                Advanced C++ skills with focus on competitive programming. Achieved 1900+ rating on CodeChef and 1700+ rating on GeeksforGeeks. Specialized in algorithms, data structures, and problem-solving optimization.
              </p>
              <div className="skill-links">
                <a href="https://www.codechef.com/users/anikets_iiitn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> CodeChef Profile
                </a>
                <a href="https://www.geeksforgeeks.org/user/aniketshaul0x/" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> GeeksforGeeks Profile
                </a>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fab fa-js-square"></i>
              </div>
              <h3>JavaScript</h3>
              <p>
                Proficient in modern JavaScript (ES6+) with expertise in asynchronous programming, DOM manipulation, and API integration. Experience with modern frameworks and building interactive web applications.
              </p>
              <div className="skill-level">
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '95%'}}></div>
                </div>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fab fa-react"></i>
              </div>
              <h3>React.js</h3>
              <p>
                Expert in React.js development with hooks, context API, and state management. Built multiple scalable applications with component-based architecture, routing, and modern React patterns.
              </p>
              <div className="skill-level">
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '92%'}}></div>
                </div>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fab fa-node-js"></i>
              </div>
              <h3>Node.js</h3>
              <p>
                Skilled in server-side development with Node.js, Express.js, and RESTful API design. Experience in building scalable backend services, authentication systems, and real-time applications.
              </p>
              <div className="skill-level">
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '88%'}}></div>
                </div>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>Tailwind CSS</h3>
              <p>
                Proficient in utility-first CSS framework for rapid UI development. Experience in creating responsive, modern designs with custom components and design systems using Tailwind CSS.
              </p>
              <div className="skill-level">
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-database"></i>
              </div>
              <h3>MySQL & MongoDB</h3>
              <p>
                Experienced in both SQL and NoSQL databases. Proficient in MySQL for relational data modeling and MongoDB for document-based storage, aggregation pipelines, and scalable database design.
              </p>
              <div className="skill-level">
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '87%'}}></div>
                </div>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fab fa-git-alt"></i>
              </div>
              <h3>Git & Version Control</h3>
              <p>
                Expert in Git version control with experience in collaborative development workflows, branching strategies, merge conflict resolution, and maintaining clean commit histories.
              </p>
              <div className="skill-level">
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Full Stack Development</h3>
              <p>
                Comprehensive understanding of full-stack development lifecycle from frontend UI/UX to backend architecture, database design, deployment, and maintenance of web applications.
              </p>
              <div className="skill-level">
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '89%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title gradient-text">Contact Me</h2>
          <div className="section-divider"></div>
          <div className="contact-content">
            <p className="contact-intro">
              I'm always open to new opportunities—feel free to get in touch through email or social media. I look forward to connecting with you!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:aniket.sharma.ani04@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>
                  Email: aniket.sharma.ani04@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>Phone: +91 9868459890</span>
              </div>
            </div>
            <a 
              href="https://www.linkedin.com/in/aniket-sharma-07ba6617b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fab fa-linkedin"></i> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;