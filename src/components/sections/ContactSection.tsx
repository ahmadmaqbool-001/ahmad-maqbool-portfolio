import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please add a subject.';
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Please include at least 10 characters.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus('Please review the highlighted fields.');
      return;
    }

    setStatus('Opening your email client with this message prepared...');
    const bodyText = `Hello Ahmad,\n\nI’m ${formData.name.trim()} (${formData.email.trim()}).\n\n${formData.message.trim()}`;
    const mailtoUrl = `mailto:${portfolioData.contact.email}?subject=${encodeURIComponent(
      formData.subject.trim()
    )}&body=${encodeURIComponent(bodyText)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="portfolio-section contact-section" aria-labelledby="contact-title">
      <div className="page-container">
        <header className="section-heading mb-12">
          <div className="section-kicker">
            <span aria-hidden="true">08</span>
            <span>Contact</span>
          </div>
          <h2 id="contact-title">Let’s connect.</h2>
          <p>Open to ERP Developer, Dynamics AX / D365, and AI Automation engineering opportunities.</p>
        </header>

        <div className="contact-layout">
          {/* Contact Direct Conversion Card */}
          <div className="contact-conversion portfolio-card p-6 md:p-8">
            <span className="contact-label text-xs font-mono font-bold text-[var(--accent-ink)] uppercase">
              GET IN TOUCH
            </span>
            <h3 className="text-2xl font-bold text-[var(--ink-strong)] mt-2">
              {portfolioData.contact.heading}
            </h3>
            <p className="text-sm text-[var(--ink-muted)] mt-2 leading-relaxed">
              {portfolioData.contact.intro}
            </p>

            <div className="contact-details space-y-4 mt-8">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-[hsl(var(--muted))] hover:bg-[hsl(var(--accent))] transition-colors"
              >
                <Mail className="w-5 h-5 text-[var(--accent-ink)] shrink-0" />
                <div className="flex flex-col text-left">
                  <small className="text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">Email</small>
                  <strong className="text-sm text-[var(--ink-strong)] break-all">{portfolioData.contact.email}</strong>
                </div>
              </a>

              <a
                href={`tel:${portfolioData.contact.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-[hsl(var(--muted))] hover:bg-[hsl(var(--accent))] transition-colors"
              >
                <Phone className="w-5 h-5 text-[var(--accent-ink)] shrink-0" />
                <div className="flex flex-col text-left">
                  <small className="text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">Phone</small>
                  <strong className="text-sm text-[var(--ink-strong)]">{portfolioData.contact.phone}</strong>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[hsl(var(--muted))]">
                <MapPin className="w-5 h-5 text-[var(--accent-ink)] shrink-0" />
                <div className="flex flex-col text-left">
                  <small className="text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">Location</small>
                  <strong className="text-sm text-[var(--ink-strong)]">{portfolioData.location}</strong>
                </div>
              </div>
            </div>

            <div className="contact-network mt-8 pt-6 border-t border-[var(--surface-line)]">
              <a
                href={portfolioData.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent-ink)] hover:underline"
              >
                LinkedIn Profile <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="contact-form-shell portfolio-card p-6 md:p-8">
            <div className="contact-form-head flex items-center justify-between mb-6 pb-4 border-b border-[var(--surface-line)]">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-mono font-bold text-[var(--ink-muted)]">NEW MESSAGE</span>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="form-field">
                <label htmlFor="contact-name" className="block text-xs font-semibold text-[var(--ink-strong)] mb-1">
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="glass-input w-full p-2.5 text-sm rounded-lg"
                />
                {errors.name && <p className="form-error text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--ink-strong)] mb-1">
                  Work email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="glass-input w-full p-2.5 text-sm rounded-lg"
                />
                {errors.email && <p className="form-error text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--ink-strong)] mb-1">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={portfolioData.contact.subjectPlaceholder}
                  className="glass-input w-full p-2.5 text-sm rounded-lg"
                />
                {errors.subject && <p className="form-error text-xs text-red-500 mt-1">{errors.subject}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--ink-strong)] mb-1">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the team, ERP platform, or automation opportunity."
                  className="glass-input contact-message w-full p-2.5 text-sm rounded-lg"
                />
                {errors.message ? (
                  <p className="form-error text-xs text-red-500 mt-1">{errors.message}</p>
                ) : (
                  <p className="form-note text-[11px] text-[var(--ink-muted)] mt-1">
                    Prepares an email directly in your default mail app.
                  </p>
                )}
              </div>

              {status && <p className="form-status text-xs font-medium text-[var(--accent-ink)]" role="status">{status}</p>}

              <button
                type="submit"
                className="glass-button glass-button-primary w-full py-3 flex items-center justify-center gap-2 cursor-pointer font-semibold text-sm"
              >
                Prepare email <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
