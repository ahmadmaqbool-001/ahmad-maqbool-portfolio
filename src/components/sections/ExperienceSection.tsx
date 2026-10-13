import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="portfolio-section experience-section" aria-labelledby="experience-title">
      <div className="page-container">
        <header className="section-heading mb-12">
          <div className="section-kicker">
            <span aria-hidden="true">04</span>
            <span>Journey / Experience</span>
          </div>
          <h2 id="experience-title">Where I’ve worked.</h2>
          <p>My roles across software teams, from junior developer to leading ERP &amp; AI integration engineering.</p>
        </header>

        <div className="experience-timeline">
          {portfolioData.experience.map((exp, index) => (
            <article key={`${exp.company}-${index}`} className="experience-entry mb-8">
              <div className="experience-rail" aria-hidden="true">
                <span className={exp.current ? 'is-current' : undefined}>
                  0{index + 1}
                </span>
              </div>

              <div className="experience-meta">
                <span className="experience-period flex items-center gap-1.5 font-semibold text-sm">
                  <Calendar className="w-3.5 h-3.5 text-[var(--accent-ink)]" />
                  {exp.duration}
                </span>
                {exp.current && (
                  <span className="current-role inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-[var(--action-hover)] text-[var(--action-ink)] font-bold mt-1">
                    Current role
                  </span>
                )}
                <p className="flex items-center gap-1 text-xs text-[var(--ink-muted)] mt-1">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </p>
              </div>

              <div className="experience-card portfolio-card p-6">
                <div className="experience-card-head mb-4">
                  <div className="experience-company-icon">
                    <Briefcase className="w-5 h-5 text-[var(--accent-ink)]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[var(--accent-ink)] uppercase tracking-wide">
                      {exp.company}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--ink-strong)]">{exp.role}</h3>
                  </div>
                </div>

                <p className="experience-description text-sm text-[var(--ink-muted)] mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="experience-achievements space-y-2.5 mb-4">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-sm text-[var(--ink)] flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--accent-ink)] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--surface-line)]">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded bg-[hsl(var(--muted))] text-[var(--ink)] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
