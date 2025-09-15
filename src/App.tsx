import React, { JSX } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import InnovationsPage from "./pages/innovations/InnovationsPage";
import InnovationDetailPage from "./pages/innovations/InnovationDetailPage";
import MarketingPage from "./pages/MarketingPage"; // ← new
import Layout from "./pages/Layout";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = Boolean(localStorage.getItem("user"));
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LoginPage />} />

        {/* Protected with shared layout */}
        <Route
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/innovations" element={<InnovationsPage />} />
          <Route
            path="/innovationDetail/:id"
            element={<InnovationDetailPage />}
          />
          <Route path="/marketing" element={<MarketingPage />} />{" "}
          {/* ← add this */}
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
