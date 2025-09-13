import React, { Suspense, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";

// Lazy-load the HomePage component (keeps dashboard bundle smaller)
const HomePage = React.lazy(() => import("./HomePage"));

type DashboardCard = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type StoredUser = { email?: string };

const CARDS: Readonly<DashboardCard[]> = [
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

function getUsernameFromEmail(email?: string): string {
  if (!email) return "User";
  const name = email.split("@")[0];
  return name?.length ? name : "User";
}

type TabKey = "home" | "innovations" | "marketing";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabKey>("home");

  const user: StoredUser = useMemo(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? (JSON.parse(raw) as StoredUser) : {};
    } catch {
      return {};
    }
  }, []);

  const username = getUsernameFromEmail(user.email);

  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="dashboard-wrapper">
      {/* Header */}
      <header
        id="SITE_HEADER"
        className="d-flex align-items-center justify-content-between p-3 border-bottom shadow-sm"
        role="banner"
      >
        <div className="d-flex align-items-center">
          <img
            src="new_root_logo.png"
            alt="newRoot Labs"
            fetchPriority="high"
            width={143}
            height={84}
            style={{ marginRight: 10 }}
          />
          <h1 className="my-custom-class m-0 fs-4">newRoot Labs</h1>
        </div>
        <div className="d-flex align-items-center gap-3">
          <span>Welcome, {username}</span>
          <button
            type="button"
            className="btn btn-link text-danger text-decoration-none p-0"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* In-page Nav (tabs) */}
      <nav className="custom-navbar" aria-label="Primary">
        <button
          className={`nav-item ${activeTab === "home" ? "active" : ""}`}
          onClick={() => setActiveTab("home")}
          type="button"
        >
          Home
        </button>
        <button
          className={`nav-item ${activeTab === "innovations" ? "active" : ""}`}
          onClick={() => setActiveTab("innovations")}
          type="button"
        >
          Innovations
        </button>
        <button
          className={`nav-item ${activeTab === "marketing" ? "active" : ""}`}
          onClick={() => setActiveTab("marketing")}
          type="button"
        >
          Marketing
        </button>
      </nav>

      {/* Content area switches by tab */}
      <main className="dashboard-container" role="main">
        {activeTab === "home" && (
          <Suspense fallback={<div style={{ padding: 16 }}>Loading…</div>}>
            <HomePage />
          </Suspense>
        )}

        {activeTab === "innovations" && (
          <section aria-labelledby="innovations-title">
            <h2 id="innovations-title" className="mb-2">
              AI, Data, &amp; Analytics
            </h2>
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <h3 id="cards-heading" className="visually-hidden">
              Dashboard Sections
            </h3>
            <ul className="card-grid list-unstyled m-0 p-0" role="list">
              {CARDS.map((card) => (
                <li
                  key={card.id}
                  className="dashboard-card"
                  aria-label={card.title}
                >
                  <article className="card-body">
                    <div className="card-text d-flex align-items-center gap-3">
                      <img
                        src={card.image}
                        alt={`${card.title} illustration`}
                        width={200}
                        height={80}
                        loading="lazy"
                        decoding="async"
                      />
                      <h4 className="m-0">{card.title}</h4>
                    </div>

                    <div className="card-hover-text">
                      <h3 className="h5">{card.title}</h3>
                      <p className="mb-3">{card.description}</p>
                      <div className="card-footer bg-transparent border-success p-0">
                        <a
                          href="https://www.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                          aria-label={`Interact with ${card.title}`}
                        >
                          Interact
                        </a>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        )}

        {activeTab === "marketing" && (
          <section aria-labelledby="marketing-title">
            <h2 id="marketing-title" className="mb-2">
              Marketing
            </h2>
            <p>Coming soon…</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
