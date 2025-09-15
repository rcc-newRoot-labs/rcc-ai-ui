import React, { useMemo } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./DashboardPage.css";

type StoredUser = { email?: string };

function getUsername(email?: string) {
  if (!email) return "User";
  const name = email.split("@")[0];
  return name || "User";
}

const Layout: React.FC = () => {
  const navigate = useNavigate();

  const user: StoredUser = useMemo(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? (JSON.parse(raw) as StoredUser) : {};
    } catch {
      return {};
    }
  }, []);
  const username = getUsername(user.email);

  // inside Layout.tsx
  const handleSignOut = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    try {
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
    } finally {
      // send a fresh timestamp to force a new key on the login page
      navigate("/", {
        replace: true,
        state: { resetForm: true, ts: Date.now() },
      });
    }
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

      {/* Top Nav */}
      <nav className="custom-navbar" aria-label="Primary">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/innovations"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Innovations
        </NavLink>
        <NavLink
          to="/marketing"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Marketing
        </NavLink>
      </nav>

      {/* Page Content */}
      <main className="dashboard-container" role="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
