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
      image: "Assets/Rag.png"
    },
    {
      id: 2,
      title: "Infrastructure & Cybersecurity",
      description:
        "Build resilient, automated hybrid cloud environments. Lead intelligent transformation and secure automation through DevSecOps.",
      image: "Assets/CyberDefence.png",
    },
    {
      id: 3,
      title: "AI, Data, & Analytics",
      description:
        "Turn complex data into mission-aligned decisions. Design scalable ecosystems and deliver insights with ML and GenAI.",
      image: "Assets/borderSecurity.png",
    },
    {
      id: 4,
      title: "Human-Centered Design",
      description:
        "Shape intuitive solutions that improve user outcomes. Lead UX research and prototype iteratively to increase adoption.",
      image: "Assets/TalentInsights.png",
    },
    {
      id: 5,
      title: "Enterprise Enablement & Training",
      description:
        "Equip people and processes for success. Reimagine operations and support scalable enterprise training programs.",
      image: "Assets/ThreatIntelligence.png",
    },
  ]);

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [showContent, setShowContent] = useState(false);
  const toggleContent = () => setShowContent(true);
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
      <header  id="SITE_HEADER" className="d-flex align-items-center justify-content-between p-3 border-bottom shadow-sm">
        <div className="d-flex align-items-center">
          <img
            src="new_root_logo.png"
            alt="newRoot Labs Logo"
            fetchPriority="high"
            style={{ width: "143px" , height: "84px", marginRight: "10px" }}
          />
          <h4 className="my-custom-class">newRoot Labs</h4>
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
          Home
        </a>
        <a href="#" className="nav-item">
          Innovations
        </a>
        <a href="#" className="nav-item">
         Marketing
        </a>
      </nav>

      {/* Dashboard Content */}
       <div className="dashboard-container">
        <h2> AI, Data, & Analytics</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      
        <div className="card-grid">
          {cards.map((card) => (
            <div key={card.id} className="dashboard-card">
              <div className="card-body">
                <div className="card-text">
                  <img
                    src={card.image}
                    fetchPriority="high"
                    style={{ width: "200px" , height: "80px" }}
                  />
                  <h5>{card.title}</h5>
                </div>
                <div className="card-hover-text">
                  <h3>{card.title}</h3>
                 <p>{card.description}</p>
                 <div className="card-footer bg-transparent border-success">
                 <a href="https://www.google.com" target='_blank' className="btn btn-primary">Interact</a>
                </div>
                  
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
