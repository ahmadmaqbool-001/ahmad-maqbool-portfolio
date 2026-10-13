import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="page-container footer-shell">
        <div className="footer-brand">
          <span className="footer-logo-frame" aria-hidden="true">
            <span className="font-bold text-sm tracking-wider text-[var(--accent-ink)]">
              {portfolioData.initials}
            </span>
          </span>
          <div>
            <strong>{portfolioData.name}</strong>
            <small>{portfolioData.occupation}</small>
          </div>
        </div>

        <p>© {year} {portfolioData.name}. Built with React and TypeScript.</p>

        <div className="footer-actions">
          <a
            href={portfolioData.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            LinkedIn <ArrowUpRight className="w-3.5 h-3.5 inline ml-0.5" />
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            aria-label={`Email ${portfolioData.name}`}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
