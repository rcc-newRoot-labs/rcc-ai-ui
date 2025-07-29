import React, { useState } from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
  const [cards] = useState([
    {
      id: 1,
      title: 'Mission & Business Applications',
      description:
        'Modernize enterprise operations with connected digital platforms. Configure SaaS, develop tailored workflows, and integrate systems across agencies.',
      image: 'mission.png',
    },
    {
      id: 2,
      title: 'Infrastructure & Cybersecurity',
      description:
        'Build resilient, automated hybrid cloud environments. Lead intelligent transformation and secure automation through DevSecOps.',
      image: 'cybersecurity.png',
    },
    {
      id: 3,
      title: 'AI, Data, & Analytics',
      description:
        'Turn complex data into mission-aligned decisions. Design scalable ecosystems and deliver insights with ML and GenAI.',
      image: 'ai_data.png',
    },
    {
      id: 4,
      title: 'Human-Centered Design',
      description:
        'Shape intuitive solutions that improve user outcomes. Lead UX research and prototype iteratively to increase adoption.',
      image: 'design.png',
    },
    {
      id: 5,
      title: 'Enterprise Enablement & Training',
      description:
        'Equip people and processes for success. Reimagine operations and support scalable enterprise training programs.',
      image: 'training.png',
    },
  ]);

  // Simulate getting the username from localStorage or API
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const username = user.email?.split('@')[0] || 'User';

  return (
    <div className="dashboard-container">
      <div className="welcome-banner">Welcome, {username}</div>

      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="dashboard-card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
