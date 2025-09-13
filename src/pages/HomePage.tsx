import React from "react";
// import "./HomePage.css"; // optional, for styling

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container p-4">
      <h1 className="mb-3">Welcome to newRoot Labs</h1>

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

      <h2 className="mt-4">
        We call it B.R.A.N.C.H.—our six-phase innovation framework:
      </h2>
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

      {/* BRANCH image at the bottom (served from public/)
      <div className="text-center my-4">
        <img
          src="/BranchImage.png"
          alt="BRANCH Innovation Framework"
          className="home-branch"
          style={{ maxWidth: 600, width: "100%", height: "auto" }}
        />
      </div> */}

      <p className="mt-4">
        <strong>newRoot Labs</strong> is where innovation takes root—and where
        ideas grow into operational advantage.
      </p>
    </div>
  );
};

export default HomePage;
