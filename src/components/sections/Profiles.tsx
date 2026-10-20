import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { profileLinks } from '../../data/portfolioData';
import { Github, Linkedin, ExternalLink, ShieldCheck, Facebook } from 'lucide-react';
import { WordPressIcon } from '../common/Footer';

export const Profiles: React.FC = () => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <Github className="w-8 h-8 text-white" />;
      case 'WordPress.org':
        return <WordPressIcon className="w-8 h-8 text-[#21759B]" />;
      case 'LinkedIn':
        return <Linkedin className="w-8 h-8 text-[#0A66C2]" />;
      case 'Facebook':
        return <Facebook className="w-8 h-8 text-[#1877F2]" />;
      default:
        return <ExternalLink className="w-8 h-8 text-brand-400" />;
    }
  };

  return (
    <section className="py-12 md:py-[65px] relative bg-slate-50/50 dark:bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Verified Presence"
          title="Open Source &amp; Developer Profiles"
          subtitle="Direct links to my official profiles, open source contributions, and professional network."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileLinks.map((profile) => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-3xl glass-card flex flex-col justify-between group hover:border-brand-500/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Row: Icon & Status */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                    {getIcon(profile.platform)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-brand-500/10 text-brand-500 dark:text-brand-400 border border-brand-500/20">
                    {profile.badge}
                  </span>
                </div>

                <div className="space-y-1 mb-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>{profile.platform}</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    @{profile.handle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {profile.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-brand-600 dark:text-brand-400 group-hover:underline">
                <span>View Official Profile</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>All profiles independently verified · No simulated bot metrics</span>
        </div>

      </div>
    </section>
  );
};
