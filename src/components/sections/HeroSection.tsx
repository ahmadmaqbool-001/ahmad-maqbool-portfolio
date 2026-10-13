import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ArrowDown, ArrowUpRight, Play, Pause, Terminal, Layers } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const roles = portfolioData.hero.typingPhrases;

  // Typing effect for rotating roles
  useEffect(() => {
    if (roles.length === 0) return;
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, roles]);

  // Simulated code slides
  const slides = [
    {
      title: 'Dynamics AX & D365',
      subtitle: 'X++ Services & Business Central',
      accent: '#f3a35f',
      code: `// Enterprise Service & Master Data API\n// Platforms: Dynamics AX 2012 | D365 BC\n[AOTServiceGroup]\npublic class CustomerServiceLayer {\n    public static QueryResult getCompanyData() {\n        return CrossCompany::queryLegalEntities();\n    }\n}`,
    },
    {
      title: 'Production AI Agent',
      subtitle: 'Multi-server MCP & Google Gemini',
      accent: '#cfb27a',
      code: `// Multi-Server Model Context Protocol (MCP)\n// Unified Natural-Language Enterprise Intelligence\nconst mcpAgent = new MCPExtensionAgent({\n  llm: 'Gemini-1.5-Pro',\n  servers: ['AX_SQL_Server', 'HR_Docs', 'CCTV_NVR'],\n  authRequired: true,\n});`,
    },
    {
      title: 'Workflow Automation',
      subtitle: 'n8n, C# APIs, SQL & Webhooks',
      accent: '#d693a5',
      code: `// Automated Vendor Ingestion & Webhook Pipeline\n// IMAP -> AI Extraction -> Approval Gate -> ERP\nPOST /api/vendor-receipt/process\nPayload: { vendorId: "V-9801", total: 42500 }\nStatus: 200 OK -> Posted to Dynamics AX`,
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="page-container hero-layout">
        <div className="hero-copy">
          <div className="availability-badge hero-reveal">
            <span aria-hidden="true" />
            {portfolioData.availability}
          </div>

          <div className="hero-eyebrow hero-reveal hero-delay-1">
            <span>{portfolioData.name}</span>
            <span aria-hidden="true">/</span>
            <span>{portfolioData.hero.locationLine}</span>
          </div>

          <h1 id="hero-title" className="hero-title hero-reveal hero-delay-1">
            {portfolioData.name.split(' ')[0]}{' '}
            <span>{portfolioData.name.split(' ')[1]}.</span>
          </h1>

          {/* Rotating typed roles */}
          <div className="typing-line h-10 flex items-center my-3" aria-live="polite">
            <span className="font-semibold text-lg md:text-xl text-[var(--accent-ink)]">
              {displayedText}
            </span>
            <i className="inline-block w-0.5 h-6 ml-1 bg-[var(--primary-color)] animate-pulse" />
          </div>

          <p className="hero-intro hero-reveal hero-delay-2">
            {portfolioData.hero.description}
          </p>

          <div className="hero-actions hero-reveal hero-delay-3">
            <button
              type="button"
              className="glass-button glass-button-primary text-base px-6 py-3 cursor-pointer"
              onClick={() => onNavigate('projects')}
            >
              View my work <ArrowDown className="w-4 h-4 ml-1.5 inline" />
            </button>
            <a
              className="glass-button glass-button-secondary text-base px-6 py-3 inline-flex items-center"
              href={portfolioData.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <ArrowUpRight className="w-4 h-4 ml-1.5 inline" />
            </a>
          </div>

          <a
            className="text-link hero-ai-link hero-reveal hero-delay-3"
            href="#ai-work"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('skills');
            }}
          >
            {portfolioData.hero.aiLinkLabel} <ArrowDown className="w-4 h-4 ml-1 inline" />
          </a>

          {/* Hero stats */}
          <div className="hero-proof hero-reveal hero-delay-4" aria-label="Professional highlights">
            {portfolioData.hero.highlights.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual: Studio Code Simulation & Tech Orbit */}
        <div className="hero-visual hero-reveal hero-delay-2">
          <div className="mobile-studio" style={{ ['--demo-accent' as string]: slides[activeSlide].accent }}>
            <div className="studio-caption">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[var(--accent-ink)]" />
                FROM ARCHITECTURE TO PRODUCTION
              </span>
              <span>D365 / AX 2012 / AI</span>
            </div>

            <div className="code-editor glass-surface">
              <div className="editor-titlebar">
                <div className="editor-window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <span className="flex items-center gap-1 text-xs">
                  <Terminal className="w-3.5 h-3.5 text-[var(--ink-muted)]" />
                  Visual Studio Code — Enterprise Suite
                </span>
                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  className="cursor-pointer p-1 text-[var(--ink-muted)] hover:text-[var(--ink)]"
                  aria-label={isPaused ? 'Play code animation' : 'Pause code animation'}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="editor-body">
                <div className="editor-pane">
                  <div className="editor-tabs">
                    <span className="flex items-center gap-1 text-xs font-mono">
                      <Layers className="w-3 h-3 text-[var(--accent-ink)]" />
                      EnterpriseBridge.cs
                    </span>
                    <small>D365 / AI ARCHITECTURE</small>
                  </div>
                  <div className="editor-breadcrumb" aria-hidden="true">
                    src &gt; integration &gt; {slides[activeSlide].title}
                  </div>
                  <div className="editor-code font-mono text-[11px] leading-relaxed p-3 overflow-hidden">
                    <pre className="text-[var(--ink)] whitespace-pre-wrap font-inherit">
                      {slides[activeSlide].code}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Cube Tech Orbit Tags */}
              <div className="editor-statusbar flex items-center justify-between p-2 text-[10px] bg-[hsl(var(--muted))] border-t border-[var(--surface-line)]">
                <span className="font-semibold text-[var(--ink-muted)]">ACTIVE TECH CUBES:</span>
                <div className="flex flex-wrap gap-1">
                  {portfolioData.techItems.map((cube) => (
                    <span
                      key={cube}
                      className="px-1.5 py-0.5 rounded bg-[hsl(var(--card))] border border-[var(--surface-line)] font-mono font-bold text-[var(--accent-ink)] text-[9px]"
                    >
                      {cube}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated Live System Overview Phone Card */}
            <div className="iphone-preview">
              <div className="iphone-screen">
                <div className="iphone-status">
                  <span>09:41</span>
                  <div className="flex gap-1 items-center">
                    <span className="text-[8px] font-bold">5G</span>
                  </div>
                </div>
                <div className="dynamic-island" />
                <div className="phone-content p-4">
                  <div className="phone-eyebrow text-xs font-bold text-[var(--demo-accent)] uppercase">
                    {slides[activeSlide].title}
                  </div>
                  <h3 className="text-sm font-bold mt-1 text-[var(--ink-strong)]">
                    {slides[activeSlide].subtitle}
                  </h3>
                  <div className="phone-feature mt-3 p-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--surface-line)]">
                    <strong className="text-base text-[var(--ink-strong)]">Verified Live</strong>
                    <span className="text-xs text-[var(--ink-muted)]">Multi-server connectivity active</span>
                  </div>
                  <div className="phone-checklist mt-3 space-y-1.5 text-xs text-[var(--ink-muted)]">
                    <div className="font-medium text-[var(--ink)]">Stack Features:</div>
                    <div>✓ Dynamics AX 2012 SOAP Layer</div>
                    <div>✓ D365 Business Central AL Extensions</div>
                    <div>✓ Gemini Multi-Server MCP Agent</div>
                    <div>✓ n8n Webhook Approval Pipelines</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
