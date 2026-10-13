import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Award, CheckCircle } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="portfolio-section" aria-labelledby="achievements-title">
      <div className="page-container">
        <header className="section-heading mb-12">
          <div className="section-kicker">
            <span aria-hidden="true">06</span>
            <span>Key Milestones</span>
          </div>
          <h2 id="achievements-title">Achievements.</h2>
          <p>Verified production milestones delivered in active business environments.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {portfolioData.achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="portfolio-card p-6 flex items-start gap-4 border border-[var(--surface-line)] hover:border-[var(--accent-ink)] transition-colors"
            >
              <div className="p-3 rounded-xl bg-[hsl(var(--muted))] text-[var(--accent-ink)] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[var(--accent-ink)] uppercase">
                  MILESTONE 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-[var(--ink-strong)] mt-1 mb-2">
                  {achievement}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[var(--ink-muted)]">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                  Verified Production Delivery
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
