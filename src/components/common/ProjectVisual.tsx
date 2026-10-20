import React from 'react';
import { 
  Building2, 
  MenuSquare, 
  Coins, 
  GraduationCap, 
  BellRing, 
  Cpu, 
  Calendar,
  Layers,
  ArrowRight,
  ShoppingBag,
  Store,
  Play
} from 'lucide-react';

interface ProjectVisualProps {
  type: 'hotel' | 'menu' | 'currency' | 'education' | 'notification' | 'laravel' | 'pos' | 'automation';
  accentColor?: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type }) => {
  switch (type) {
    case 'hotel':
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#0c1322] via-[#11192e] to-[#151f38] p-4 flex flex-col justify-between overflow-hidden rounded-t-2xl border-b border-white/5 select-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Building2 className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold text-slate-300">Room Booking Engine</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Live Calendar
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono text-slate-400">
              <div className="bg-white/5 p-1.5 rounded-md border border-white/5">
                <p className="text-[9px] text-slate-500">Check-in</p>
                <p className="font-semibold text-white">Oct 24</p>
              </div>
              <div className="bg-white/5 p-1.5 rounded-md border border-white/5">
                <p className="text-[9px] text-slate-500">Guests</p>
                <p className="font-semibold text-white">2 Adults</p>
              </div>
              <div className="bg-indigo-500/20 p-1.5 rounded-md border border-indigo-500/30 text-indigo-300">
                <p className="text-[9px] text-indigo-400">Availability</p>
                <p className="font-semibold text-indigo-200">98.4%</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-slate-300 text-[11px]">Deluxe Suite Room #104</span>
              </div>
              <span className="font-mono text-xs font-bold text-indigo-400">$189/night</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>WP Hotel Plugin Core</span>
            <span className="text-indigo-400 flex items-center gap-1">Instant AJAX Filter <ArrowRight className="w-2.5 h-2.5" /></span>
          </div>
        </div>
      );

    case 'menu':
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#0c1424] via-[#0f1d36] to-[#122344] p-4 flex flex-col justify-between overflow-hidden rounded-t-2xl border-b border-white/5 select-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30">
                <MenuSquare className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold text-slate-300">RT Mega Menu Pro</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
              Walker_Nav_Menu
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-sky-500/20 space-y-2">
            <div className="flex items-center gap-4 text-[11px] border-b border-white/5 pb-1.5 font-medium">
              <span className="text-sky-400 flex items-center gap-1 font-bold">
                Products <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              </span>
              <span className="text-slate-400">Solutions</span>
              <span className="text-slate-400">Pricing</span>
              <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                PRO ACTIVE
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="bg-white/5 p-1.5 rounded border border-white/5">
                <p className="font-semibold text-slate-200">E-Commerce Flow</p>
                <p className="text-[9px] text-slate-400">Grid catalog &amp; badges</p>
              </div>
              <div className="bg-white/5 p-1.5 rounded border border-white/5">
                <p className="font-semibold text-slate-200">Interactive Blocks</p>
                <p className="text-[9px] text-slate-400">Custom HTML &amp; Widgets</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>Zero-bloat (14kb)</span>
            <span className="text-sky-400">Fully Accessible</span>
          </div>
        </div>
      );

    case 'currency':
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#0a1818] via-[#0d2222] to-[#122e2e] p-4 flex flex-col justify-between overflow-hidden rounded-t-2xl border-b border-white/5 select-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Coins className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold text-slate-300">Woo Multi-Currency</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Geo-IP Auto
            </span>
          </div>

          <div className="bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-500/20 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">Cart Total:</span>
              <span className="font-mono font-bold text-emerald-400 text-sm">$249.00 USD</span>
            </div>
            <div className="flex items-center gap-1.5 pt-1 border-t border-emerald-500/10">
              <span className="px-2 py-0.5 rounded bg-emerald-500 text-black text-[10px] font-bold">USD $</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 text-[10px]">EUR €</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 text-[10px]">GBP £</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 text-[10px]">BDT ৳</span>
            </div>
            <p className="text-[10px] text-emerald-300/80 font-mono">
              Live Rate Sync: 1 USD = 0.92 EUR
            </p>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>WooCommerce Ready</span>
            <span className="text-emerald-400">Checkout Compatible</span>
          </div>
        </div>
      );

    case 'education':
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#1c140a] via-[#241a0d] to-[#302211] p-4 flex flex-col justify-between overflow-hidden rounded-t-2xl border-b border-white/5 select-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <GraduationCap className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold text-slate-300">HiStudy LMS Theme</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              ThemeForest
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-amber-500/20 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-200">Full-Stack Web Masterclass</span>
              <span className="text-[10px] font-mono text-amber-400 font-bold">4.9 ★★★★★</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div className="bg-amber-400 h-1.5 rounded-full w-3/4"></div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>Curriculum: 14 Modules</span>
              <span className="text-amber-300">Elementor Suite</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>Tutor LMS / LearnPress</span>
            <span className="text-amber-400">High PageSpeed</span>
          </div>
        </div>
      );

    case 'notification':
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#140e24] via-[#1a1230] to-[#251945] p-4 flex flex-col justify-between overflow-hidden rounded-t-2xl border-b border-white/5 select-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30">
                <BellRing className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold text-slate-300">Infinite Notification</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              WordPress.org
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/20 shadow-lg space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              <span className="text-[11px] font-semibold text-purple-200">Seasonal Flash Announcement</span>
            </div>
            <p className="text-[10px] text-slate-300">
              Dynamic notice bar targeting first-time shoppers with countdown timer.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[9px] font-mono text-purple-300">
              <span>Display: Header &amp; Toast</span>
              <span>•</span>
              <span>Trigger: 3s Delay</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>Open Source Repository</span>
            <span className="text-purple-400">Zero Dependencies</span>
          </div>
        </div>
      );

    case 'laravel':
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#1c0c16] via-[#24101e] to-[#34162a] p-4 flex flex-col justify-between overflow-hidden rounded-t-2xl border-b border-white/5 select-none font-mono">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-pink-500/20 text-pink-400 border border-pink-500/30">
                <ShoppingBag className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold text-slate-300 font-sans">Laravel E-Commerce</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 flex items-center gap-1">
              <Play className="w-2.5 h-2.5 fill-current" /> Video Demo
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-pink-500/20 text-[10px] space-y-1">
            <div className="text-slate-400 flex items-center justify-between">
              <span>Cart &amp; Order Pipeline</span>
              <span className="text-emerald-400">Checkout Ready</span>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] text-pink-300 bg-white/5 p-1 rounded">
              <span>Catalog &bull; Multi-vendor &bull; Payment API</span>
            </div>
            <div className="text-[9px] text-slate-400">
              Blade Views &bull; Eloquent Models &bull; Migrations
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>MySQL Transactions</span>
            <span className="text-pink-400">Watch Overview</span>
          </div>
        </div>
      );

    case 'pos':
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#1c140a] via-[#291b0c] to-[#38230a] p-4 flex flex-col justify-between overflow-hidden rounded-t-2xl border-b border-white/5 select-none font-mono">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Store className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold text-slate-300 font-sans">POS &amp; Business ERP</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
              <Play className="w-2.5 h-2.5 fill-current" /> Video Demo
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-amber-500/20 text-[10px] space-y-1">
            <div className="flex items-center justify-between text-slate-300">
              <span>Barcode Scan #9842</span>
              <span className="text-emerald-400 font-bold">$142.50</span>
            </div>
            <div className="flex items-center justify-between text-[9px] text-amber-300 bg-white/5 p-1 rounded">
              <span>Inventory Sync</span>
              <span className="text-emerald-400">Stock: 24 units</span>
            </div>
            <div className="text-[9px] text-slate-400">
              Thermal Receipt &bull; Ledger &bull; Reports
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>Multi-Store ERP</span>
            <span className="text-amber-400">Watch Overview</span>
          </div>
        </div>
      );

    case 'automation':
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#081822] via-[#0d2232] to-[#113047] p-4 flex flex-col justify-between overflow-hidden rounded-t-2xl border-b border-white/5 select-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Cpu className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold text-slate-300">n8n + Ollama Pipeline</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Local AI Model
            </span>
          </div>

          <div className="flex items-center justify-between gap-1 p-2 rounded-xl bg-slate-900/80 border border-cyan-500/20 text-[10px] font-mono">
            <div className="p-1.5 bg-white/5 rounded border border-white/10 text-center">
              <p className="text-[9px] text-slate-400">Webhook</p>
              <p className="text-cyan-400 font-bold">Event</p>
            </div>
            <span className="text-cyan-500">→</span>
            <div className="p-1.5 bg-cyan-500/10 rounded border border-cyan-500/30 text-center">
              <p className="text-[9px] text-cyan-300">Ollama</p>
              <p className="text-white font-bold">Llama 3</p>
            </div>
            <span className="text-cyan-500">→</span>
            <div className="p-1.5 bg-white/5 rounded border border-white/10 text-center">
              <p className="text-[9px] text-slate-400">Alert</p>
              <p className="text-emerald-400 font-bold">Slack/JSON</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>Self-Hosted Privacy</span>
            <span className="text-cyan-400">Zero Token Billing</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-48 bg-slate-800 flex items-center justify-center rounded-t-2xl">
          <Layers className="w-8 h-8 text-slate-500" />
        </div>
      );
  }
};
