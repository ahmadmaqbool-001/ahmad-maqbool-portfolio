import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Rocket, Bot, GitBranch, Database, Shield } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    rocket: <Rocket className="w-5 h-5" />,
    boxes: <Bot className="w-5 h-5" />,
    gauge: <GitBranch className="w-5 h-5" />,
    'git-branch': <Database className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
  };

  return (
    <section id="services" className="portfolio-section why-section" aria-labelledby="services-title">
      <div className="page-container">
        <header className="section-heading mb-12">
          <div className="section-kicker">
            <span aria-hidden="true">02</span>
            <span>Services</span>
          </div>
          <h2 id="services-title">Services &amp; capabilities.</h2>
          <p>What I bring to teams seeking enterprise ERP stability and modern AI automation.</p>
        </header>

        <div className="why-shell portfolio-card p-6 md:p-8">
          <div className="why-intro mb-8">
            <span className="text-xs font-bold text-[var(--accent-ink)] tracking-wider">MY APPROACH</span>
            <p className="text-base text-[var(--ink)] mt-2">
              Connect legacy ERPs to modern APIs, LLMs, and automated workflows.
            </p>
          </div>

          <div className="why-grid">
            {portfolioData.services.map((service, index) => (
              <article key={service.title} className={`why-item portfolio-card why-${service.accent}`}>
                <div className="why-icon">
                  {iconMap[service.icon] || <Rocket className="w-5 h-5" />}
                </div>
                <span className="why-number">0{index + 1}</span>
                <h3 className="text-lg font-bold text-[var(--ink-strong)] mb-2">{service.title}</h3>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
