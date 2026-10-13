import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  theme: string;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  theme,
  toggleTheme,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <nav className={`glass-navbar ${scrolled ? 'is-scrolled' : ''}`} aria-label="Primary navigation">
      <div className="nav-shell">
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="brand-mark"
          aria-label="Ahmad Maqbool - Go to top"
        >
          <span className="brand-logo-frame" aria-hidden="true">
            <span className="font-bold text-sm tracking-wider text-[var(--accent-ink)]">
              {portfolioData.initials}
            </span>
          </span>
          <span className="brand-copy">
            <strong>{portfolioData.name}</strong>
            <small>{portfolioData.brandSubtitle}</small>
          </span>
        </button>

        <div className="nav-links" aria-label="Portfolio sections">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={activeSection === item.id ? 'is-active' : ''}
              aria-current={activeSection === item.id ? 'location' : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <a
            className="nav-external"
            href={portfolioData.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            LinkedIn <ArrowUpRight className="w-3.5 h-3.5 inline ml-0.5" />
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            className="nav-icon-button"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>

          <button
            type="button"
            className="nav-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-header">
          <span>Navigate</span>
          <span>{String(navItems.length).padStart(2, '0')} sections</span>
        </div>
        <div className="mobile-menu-links">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={activeSection === item.id ? 'is-active' : ''}
            >
              <span>{String(idx + 1).padStart(2, '0')}</span>
              <strong>{item.label}</strong>
            </button>
          ))}
        </div>
        <div className="mobile-menu-actions">
          <a
            href={portfolioData.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass-button"
          >
            LinkedIn Profile <ArrowUpRight className="w-4 h-4 ml-1 inline" />
          </a>
        </div>
      </div>
    </nav>
  );
};
