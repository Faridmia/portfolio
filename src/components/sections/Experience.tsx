import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { experienceData } from '../../data/portfolioData';
import { Calendar, CheckCircle2, Building } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 md:py-[65px] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career Journey"
          title="Professional Experience"
          subtitle="6+ years of verified software development roles across WordPress product agencies and web engineering teams."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-brand-500 via-brand-cyan to-slate-300 dark:to-white/10 hidden sm:block" />

          <div className="space-y-12 relative">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  {/* Center Dot Indicator */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#080C14] border-2 border-brand-500 items-center justify-center z-10 shadow-lg group-hover:scale-110 group-hover:border-brand-cyan transition-all">
                    <span className={`w-2.5 h-2.5 rounded-full ${item.isCurrent ? 'bg-emerald-400 animate-ping' : 'bg-brand-400'}`} />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="p-6 sm:p-7 rounded-3xl glass-card border border-slate-200 dark:border-white/10 group-hover:border-brand-500/40 transition-all duration-300">
                      
                      {/* Company & Role Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <span className="text-xs font-mono font-medium text-brand-600 dark:text-brand-400 flex items-center gap-1.5 mb-1">
                            <Building className="w-3.5 h-3.5" />
                            <span>{item.company}</span>
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                            {item.role}
                          </h3>
                        </div>

                        {item.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/25">
                            CURRENT ROLE
                          </span>
                        )}
                      </div>

                      {/* Period Badge */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono mb-4">
                        <Calendar className="w-3.5 h-3.5 text-brand-400" />
                        <span>{item.period}</span>
                      </div>

                      {/* Responsibilities Bullets */}
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Applied */}
                      <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-1.5">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer Column for symmetry */}
                  <div className="hidden sm:block w-full sm:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
