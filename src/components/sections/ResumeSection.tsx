import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { FileText, Mail, Phone, MapPin, Globe, GraduationCap, Briefcase, Code, Languages } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="portfolio-section" aria-labelledby="resume-title">
      <div className="page-container">
        <header className="section-heading mb-12">
          <div className="section-kicker">
            <span aria-hidden="true">07</span>
            <span>Curriculum Vitae</span>
          </div>
          <h2 id="resume-title">Resume.</h2>
          <p>Complete professional profile, enterprise experience, academic background, and technical toolkit.</p>
        </header>

        <div className="portfolio-card p-6 md:p-10 max-w-5xl mx-auto border border-[var(--surface-line)] shadow-lg">
          {/* Resume Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[var(--surface-line)]">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-ink)] uppercase">
                CURRICULUM VITAE
              </span>
              <h3 className="text-3xl font-extrabold text-[var(--ink-strong)] mt-1">
                {portfolioData.name}
              </h3>
              <p className="text-base font-semibold text-[var(--accent-ink)] mt-1">
                {portfolioData.occupation}
              </p>
            </div>

            <div className="flex flex-col gap-2 text-xs md:text-sm text-[var(--ink-muted)]">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--accent-ink)]" />
                <a href={`mailto:${portfolioData.contact.email}`} className="hover:underline">
                  {portfolioData.contact.email}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--accent-ink)]" />
                <a href={`tel:${portfolioData.contact.phone}`} className="hover:underline">
                  {portfolioData.contact.phone}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--accent-ink)]" />
                {portfolioData.location}
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[var(--accent-ink)]" />
                <a href={portfolioData.links.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  {portfolioData.links.linkedin.replace('https://www.', '')}
                </a>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="py-6 border-b border-[var(--surface-line)]">
            <h4 className="flex items-center gap-2 text-base font-bold text-[var(--ink-strong)] mb-3">
              <FileText className="w-4 h-4 text-[var(--accent-ink)]" />
              PROFESSIONAL SUMMARY
            </h4>
            <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
              {portfolioData.tagline} {portfolioData.about.paragraphs[0]}
            </p>
          </div>

          {/* Work Experience */}
          <div className="py-6 border-b border-[var(--surface-line)]">
            <h4 className="flex items-center gap-2 text-base font-bold text-[var(--ink-strong)] mb-6">
              <Briefcase className="w-4 h-4 text-[var(--accent-ink)]" />
              PROFESSIONAL EXPERIENCE
            </h4>
            <div className="space-y-6">
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <strong className="text-base text-[var(--ink-strong)]">{exp.role}</strong>
                      <span className="text-sm text-[var(--accent-ink)] font-semibold"> — {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-[var(--ink-muted)] bg-[hsl(var(--muted))] px-2.5 py-0.5 rounded">
                      {exp.duration} | {exp.location}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-[var(--ink-muted)] pl-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="py-6 border-b border-[var(--surface-line)]">
            <h4 className="flex items-center gap-2 text-base font-bold text-[var(--ink-strong)] mb-4">
              <GraduationCap className="w-4 h-4 text-[var(--accent-ink)]" />
              EDUCATION
            </h4>
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <strong className="text-base text-[var(--ink-strong)]">{edu.degree}</strong>
                  <p className="text-sm text-[var(--ink-muted)]">
                    {edu.institution} — {edu.location}
                  </p>
                </div>
                <span className="text-xs font-mono text-[var(--accent-ink)] bg-[hsl(var(--muted))] px-2.5 py-0.5 rounded">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>

          {/* Key Skills & Languages */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="flex items-center gap-2 text-base font-bold text-[var(--ink-strong)] mb-3">
                <Code className="w-4 h-4 text-[var(--accent-ink)]" />
                CORE TECHNICAL SKILLS
              </h4>
              <div className="space-y-2 text-xs md:text-sm text-[var(--ink-muted)]">
                <div>
                  <strong className="text-[var(--ink)]">ERP:</strong> Dynamics AX 2012 R3 (X++), Dynamics 365 Business Central (AL), Dynamics CRM
                </div>
                <div>
                  <strong className="text-[var(--ink)]">AI &amp; Automation:</strong> Gemini, MCP Architecture, n8n, Webhooks, AI Extraction
                </div>
                <div>
                  <strong className="text-[var(--ink)]">APIs &amp; Data:</strong> SOAP, REST, ASP.NET Web API, SQL Server, PostgreSQL, SSRS
                </div>
              </div>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-base font-bold text-[var(--ink-strong)] mb-3">
                <Languages className="w-4 h-4 text-[var(--accent-ink)]" />
                LANGUAGES
              </h4>
              <div className="flex gap-4">
                {portfolioData.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 rounded-lg bg-[hsl(var(--muted))] text-sm font-semibold text-[var(--ink-strong)] border border-[var(--surface-line)]"
                  >
                    {lang} (Fluent)
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
