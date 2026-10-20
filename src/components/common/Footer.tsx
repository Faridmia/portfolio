import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

// Custom clean WordPress Icon SVG
export const WordPressIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.06a8.06 8.06 0 0 1-5.18-1.9l4.58-12.54 4.54 12.43A8.02 8.02 0 0 1 12 20.06zm-6.27-3.9A7.98 7.98 0 0 1 3.94 12c0-1.87.65-3.59 1.74-4.96l3.6 9.87a8.21 8.21 0 0 1-3.55-.81zm11.23-.42-2.92-8.5c.67-.03 1.28-.1 1.28-.1.44-.06.4-.73-.04-.7 0 0-1.33.11-2.2.11-.84 0-2.18-.11-2.18-.11-.44-.03-.48.64-.04.7 0 0 .58.07 1.2.1l2.45 6.7-3.44 10.26A8.07 8.07 0 0 1 5.92 6.64l.05.1c.32.74.88 2.37.88 3.52 0 1.2-.42 2.05-.42 3.23 0 1.13.75 2.18 1.83 2.18.99 0 1.74-.89 1.74-2.1 0-1.57-1.12-2.86-1.12-4.14 0-1.07.72-2.14 1.94-2.14.7 0 1.34.4 1.62.9l4.47 12.35c.01-.01.03-.02.05-.04zm3.32-3.86a7.99 7.99 0 0 1-1.39 3.48l-2.9-8.47c.56-.25 1.15-.4 1.79-.4.9 0 1.5.34 1.87.9.43.66.63 1.63.63 2.87 0 .58-.02 1.12-.08 1.62z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#070A10] transition-colors pt-12 pb-12 lg:pt-[65px] lg:pb-12 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-brand-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-200 dark:border-white/5">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black font-mono tracking-wider text-slate-900 dark:text-white">
                FARID<span className="text-brand-500">.</span>MIA
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Projects
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
              Full-Stack Developer, WordPress Product Engineer &amp; AI Automation Specialist based in Dhaka, Bangladesh.
            </p>
          </div>

          {/* Quick Anchor Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
            <a href="#about" className="hover:text-brand-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-brand-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-brand-500 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-brand-500 transition-colors">Experience</a>
            <a href="#automation" className="hover:text-brand-500 transition-colors">Automation</a>
            <a href="#contact" className="hover:text-brand-500 transition-colors">Contact</a>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-500/40 transition-all hover:scale-105"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-500/40 transition-all hover:scale-105"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.social.wordpress}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WordPress.org Profile"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-500/40 transition-all hover:scale-105"
            >
              <WordPressIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-500/40 transition-all hover:scale-105"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-500/40 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-500 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 ml-2 hover:border-brand-500/40 transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 gap-4">
          <p>© {currentYear} Farid Mia. All rights reserved.</p>
          <p className="font-mono text-slate-400 dark:text-slate-500">
            Designed and built with modern precision · Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};
