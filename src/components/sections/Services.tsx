import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { servicesData } from '../../data/portfolioData';
import { 
  Package, 
  Layout, 
  Server, 
  ShoppingCart, 
  Cpu, 
  Zap, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'Package':
        return <Package className="w-6 h-6 text-indigo-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-sky-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-pink-400" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-purple-400" />;
      default:
        return <Server className="w-6 h-6 text-brand-400" />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-12 md:py-[65px] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services &amp; Capabilities"
          title="Specialized Solutions for Growth"
          subtitle="Delivering production-grade engineering for international agencies, SaaS products, e-commerce stores, and technology startups."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl glass-card flex flex-col justify-between hover:border-brand-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Icon & Title */}
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 w-fit mb-6 group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-xs font-medium text-brand-600 dark:text-brand-400 mb-3">
                  {service.shortDesc}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-100 dark:border-white/5">
                <button
                  onClick={() => handleInquire(service.title)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:bg-brand-500 hover:text-white transition-all group-hover:bg-brand-500 group-hover:text-white"
                >
                  <span>Inquire for {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Consulting Card Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-brand-900/30 via-slate-900/40 to-brand-cyan/20 border border-brand-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Have a custom technical challenge?</h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              From database query debugging to end-to-end WordPress architecture or automated webhooks, let's explore practical options.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-semibold text-xs transition-transform hover:scale-105 shrink-0 shadow-lg"
          >
            Schedule a Conversation
          </a>
        </div>

      </div>
    </section>
  );
};
