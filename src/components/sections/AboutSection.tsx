import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (id: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const currentJob = portfolioData.experience.find((e) => e.current);

  const facts = [
    { value: '2', label: 'ERP Platforms (AX 2012 + D365 BC)' },
    { value: '6+', label: 'Custom SSRS Reports' },
    { value: '4', label: 'Enterprise Projects' },
  ];

  return (
    <section id="about" className="portfolio-section about-section" aria-label={`About ${portfolioData.name}`}>
      <div className="page-container">
        <header className="section-heading mb-12">
          <div className="section-kicker">
            <span aria-hidden="true">01</span>
            <span>About</span>
          </div>
          <h2>A little about me.</h2>
          <p>ERP and AI developer based in Lahore, Pakistan. Microsoft Dynamics AX &amp; D365 specialist with production AI agent experience.</p>
        </header>

        <div className="about-profile-layout">
          {/* Portrait card */}
          <div className="about-portrait-card portfolio-card">
            <div className="about-photo">
              <img
                src={portfolioData.about.portrait}
                alt={`${portfolioData.name}, ${portfolioData.occupation}`}
                width="941"
                height="1672"
                loading="lazy"
                decoding="async"
                style={{ objectPosition: 'center 12%' }}
              />
            </div>
            <div className="about-photo-caption">
              <div>
                <strong>{portfolioData.name}</strong>
                <span>{portfolioData.occupation}</span>
              </div>
              <span className="profile-status" aria-label={portfolioData.availability} />
            </div>
            <p className="about-location">
              <MapPin className="w-4 h-4 inline mr-1 text-[var(--accent-ink)]" />
              {portfolioData.location}
            </p>
          </div>

          {/* Profile copy */}
          <div className="about-profile-copy">
            <span className="about-intro-label">HOW I WORK</span>
            <h3>{portfolioData.about.heading}</h3>

            <div className="about-body space-y-4">
              {portfolioData.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="about-facts">
              {facts.map((f) => (
                <div key={f.label}>
                  <strong>{f.value}</strong>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            {currentJob && (
              <div className="about-current-role portfolio-card">
                <Briefcase className="w-5 h-5 text-[var(--accent-ink)]" />
                <div>
                  <span className="text-xs text-[var(--ink-muted)]">Currently building at</span>
                  <strong>{currentJob.company}</strong>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-[hsl(var(--muted))] text-[var(--ink)]">
                  {portfolioData.about.workMode}
                </span>
              </div>
            )}

            <a
              className="text-link inline-flex items-center gap-1.5 mt-4"
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('experience');
              }}
            >
              See my work experience <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
