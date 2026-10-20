import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { skillsData } from '../../data/portfolioData';
import { 
  Server, 
  Layers, 
  Layout, 
  Terminal, 
  TrendingUp, 
  Cpu
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'backend':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'wordpress':
        return <Layers className="w-5 h-5 text-sky-400" />;
      case 'frontend':
        return <Layout className="w-5 h-5 text-emerald-400" />;
      case 'ai-automation':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'devops-tools':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'marketing-seo':
        return <TrendingUp className="w-5 h-5 text-pink-400" />;
      default:
        return <Server className="w-5 h-5 text-brand-400" />;
    }
  };

  const getBadgeStyle = (level: string) => {
    switch (level) {
      case 'Production':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25';
      case 'Proficient':
        return 'bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/25';
      case 'Experimentation':
        return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/25';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-12 md:py-[65px] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills &amp; Technology Stack"
          title="Engineered for Reliability &amp; Scalability"
          subtitle="Honest technical competencies organized by domain. Clearly distinguishing production-hardened expertise from experimental exploratory tools."
        />

        {/* Legend & Filter Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-white/10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-brand-500 text-white font-semibold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5'
              }`}
            >
              All Categories
            </button>
            {skillsData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-500 text-white font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Level Legend */}
          <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Production Core</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-400"></span>
              <span>Proficient</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>Experimentation</span>
            </span>
          </div>

        </div>

        {/* Skills Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-3xl glass-card flex flex-col justify-between hover:border-brand-500/30 transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${getBadgeStyle(
                        skill.level
                      )}`}
                    >
                      <span>{skill.name}</span>
                      <span className="text-[10px] opacity-75 font-mono">
                        ({skill.level === 'Production' ? 'Prod' : skill.level === 'Proficient' ? 'Prof' : 'Exp'})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span>{category.skills.length} verified technologies</span>
                <span className="text-brand-500 font-semibold">Active Practice</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Transparency */}
        <div className="mt-12 p-4 rounded-2xl bg-brand-500/5 border border-brand-500/15 max-w-2xl mx-auto text-center text-xs text-slate-600 dark:text-slate-400">
          <strong className="text-slate-900 dark:text-white font-semibold">Transparency Guarantee:</strong> Web development in PHP &amp; WordPress represents 6+ years of primary daily employment. AI workflows &amp; digital marketing are positioned as complementary capabilities.
        </div>

      </div>
    </section>
  );
};
