import React, { useState } from 'react';
import { 
  ArrowRight, 
  Github, 
  Sparkles, 
  Code2, 
  Cpu, 
  Workflow, 
  CheckCircle2,
  Server,
  Zap
} from 'lucide-react';
import { personalInfo, credibilityStats } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'api' | 'automation' | 'ai'>('automation');

  return (
    <section id="home" className="relative pt-28 pb-12 md:pt-36 md:pb-[65px] overflow-hidden bg-grid">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-600/15 via-brand-cyan/15 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 -right-20 w-80 h-80 bg-brand-500/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide bg-brand-500/10 text-brand-500 dark:text-brand-400 border border-brand-500/25 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span>INDEPENDENT DEVELOPER · WEB · AUTOMATION · AI</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] lg:leading-[1.12]">
              Building Digital Products That{' '}
              <span className="bg-gradient-to-r from-brand-500 via-indigo-400 to-brand-cyan bg-clip-text text-transparent">
                Work Smarter.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              I'm <strong className="text-slate-900 dark:text-white font-semibold">Farid Mia</strong>, a developer with 6+ years of experience building WordPress products, Laravel applications, custom APIs, and intelligent automation workflows.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/35 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Let's Work Together</span>
              </a>

              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                aria-label="View Farid Mia on GitHub"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub</span>
              </a>
            </div>

            {/* Trust Micro-Row */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Clean Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
                <span>Production Proven</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>API &amp; Local AI Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Intersection Visual (CSS/SVG) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Card */}
              <div className="rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-white/0 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[22px] bg-[#0c1220] dark:bg-[#0c1220] border border-white/10 p-5 sm:p-6 space-y-5 text-slate-100 shadow-inner">
                  
                  {/* Visual Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-xs font-mono text-slate-400 ml-2">farid-architecture.sys</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      LIVE NODES
                    </span>
                  </div>

                  {/* Interactive Switcher Tabs */}
                  <div className="grid grid-cols-3 gap-1 bg-black/40 p-1 rounded-xl text-xs font-mono">
                    <button
                      onClick={() => setActiveTab('api')}
                      className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg transition-all ${
                        activeTab === 'api' 
                          ? 'bg-brand-500 text-white font-semibold shadow-sm' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Server className="w-3.5 h-3.5" />
                      <span>Web &amp; API</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('automation')}
                      className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg transition-all ${
                        activeTab === 'automation' 
                          ? 'bg-brand-500 text-white font-semibold shadow-sm' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Workflow className="w-3.5 h-3.5" />
                      <span>n8n Pipeline</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('ai')}
                      className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg transition-all ${
                        activeTab === 'ai' 
                          ? 'bg-brand-500 text-white font-semibold shadow-sm' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Local LLM</span>
                    </button>
                  </div>

                  {/* Dynamic Graphic Display */}
                  <div className="relative bg-black/50 rounded-2xl p-5 border border-white/5 font-mono min-h-[220px] flex flex-col justify-between overflow-hidden">
                    
                    {/* SVG Connector lines */}
                    <div className="absolute inset-0 pointer-events-none opacity-25">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#6366F1" strokeWidth="2" strokeDasharray="4 4" />
                        <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" />
                        <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
                      </svg>
                    </div>

                    {activeTab === 'api' && (
                      <div className="space-y-3 relative z-10 animate-fadeIn">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span className="flex items-center gap-1.5 text-indigo-400">
                            <Code2 className="w-3.5 h-3.5" /> Laravel REST Controller
                          </span>
                          <span className="text-[10px] text-emerald-400">200 OK · 24ms</span>
                        </div>
                        <div className="text-[11px] leading-relaxed text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                          <p><span className="text-pink-400">Route::post</span>(<span className="text-emerald-300">'/v1/sync'</span>, [SyncController::class]);</p>
                          <p className="text-slate-400 mt-1">// Query cache &amp; index optimization</p>
                          <p className="text-sky-300">DB::table(<span className="text-amber-300">'events'</span>)-&gt;where(<span className="text-amber-300">'status'</span>, <span className="text-emerald-300">'active'</span>);</p>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
                          <span>Payload: JSON / REST API</span>
                          <span className="text-indigo-400">Auth: Sanctum Bearer</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 'automation' && (
                      <div className="space-y-3 relative z-10 animate-fadeIn">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span className="flex items-center gap-1.5 text-sky-400">
                            <Zap className="w-3.5 h-3.5" /> n8n Orchestrator Node
                          </span>
                          <span className="text-[10px] text-sky-400">Active Trigger</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                          <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                            <p className="text-[9px] text-slate-500">1. Source</p>
                            <p className="font-bold text-sky-300">Webhook</p>
                          </div>
                          <div className="p-2 rounded-lg bg-brand-500/20 border border-brand-500/40 text-brand-300">
                            <p className="text-[9px] text-brand-400">2. Parse</p>
                            <p className="font-bold">n8n Filter</p>
                          </div>
                          <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
                            <p className="text-[9px] text-emerald-400">3. Action</p>
                            <p className="font-bold">Dispatch</p>
                          </div>
                        </div>
                        <div className="text-[10px] text-slate-400 bg-white/5 p-2 rounded-lg border border-white/5 flex items-center justify-between">
                          <span>Status: Event Ingested</span>
                          <span className="text-emerald-400 font-bold">100% Automated</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 'ai' && (
                      <div className="space-y-3 relative z-10 animate-fadeIn">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span className="flex items-center gap-1.5 text-cyan-400">
                            <Sparkles className="w-3.5 h-3.5" /> Ollama Local LLM Engine
                          </span>
                          <span className="text-[10px] text-cyan-300">Localhost:11434</span>
                        </div>
                        <div className="text-[11px] leading-relaxed text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                          <p className="text-slate-400">// Model: Llama 3 / Mistral (Quantized 4-bit)</p>
                          <p className="text-cyan-300 mt-1">Prompt &gt; Summarize support ticket text</p>
                          <p className="text-emerald-300 text-[10px] mt-1">Response &gt; {`{"sentiment": "neutral", "priority": "high"}`}</p>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
                          <span>Data Privacy: 100% Local</span>
                          <span className="text-cyan-400">Zero Cloud Leak</span>
                        </div>
                      </div>
                    )}

                    {/* Bottom Status Ticker */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Stack Engine: Ready
                      </span>
                      <span>Dhaka · UTC+6</span>
                    </div>
                  </div>

                  {/* Micro Footer Spec */}
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-[11px]">Primary: PHP / WP / Laravel</span>
                    <span className="font-mono text-[11px] text-brand-400">Complementary: AI &amp; Ads</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Compact Credibility Row */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200 dark:border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {credibilityStats.map((stat, i) => (
              <div key={i} className="space-y-1 group">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight group-hover:text-brand-500 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
