import React, { JSX } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = Boolean(localStorage.getItem("user"));
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {/* Public route */}
      <Route path="/" element={<LoginPage />} />

      {/* Protected route */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />

      {/* Catch-all: redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
