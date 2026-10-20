import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { 
  Code, 
  Database, 
  Workflow, 
  CheckCircle, 
  MapPin, 
  Briefcase, 
  GraduationCap,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-[65px] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering Reliable Software with Modern Automation"
          subtitle="A background built on production codebases, commercial WordPress releases, and practical workflow systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <div className="p-6 sm:p-8 rounded-3xl glass-card space-y-4">
              <p>
                I'm a software developer with a strong foundation in <strong className="text-slate-900 dark:text-white font-semibold">PHP, Laravel, and WordPress</strong>. Over the years, I've worked on commercial WordPress themes, custom plugins, WooCommerce extensions, client projects, bug fixes, and production software.
              </p>
              
              <p>
                My experience includes developing and maintaining products for established WordPress businesses, contributing to product quality, optimizing database queries, troubleshooting complex issues, and collaborating with development teams.
              </p>

              <p>
                Beyond traditional web development, I've explored <strong className="text-slate-900 dark:text-white font-semibold">n8n workflow automation, local LLMs with Ollama, AI integrations</strong>, and digital marketing with Google Ads and Meta platforms.
              </p>

              <p className="text-brand-600 dark:text-brand-400 font-medium">
                I enjoy connecting reliable software engineering with practical automation to build solutions that save time, improve workflows, and create real value.
              </p>
            </div>

            {/* Core Development Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-brand-500 font-semibold text-sm">
                  <Code className="w-4 h-4" />
                  <span>Maintainable Architecture</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  Writing clean, object-oriented, self-documenting code following WordPress and Laravel coding standards.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-500 font-semibold text-sm">
                  <Database className="w-4 h-4" />
                  <span>Query &amp; Speed Optimization</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  Tuning SQL execution, reducing transient overhead, and eliminating unnecessary frontend scripts.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-sky-500 font-semibold text-sm">
                  <Workflow className="w-4 h-4" />
                  <span>Intelligent Automations</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  Leveraging webhook pipelines with n8n and local Ollama inference to automate repetitive manual work.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-purple-500 font-semibold text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Honest Engineering</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  Clear communication, verifiable experience, and transparent distinction between production tools and experiments.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info & Journey Snapshot Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 glass-card border border-slate-200 dark:border-white/10 space-y-6">
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-cyan flex items-center justify-center text-white text-xl font-bold font-mono shadow-md">
                  FM
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Farid Mia</h3>
                  <p className="text-xs text-brand-500 dark:text-brand-400 font-mono">Senior Full-Stack Developer</p>
                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>

              {/* Verified Quick Highlights */}
              <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-white/10 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" /> Total Experience
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 font-mono">6+ Years (Since 2019)</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" /> Academic Degree
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">BSc in Computer Science (CSE)</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Primary Focus
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">PHP, Laravel, WordPress</span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Workflow className="w-3.5 h-3.5" /> Modern Edge
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">n8n Automation &amp; Local AI</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <a
                  href="#experience"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-white/10 transition-colors"
                >
                  <span>Explore Career Timeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
