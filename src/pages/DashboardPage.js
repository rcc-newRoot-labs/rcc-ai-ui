import React, { useState } from "react";
import "./DashboardPage.css";
import { Card, Button } from 'react-bootstrap';
import {Navigate} from 'react-router-dom';

const DashboardPage = () => {

  const [cards] = useState([
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
  const username = user.email?.split("@")[0] || "User";
   const [showContent, setShowContent] = useState(false);
  
    const toggleContent = () => setShowContent(true);

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
          <a href="/signout" className="text-danger text-decoration-none">
            Sign Out
          </a>
        </div>
      </header>
      <nav className="border-bottom px-3 py-2 d-flex gap-3">
         <a href="#" className="text-dark">Home</a>
        <a
          className="text-danger fw-bold border-bottom border-danger pb-1"
          href="#"
        >
          Innovations
        </a>
        <a href="#" className="text-dark">Marketting</a>
       
      </nav>
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
                  <a href="https://www.google.com" target='_blank' className="btn btn-secondary">Navigate</a>
                </div>
                <div className="card-footer bg-transparent border-success">
                 
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
