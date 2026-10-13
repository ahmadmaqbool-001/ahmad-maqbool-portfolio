import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Layers } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="portfolio-section projects-section" aria-labelledby="projects-title">
      <div className="page-container">
        <header className="section-heading mb-12">
          <div className="section-kicker">
            <span aria-hidden="true">05</span>
            <span>Selected work</span>
          </div>
          <h2 id="projects-title">Enterprise work.</h2>
          <p>Real-world projects delivered across ERP service layers, AI agents, and workflow automations (only verified production work, no placeholder links).</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <article
              key={project.name}
              className="project-card portfolio-card p-6 flex flex-col justify-between border border-[var(--surface-line)] hover:border-[var(--accent-ink)] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[hsl(var(--muted))] text-[var(--accent-ink)]">
                    ENTERPRISE PROJECT 0{index + 1}
                  </span>
                  <Layers className="w-4 h-4 text-[var(--accent-ink)]" />
                </div>

                <h3 className="text-xl font-bold text-[var(--ink-strong)] mb-3">
                  {project.name}
                </h3>

                <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--surface-line)]">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded bg-[hsl(var(--card))] border border-[var(--surface-line)] text-[var(--ink)] font-mono font-medium"
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
