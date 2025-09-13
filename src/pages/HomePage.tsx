import React from "react";

const HomePage: React.FC = () => {
  return (
    <section className="homepage-container">
      {/* Red background section header */}
      <div className="section-header">
        <h2>Welcome to newRoot Labs</h2>
      </div>

      <p>
        Explore our innovation lab, <strong>newRoot Labs</strong>, where
        creativity and technology converge to bring groundbreaking solutions to
        life. Join us on a journey where innovation takes root.
      </p>

      <p>
        At Red Cedar, innovation isn’t just a buzzword—it’s how we grow. newRoot
        Labs is our internal IR&amp;D engine designed to transform bold ideas
        into tangible mission impact. Whether it's a frontline challenge, a
        process bottleneck, or an untapped opportunity, this lab provides the
        structure, space, and support to move from spark to solution.
      </p>

      <p>
        We focus on four innovation pathways: customer-facing solutions,
        internal project delivery improvements, Red Cedar operational
        enhancements, and new growth opportunities. Regardless of where an idea
        originates, we apply a clear and repeatable process to test, evolve, and
        scale it.
      </p>

      <div className="section-subheader">
        <h3>We call it B.R.A.N.C.H.—our six-phase innovation framework:</h3>
      </div>

      <ul>
        <li>
          <strong>Brainstorm</strong> | Submit ideas in a lightweight intake
          format
        </li>
        <li>
          <strong>Research</strong> | Validate needs, stakeholders, and metrics
        </li>
        <li>
          <strong>Assemble</strong> | Prototype and collaborate
        </li>
        <li>
          <strong>Nurture</strong> | Refine and transition solutions
        </li>
        <li>
          <strong>Connect</strong> | Integrate into mission systems and
          operations
        </li>
        <li>
          <strong>Harvest</strong> | Measure outcomes and share what we learned
        </li>
      </ul>

      <div className="home-branch-wrap">
        <img
          src="/BranchImage.png"
          alt="BRANCH Innovation Framework"
          className="home-branch"
        />
      </div>

      <p className="home-tagline">
        <strong>newRoot Labs</strong> is where innovation takes root—and where
        ideas grow into operational advantage.
      </p>
    </section>
  );
};

export default HomePage;
