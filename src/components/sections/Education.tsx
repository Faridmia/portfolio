import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { educationData } from '../../data/portfolioData';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-12 md:py-[65px] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Foundation"
          title="Education &amp; Professional Training"
          subtitle="Formal academic degrees in Computer Science &amp; Technology complemented by rigorous commercial software training."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {educationData.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-3xl glass-card flex flex-col justify-between border ${
                item.isTraining 
                  ? 'border-brand-500/30 bg-brand-500/[0.02]' 
                  : 'border-slate-200 dark:border-white/10'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-brand-500 dark:text-brand-400">
                      {item.isTraining ? <Award className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {item.isTraining ? 'Professional Training' : 'Academic Degree'}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {item.degree}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Institution & Period */}
                <div className="space-y-1 mb-4 pl-1">
                  <p className="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400">
                    {item.institution}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    {item.result && (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">
                        {item.result}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-1">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Verified Badge */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verification: Conferred</span>
                <span className="text-emerald-500">Verified Credentials</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
