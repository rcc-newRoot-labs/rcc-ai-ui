import React, { Suspense, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";

// Lazy components
const HomePage = React.lazy(() => import("./HomePage"));
const InnovationsPage = React.lazy(() => import("./InnovationsPage"));

type StoredUser = { email?: string };
type TabKey = "home" | "innovations" | "marketing";

function getUsernameFromEmail(email?: string): string {
  if (!email) return "User";
  const name = email.split("@")[0];
  return name?.length ? name : "User";
}

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
          <Suspense fallback={<div style={{ padding: 16 }}>Loading…</div>}>
            <InnovationsPage />
          </Suspense>
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
