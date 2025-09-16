import React, { useState } from "react";
import "./LandingPage.css";
import {
  Rocket,
  Users,
  BarChart,
  Activity,
  Zap,
  Star,
  Linkedin,
  Mail,
  Globe,
  TrendingUp,
  Handshake,
} from "lucide-react";

const Button = ({ children, className, onClick }) => (
  <button className={`custom-btn ${className || ""}`} onClick={onClick}>
    {children}
  </button>
);

const Card = ({ children, className }) => (
  <div className={`custom-card ${className || ""}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`custom-card-content ${className || ""}`}>{children}</div>
);

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close menu on click (mobile)
  };

  const teamMembers = [
  {
    name: "Nachiket Deshpande",
    linkedin: "http://www.linkedin.com/in/deshpande-nachi",
    email: "nachi.desh1901@gmail.com",
  },
  {
    name: "Prathamesh Padavi",
    linkedin: "https://www.linkedin.com/in/prathamesh-padvi-371783328/",
    email: "prathameshpadvi598@gmail.com",
  },
  {
    name: "Khushabu Manakare",
    linkedin: "https://www.linkedin.com/in/khushbu-mankare-652014312/",
    email: "khushbumankare1@gmail.com",
  },
  {
    name: "Siddhi Ahire",
    linkedin: "https://www.linkedin.com/in/siddhi-ahire-073129313/",
    email: "siddhiahire0601@gmail.com",
  },
  {
    name: "Revashree Sonawane",
    linkedin: "https://www.linkedin.com/in/revashree-sonawane-90b032384/",
    email: "sonawanerevashree@gmail.com",
  },
  {
    name: "Himanshu Ahirrao",
    linkedin: "https://linkedin.com/in/himanshu-ahirrao-b88435292/",
    email: "himanshusa456@gmail.com",
  },
];

  return (
    <div className="landing-page">
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">CodeBreakers</h1>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <span onClick={() => scrollToSection("features")}>Features</span>
            <span onClick={() => scrollToSection("about")}>About</span>
            <span onClick={() => scrollToSection("benefits")}>Benefits</span>
            <span onClick={() => scrollToSection("impact")}>Impact</span>
            <span onClick={() => scrollToSection("team")}>Team</span>
          </div>

          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
        </div>
        <h2>AI-Powered Sports Assessment</h2>
        <p>
          Revolutionizing athletic performance with AI-driven real-time
          insights and actionable analytics.
        </p>
        <Button onClick={() => scrollToSection("about")}>Get Started</Button>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h3>Our Features</h3>
        <div className="features-grid">
          <Card>
            <CardContent>
              <Rocket className="feature-icon" />
              <h4>Smart Analysis</h4>
              <p>AI-driven insights into your sports performance instantly.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Users className="feature-icon" />
              <h4>Team Collaboration</h4>
              <p>Share progress and work together with teammates and coaches.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <BarChart className="feature-icon" />
              <h4>Performance Tracking</h4>
              <p>
                Monitor improvements over time with clear and simple analytics.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h3>About CodeBreakers</h3>
        <p>
          CodeBreakers empowers athletes through AI, providing analytics,
          collaboration tools, and performance tracking to reach peak potential.
        </p>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="features-section">
        <h3>Our Benefits</h3>
        <div className="features-grid">
          <Card>
            <CardContent>
              <Activity className="feature-icon" />
              <h4>Better Training</h4>
              <p>Personalized training recommendations for faster growth.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Zap className="feature-icon" />
              <h4>Stronger Teamwork</h4>
              <p>Improve coordination and strategies with data-driven insights.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Star className="feature-icon" />
              <h4>Clear Progress</h4>
              <p>
                Track benefits over time with measurable performance metrics.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="features-section">
        <h3>Our Impact</h3>
        <div className="features-grid">
          <Card>
            <CardContent>
              <Globe className="impact-icon" />
              <h4>Global Reach</h4>
              <p>
                Connecting athletes worldwide with advanced AI solutions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <TrendingUp className="impact-icon" />
              <h4>Business Growth</h4>
              <p>Helping organizations grow with performance-driven insights.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Handshake className="impact-icon" />
              <h4>Stronger Partnerships</h4>
              <p>
                Building long-term collaborations between athletes and teams.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ✅ Team Section */}
      <section id="team" className="team-section">
        <h3>Meet Our Team</h3>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <h4>{member.name}</h4>
              <p>
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="team-icon" />
                </a>
             <a
              href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${member.email}`}
              target="_blank"
              rel="noopener noreferrer"
              >
            <Mail className="team-icon" />
            </a>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} CodeBreakers. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;