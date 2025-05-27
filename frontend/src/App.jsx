import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  alert("Under Construction !!")

  const sections = {
    home: {
      title: "Welcome to SuperLearn",
      description: "Your one-stop platform for tech learning and career growth"
    },
    jobs: {
      title: "Tech Jobs",
      description: "Find your next career opportunity",
      items: [
        { title: "Software Engineer", company: "Tech Corp", location: "Remote", type: "Full-time" },
        { title: "Frontend Developer", company: "Web Solutions", location: "Hybrid", type: "Full-time" },
        { title: "Backend Developer", company: "Data Systems", location: "On-site", type: "Contract" }
      ]
    },
    internships: {
      title: "Internships",
      description: "Kickstart your career with hands-on experience",
      items: [
        { title: "Summer Intern", company: "StartupX", duration: "3 months", stipend: "Paid" },
        { title: "Research Intern", company: "TechLab", duration: "6 months", stipend: "Paid" },
        { title: "Development Intern", company: "CodeCraft", duration: "3 months", stipend: "Paid" }
      ]
    },
    hackathons: {
      title: "Hackathons",
      description: "Showcase your skills and win prizes",
      items: [
        { title: "AI Innovation Hack", date: "June 2024", prize: "$10,000", type: "Online" },
        { title: "Web3 Challenge", date: "July 2024", prize: "$5,000", type: "Hybrid" },
        { title: "Mobile App Fest", date: "August 2024", prize: "$7,500", type: "On-site" }
      ]
    },
    opensource: {
      title: "Open Source",
      description: "Contribute to meaningful projects",
      items: [
        { title: "React Components", org: "OpenUI", stars: "1.2k", language: "JavaScript" },
        { title: "ML Framework", org: "DataScience", stars: "2.5k", language: "Python" },
        { title: "DevOps Tools", org: "CloudNative", stars: "3.1k", language: "Go" }
      ]
    },
    roadmap: {
      title: "Learning Roadmaps",
      description: "Structured paths to master tech skills",
      items: [
        { title: "Full Stack Development", duration: "6 months", level: "Beginner to Advanced" },
        { title: "Data Science", duration: "8 months", level: "Intermediate to Expert" },
        { title: "DevOps Engineering", duration: "4 months", level: "Intermediate" }
      ]
    }
  }

  const renderSection = (section) => {
    const data = sections[section]
    return (
      <div className="section-content">
        <h2>{data.title}</h2>
        <p className="section-description">{data.description}</p>
        <div className="cards-container">
          {data.items?.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.title}</h3>
              {Object.entries(item).map(([key, value]) => (
                key !== 'title' && (
                  <p key={key}><strong>{key}:</strong> {value}</p>
                )
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">SuperLearn</div>
        <div className="nav-links">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content">
        {renderSection(activeSection)}
      </main>

      <footer className="footer">
        <p>© 2024 SuperLearn. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  )
}

export default App
