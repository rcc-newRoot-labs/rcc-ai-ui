// src/pages/DashboardPage.tsx
import React, { Suspense } from "react";
import "./DashboardPage.css";

// Home lives in its own component
const HomePage = React.lazy(() => import("./HomePage"));

const DashboardPage: React.FC = () => {
  return (
    <section aria-labelledby="home-title">
      <Suspense fallback={<div style={{ padding: 16 }}>Loading…</div>}>
        <HomePage />
      </Suspense>
    </section>
  );
};

export default DashboardPage;
