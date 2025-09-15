import React from "react";
import { useNavigate } from "react-router-dom";

type InnovationCard = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const CARDS: Readonly<InnovationCard[]> = [
  {
    id: 1,
    title: "Mission & Business Applications",
    description:
      "Modernize enterprise operations with connected digital platforms. Configure SaaS, develop tailored workflows, and integrate systems across agencies.",
    image: "Assets/Rag.png",
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
];

const InnovationsPage: React.FC = () => {
  const navigate = useNavigate();
  const navigateTo = (id: number) => navigate(`/innovationDetail/${id}`);

  return (
    <section aria-labelledby="innovations-title">
      <h2 id="innovations-title" className="mb-2">
        AI, Data, &amp; Analytics
      </h2>
      <p className="mb-4">
        Explore initiatives across analytics, automation, and secure cloud
        delivery. These focus areas help teams move from raw data to mission
        value—rapidly, safely, and at scale.
      </p>

      <h3 id="cards-heading" className="visually-hidden">
        Innovation Areas
      </h3>

      <ul className="card-grid list-unstyled m-0 p-0">
        {CARDS.map((card) => (
          <li key={card.id} className="dashboard-card" aria-label={card.title}>
            <article className="card-body">
              <div className="card-text d-flex gap-1">
                <img
                  src={card.image}
                  alt={`${card.title} illustration`}
                  loading="lazy"
                  decoding="async"
                />
                <h5 className="card-title">{card.title}</h5>
              </div>

              <div className="card-hover-text">
                <p className="mb-3">{card.description}</p>
                <div className="card-footer">
                  <button
                    onClick={() => navigateTo(card.id)}
                    type="button"
                    className="btn btn-primary"
                  >
                    Interact
                  </button>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InnovationsPage;
