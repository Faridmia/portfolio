import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { 
  Cpu, 
  Workflow, 
  FileText, 
  Bell, 
  Play, 
  RefreshCw,
  Shield
} from 'lucide-react';

interface WorkflowScenario {
  id: string;
  title: string;
  badge: string;
  description: string;
  nodes: {
    title: string;
    type: string;
    desc: string;
    icon: string;
  }[];
  privacyNote: string;
}

export const AutomationShowcase: React.FC = () => {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(-1);

  const workflows: WorkflowScenario[] = [
    {
      id: 'form-ai-notification',
      title: 'Form Submission → n8n → AI Processing → Notification',
      badge: 'Concept: Lead Enrichment & Routing',
      description: 'Incoming website contact or lead submissions automatically trigger an n8n webhook. The payload is summarized and prioritized by an AI model, and an instant formatted alert is dispatched to a team channel.',
      nodes: [
        { title: 'Inbound Form', type: 'Trigger', desc: 'Webhook POST payload with user submission', icon: 'FileText' },
        { title: 'n8n Orchestration', type: 'Workflow', desc: 'Validates input, extracts metadata & filters spam', icon: 'Workflow' },
        { title: 'AI Classification', type: 'Processing', desc: 'Extracts intent, urgency level & assigns tag', icon: 'Cpu' },
        { title: 'Instant Notification', type: 'Delivery', desc: 'Pushes enriched brief to Slack / Telegram / CRM', icon: 'Bell' },
      ],
      privacyNote: 'Can be configured with OpenAI or completely isolated using local Ollama instances for data confidentiality.'
    },
    {
      id: 'wp-event-sync',
      title: 'WordPress Event → API Integration → Automated Workflow',
      badge: 'Concept: Content & Commerce Sync',
      description: 'When an order status changes or a new post is published in WordPress, action hooks trigger REST endpoints to sync data with external spreadsheets, inventory systems, or marketing platforms.',
      nodes: [
        { title: 'WP Action Hook', type: 'Trigger', desc: 'do_action("woocommerce_order_status_completed")', icon: 'Layers' },
        { title: 'REST API Dispatch', type: 'Payload', desc: 'Secure payload delivered with HMAC signature', icon: 'Server' },
        { title: 'n8n Logic Router', type: 'Workflow', desc: 'Formats line items, updates customer record', icon: 'Workflow' },
        { title: 'External Sync', type: 'Delivery', desc: 'Updates inventory, ERP or email sequence', icon: 'CheckCircle2' },
      ],
      privacyNote: 'Uses authenticated endpoints and secret nonces to safeguard WordPress database transactions.'
    },
    {
      id: 'document-ollama',
      title: 'Local Document → Ollama Model → Structured Output',
      badge: 'Concept: Privacy-First Local AI',
      description: 'Running open-weights models (like Llama 3 or Mistral) locally using Ollama. Text documents or technical logs are parsed and transformed into clean JSON structures without sending any private data to cloud APIs.',
      nodes: [
        { title: 'Raw Document / Log', type: 'Input', desc: 'Unstructured text file, invoice, or error stack', icon: 'FileText' },
        { title: 'n8n Local Node', type: 'Bridge', desc: 'Segments text and constructs prompt template', icon: 'Workflow' },
        { title: 'Ollama Engine', type: 'Local Inference', desc: 'Runs offline on localhost:11434 with zero token cost', icon: 'Cpu' },
        { title: 'Structured JSON', type: 'Output', desc: 'Clean schema ready for database insertion', icon: 'CheckCircle2' },
      ],
      privacyNote: '100% offline-capable. Zero data transmission to third-party commercial cloud APIs.'
    }
  ];

  const currentWorkflow = workflows[activeWorkflowIndex];

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 3) {
          clearInterval(stepInterval);
          setTimeout(() => {
            setIsSimulating(false);
          }, 1500);
          return 3;
        }
        return prev + 1;
      });
    }, 900);
  };

  return (
    <section id="automation" className="py-12 md:py-[65px] relative bg-slate-50/50 dark:bg-[#070A12]">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="AI Automation Showcase"
          title="From Repetitive Tasks to Intelligent Workflows"
          subtitle="Exploring how webhook orchestration with n8n, custom APIs, and local LLMs with Ollama unlock modern operational efficiency."
        />

        {/* Workflow Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {workflows.map((wf, idx) => (
            <button
              key={wf.id}
              onClick={() => {
                setActiveWorkflowIndex(idx);
                setActiveStep(-1);
                setIsSimulating(false);
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-200 ${
                activeWorkflowIndex === idx
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                  : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
              }`}
            >
              <span>Scenario 0{idx + 1}: {wf.title.split('→')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Active Scenario Card */}
        <div className="rounded-3xl glass-card border border-slate-200 dark:border-white/10 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
          
          {/* Top Scenario Details */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 uppercase">
                  {currentWorkflow.badge}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Interactive Simulation
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                {currentWorkflow.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {currentWorkflow.description}
              </p>
            </div>

            {/* Simulation Trigger Button */}
            <div className="shrink-0">
              <button
                onClick={handleSimulate}
                disabled={isSimulating}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-semibold font-mono transition-all ${
                  isSimulating
                    ? 'bg-brand-500/20 text-brand-400 border border-brand-500/30 cursor-not-allowed'
                    : 'bg-gradient-to-r from-brand-500 to-brand-cyan hover:from-brand-600 hover:to-cyan-600 text-white shadow-lg shadow-brand-500/25 hover:scale-105'
                }`}
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-brand-400" />
                    <span>Transmitting Nodes...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Run Visual Trace</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Flow Nodes Visualizer */}
          <div className="relative py-4">
            
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 bg-slate-200 dark:bg-white/10 z-0">
              {/* Animated Progress Packet */}
              {isSimulating && (
                <div 
                  className="h-full bg-gradient-to-r from-brand-500 to-cyan-400 transition-all duration-700 ease-out shadow-[0_0_12px_rgba(99,102,241,0.8)]"
                  style={{
                    width: `${((activeStep + 1) / currentWorkflow.nodes.length) * 100}%`
                  }}
                />
              )}
            </div>

            {/* Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {currentWorkflow.nodes.map((node, nIdx) => {
                const isStepActive = activeStep >= nIdx;
                const isCurrentExecuting = activeStep === nIdx;

                return (
                  <div
                    key={nIdx}
                    className={`p-5 rounded-2xl transition-all duration-300 relative border ${
                      isCurrentExecuting
                        ? 'bg-brand-500/15 border-brand-500 ring-2 ring-brand-500/30 scale-105'
                        : isStepActive
                        ? 'bg-emerald-500/10 border-emerald-500/30'
                        : 'bg-slate-100/80 dark:bg-white/[0.03] border-slate-200 dark:border-white/5'
                    }`}
                  >
                    {/* Node Header */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        isCurrentExecuting
                          ? 'bg-brand-500 text-white font-bold animate-pulse'
                          : isStepActive
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                      }`}>
                        STEP 0{nIdx + 1}
                      </span>

                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        {node.type}
                      </span>
                    </div>

                    {/* Node Title & Icon */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`p-2 rounded-xl text-xs ${
                        isCurrentExecuting
                          ? 'bg-brand-500 text-white'
                          : isStepActive
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                      }`}>
                        {nIdx === 0 && <FileText className="w-4 h-4" />}
                        {nIdx === 1 && <Workflow className="w-4 h-4" />}
                        {nIdx === 2 && <Cpu className="w-4 h-4" />}
                        {nIdx === 3 && <Bell className="w-4 h-4" />}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {node.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                      {node.desc}
                    </p>

                    {/* Pulse status indicator */}
                    <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-500">Node Status:</span>
                      <span className={
                        isCurrentExecuting 
                          ? 'text-brand-500 font-bold'
                          : isStepActive
                          ? 'text-emerald-500 font-semibold'
                          : 'text-slate-400'
                      }>
                        {isCurrentExecuting ? 'Processing...' : isStepActive ? 'Completed' : 'Standby'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Privacy & Safeguard Footer */}
          <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium">
              <Shield className="w-4 h-4 shrink-0" />
              <span>Data Protection &amp; Security:</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs">
              {currentWorkflow.privacyNote}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
