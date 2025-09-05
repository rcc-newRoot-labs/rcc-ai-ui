import React, { useState } from "react";
import "./DashboardPage.css";
import { useNavigate } from "react-router-dom";

interface DashboardCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const DashboardPage: React.FC = () => {
  const [cards] = useState<DashboardCard[]>([
    {
      id: 1,
      title: "Mission & Business Applications",
      description:
        "Modernize enterprise operations with connected digital platforms. Configure SaaS, develop tailored workflows, and integrate systems across agencies.",
      image: "mission.png",
    },
    {
      id: 2,
      title: "Infrastructure & Cybersecurity",
      description:
        "Build resilient, automated hybrid cloud environments. Lead intelligent transformation and secure automation through DevSecOps.",
      image: "cybersecurity.png",
    },
    {
      id: 3,
      title: "AI, Data, & Analytics",
      description:
        "Turn complex data into mission-aligned decisions. Design scalable ecosystems and deliver insights with ML and GenAI.",
      image: "ai_data.png",
    },
    {
      id: 4,
      title: "Human-Centered Design",
      description:
        "Shape intuitive solutions that improve user outcomes. Lead UX research and prototype iteratively to increase adoption.",
      image: "design.png",
    },
    {
      id: 5,
      title: "Enterprise Enablement & Training",
      description:
        "Equip people and processes for success. Reimagine operations and support scalable enterprise training programs.",
      image: "training.png",
    },
  ]);

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const username: string = user.email?.split("@")[0] || "User";

  const navigate = useNavigate();

  const handleSignOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/"); // Redirect to login
  };

  return (
    <div className="dashboard-wrapper">
      {/* Header */}
      <header className="d-flex align-items-center justify-content-between p-3 border-bottom shadow-sm">
        <div className="d-flex align-items-center">
          <img
            src="new_root_logo.png"
            alt="newRoot Labs Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <h4 className="m-0 text-danger">newRoot Labs</h4>
        </div>
        <div>
          <span className="me-3">Welcome, {username}</span>
          <a
            href="/signout"
            className="text-danger text-decoration-none"
            onClick={handleSignOut}
          >
            Sign Out
          </a>
        </div>
      </header>

      {/* Navbar */}
      <nav className="custom-navbar">
        <a href="#" className="nav-item active">
          AI, Data, & Analytics
        </a>
        <a href="#" className="nav-item">
          Infrastructure & Cybersecurity
        </a>
        <a href="#" className="nav-item">
          Enterprise Enablement & Training
        </a>
        <a href="#" className="nav-item">
          Human Centered Design
        </a>
        <a href="#" className="nav-item">
          Mission & Business Applications
        </a>
        <a href="#" className="nav-item">
          Academic Collaboration
        </a>
      </nav>

      {/* Dashboard Content */}
      <div className="dashboard-container">
        <h2>AI, Data, & Analytics</h2>
        <p>Turn complex data into mission-aligned decisions</p>
        <div className="card-grid">
          {cards.map((card) => (
            <div key={card.id} className="dashboard-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
