import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Bot, CheckCircle2, Cpu, Database, Network, Code2, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const currentGroup = portfolioData.skills[activeTab] || portfolioData.skills[0];

  const categoryIcons = [
    <Cpu className="w-4 h-4" />,
    <Bot className="w-4 h-4" />,
    <Network className="w-4 h-4" />,
    <Database className="w-4 h-4" />,
    <Code2 className="w-4 h-4" />,
    <Wrench className="w-4 h-4" />,
  ];

  return (
    <section id="skills" className="portfolio-section skills-section" aria-labelledby="skills-title">
      <div className="page-container">
        <header className="section-heading mb-12">
          <div className="section-kicker">
            <span aria-hidden="true">03</span>
            <span>Skills</span>
          </div>
          <h2 id="skills-title">Tools &amp; technologies.</h2>
          <p>My enterprise ERP toolkit, AI agent integrations, databases, and workflow automation stack (no percentages or levels).</p>
        </header>

        <div className="skills-workbench">
          {/* Tabs for 6 grouped categories */}
          <div className="skill-tabs" role="group" aria-label="Skill categories">
            {portfolioData.skills.map((group, idx) => (
              <button
                key={group.title}
                type="button"
                className={idx === activeTab ? 'is-active' : ''}
                onClick={() => setActiveTab(idx)}
                aria-pressed={idx === activeTab}
              >
                <span className={`skill-tab-icon skill-tone-${group.accent}`}>
                  {categoryIcons[idx] || <Cpu className="w-4 h-4" />}
                </span>
                <span>
                  <strong>{group.short}</strong>
                  <small>0{idx + 1}</small>
                </span>
              </button>
            ))}
          </div>

          {/* Active Skill Cloud */}
          <div className={`skill-stage portfolio-card skill-accent-${currentGroup.accent}`} aria-live="polite">
            <div className="skill-stage-head">
              <div>
                <span>CATEGORY / 0{activeTab + 1}</span>
                <h3>{currentGroup.title}</h3>
                <p>{currentGroup.description}</p>
              </div>
            </div>

            <ul className="skill-cloud mt-6" aria-label={`${currentGroup.title} technologies`}>
              {currentGroup.items.map((skillName) => (
                <li key={skillName} className="portfolio-card flex items-center gap-2 p-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-ink)] shrink-0" />
                  <span className="font-medium text-sm text-[var(--ink-strong)]">{skillName}</span>
                </li>
              ))}
            </ul>

            <div className="skill-stage-foot mt-6 flex justify-between items-center text-xs text-[var(--ink-muted)]">
              <span>{currentGroup.items.length} tools &amp; technologies in this category</span>
              <span>All 6 categories verified</span>
            </div>
          </div>
        </div>

        {/* Dedicated Production AI & ERP Engineering Showcase */}
        <div id="ai-work" className="ai-work mt-16 pt-12 border-t border-[var(--surface-line)]">
          <div className="ai-work-heading mb-8">
            <span className="ai-work-eyebrow flex items-center gap-1.5 text-xs font-bold text-[var(--accent-ink)] uppercase tracking-wider">
              <Bot className="w-4 h-4" />
              {portfolioData.aiWork.eyebrow}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--ink-strong)] mt-2">
              {portfolioData.aiWork.title}
            </h3>
            <p className="text-sm md:text-base text-[var(--ink-muted)] mt-2 max-w-2xl">
              {portfolioData.aiWork.description}
            </p>
          </div>

          <div className="ai-work-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Focus Card */}
            <div className="ai-focus-card portfolio-card p-6">
              <h4 className="text-base font-bold text-[var(--ink-strong)] mb-3">
                {portfolioData.aiWork.toolsLabel}
              </h4>
              <ul className="ai-tool-list flex flex-wrap gap-2 mb-4">
                {portfolioData.aiWork.tools.map((tool) => (
                  <li key={tool} className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-[hsl(var(--muted))] text-[var(--accent-ink)] border border-[var(--surface-line)]">
                    {tool}
                  </li>
                ))}
              </ul>
              <p className="ai-tools-note text-xs text-[var(--ink-muted)] mb-6">
                {portfolioData.aiWork.toolsNote}
              </p>

              <h4 className="text-base font-bold text-[var(--ink-strong)] mb-3">
                {portfolioData.aiWork.focusLabel}
              </h4>
              <ul className="ai-focus-list space-y-4">
                {portfolioData.aiWork.focusAreas.map((area) => (
                  <li key={area.title} className="flex gap-3 text-left">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-ink)] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-bold text-[var(--ink-strong)]">{area.title}</h5>
                      <p className="text-xs text-[var(--ink-muted)] mt-0.5">{area.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured AI Project Card */}
            <div className="ai-project-card portfolio-card p-6 border-l-4 border-[var(--accent-ink)]">
              <span className="text-xs font-mono font-bold text-[var(--accent-ink)] uppercase">
                {portfolioData.aiWork.projectLabel}
              </span>
              <h4 className="text-xl font-bold text-[var(--ink-strong)] mt-2 mb-4">
                {portfolioData.aiWork.projectTitle}
              </h4>
              <div className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--surface-line)] mb-4">
                <h5 className="font-bold text-base text-[var(--ink-strong)]">{portfolioData.aiWork.projectName}</h5>
                <p className="text-xs text-[var(--accent-ink)] mt-0.5">{portfolioData.aiWork.projectRole}</p>
              </div>
              <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-4">
                Designed and deployed a production chatbot on Gemini that gives staff natural-language access to Dynamics AX (SQL Server), Excel files, HR policy documents and CCTV/NVR records through a multi-server MCP architecture.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['Gemini', 'MCP', 'SQL Server', 'AX 2012'].map((tag) => (
                  <span key={tag} className="text-[11px] px-2.5 py-1 rounded bg-[hsl(var(--muted))] text-[var(--ink)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
