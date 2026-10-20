import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { projectsData } from '../../data/portfolioData';
import { Project, ProjectCategory } from '../../types';
import { ProjectVisual } from '../common/ProjectVisual';
import { ExternalLink, Eye, ArrowRight, Youtube } from 'lucide-react';
import { ProjectModal } from '../common/ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'WordPress', 'Laravel & PHP', 'Automation & AI'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-12 md:py-[65px] relative bg-slate-50/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Featured Projects"
          title="Engineered for Impact &amp; Usability"
          subtitle="A selection of commercial WordPress products, production Laravel applications, and AI automation workflows."
        />

        {/* Filter Navigation */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25 scale-105'
                  : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl glass-card overflow-hidden flex flex-col justify-between hover:border-brand-500/40 transition-all duration-300"
            >
              <div>
                {/* Visual Preview Header */}
                <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <ProjectVisual type={project.imageType} accentColor={project.accentColor} />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-white text-slate-900 hover:bg-slate-100 flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75"
                        aria-label={`Watch ${project.title} video overview`}
                      >
                        <Youtube className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-xl text-xs font-semibold bg-brand-500 hover:bg-brand-600 text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75"
                        aria-label={`Open ${project.title} live link`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-medium text-brand-600 dark:text-brand-400">
                      {project.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10">
                      {project.statusBadge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>Details &amp; Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                {project.videoUrl ? (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-rose-500 hover:text-rose-400 hover:underline flex items-center gap-1 font-mono"
                  >
                    <Youtube className="w-3.5 h-3.5" />
                    <span>Watch Demo</span>
                  </a>
                ) : project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
                  >
                    <span>Live Product</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                    Verified Work
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal View */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
