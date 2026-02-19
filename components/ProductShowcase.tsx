"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Bot, Terminal, Webhook, BrainCircuit, Database, MessageSquare, Check, Zap } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function ProductShowcase() {
    const t = useTranslations('ProductShowcase');
    const [activeTab, setActiveTab] = useState<'workflow' | 'agent'>('workflow');

    // Workflow State
    const [flowStep, setFlowStep] = useState(0); // 0 to 4
    const [isFlowRunning, setIsFlowRunning] = useState(false);

    // Agent State
    const [agentStep, setAgentStep] = useState(0); // 0 to 5
    const [isAgentRunning, setIsAgentRunning] = useState(false);

    const workflowNodes = [
        { id: 1, icon: Webhook, label: t('node1') },
        { id: 2, icon: BrainCircuit, label: t('node2') },
        { id: 3, icon: Database, label: t('node3') },
        { id: 4, icon: MessageSquare, label: t('node4') },
    ];



    const runWorkflow = () => {
        if (isFlowRunning) return;
        setIsFlowRunning(true);
        setFlowStep(0);

        setTimeout(() => setFlowStep(1), 800);
        setTimeout(() => setFlowStep(2), 1600);
        setTimeout(() => setFlowStep(3), 2400);
        setTimeout(() => {
            setFlowStep(4);
            setTimeout(() => setIsFlowRunning(false), 1000);
        }, 3200);
    };

    const runAgent = () => {
        if (isAgentRunning) return;
        setIsAgentRunning(true);
        setAgentStep(0);

        setTimeout(() => setAgentStep(1), 600);
        setTimeout(() => setAgentStep(2), 1800);
        setTimeout(() => setAgentStep(3), 3000);
        setTimeout(() => setAgentStep(4), 4200);
        setTimeout(() => {
            setAgentStep(5);
            setTimeout(() => setIsAgentRunning(false), 1000);
        }, 5400);
    };

    return (
        <motion.section
            id="showcase"
            className="py-32 px-6 bg-background relative overflow-hidden"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('title')}</h2>
                </motion.div>

                {/* Tabs */}
                <motion.div variants={fadeInUp} className="flex justify-center mb-12">
                    <div className="bg-foreground/[0.03] p-1.5 rounded-full border border-foreground/5 inline-flex relative">
                        <button
                            onClick={() => setActiveTab('workflow')}
                            className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${activeTab === 'workflow' ? 'text-background' : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            {t('tab1')}
                        </button>
                        <button
                            onClick={() => setActiveTab('agent')}
                            className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${activeTab === 'agent' ? 'text-background' : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            {t('tab2')}
                        </button>

                        {/* Active Tab Background */}
                        <div
                            className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-foreground rounded-full transition-all duration-300 ease-spring shadow-md ${activeTab === 'workflow' ? 'left-1.5' : 'left-[calc(50%+1.5px)]'
                                }`}
                        />
                    </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative bg-foreground/[0.02] border border-foreground/10 rounded-3xl overflow-hidden min-h-[500px] shadow-2xl flex flex-col">
                    {/* Header Bar */}
                    <div className="h-12 border-b border-foreground/10 flex items-center px-4 gap-2 bg-foreground/[0.01]">
                        <div className="w-3 h-3 rounded-full bg-red-400/20 md:bg-red-400/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/20 md:bg-yellow-400/50" />
                        <div className="w-3 h-3 rounded-full bg-green-400/20 md:bg-green-400/50" />
                        <span className="ml-4 text-xs font-mono text-muted-foreground/50">orion_engine_v2.0</span>
                    </div>

                    <div className="p-6 md:p-12 flex-1 relative flex items-center justify-center">

                        {/* WORKFLOW TAB CONTENT */}
                        {activeTab === 'workflow' && (
                            <div className="w-full flex flex-col items-center">
                                <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 z-10">
                                    {/* Connecting lines for desktop */}
                                    <div className="hidden md:block absolute top-[40px] left-[12%] right-[12%] h-0.5 bg-foreground/10 z-0">
                                        <motion.div
                                            className="absolute top-0 left-0 h-full bg-foreground shadow-[0_0_10px_currentColor] transition-all duration-700 ease-linear"
                                            initial={{ width: '0%' }}
                                            animate={{
                                                width: flowStep === 0 ? '0%' :
                                                    flowStep === 1 ? '33%' :
                                                        flowStep === 2 ? '66%' : '100%'
                                            }}
                                        />
                                    </div>

                                    {workflowNodes.map((node, index) => {
                                        const isActive = flowStep > index;
                                        const isCurrent = flowStep === index && isFlowRunning;

                                        return (
                                            <div key={node.id} className="relative flex flex-col items-center z-10 group">
                                                <motion.div
                                                    className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 bg-background
                            ${isActive ? 'border-green-500/50 text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.2)]' :
                                                            isCurrent ? 'border-foreground text-foreground animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.1)]' :
                                                                'border-foreground/10 text-muted-foreground'}`}
                                                    animate={{ scale: isCurrent ? 1.05 : 1 }}
                                                >
                                                    {isActive ? <Check strokeWidth={3} className="w-8 h-8" /> : <node.icon strokeWidth={1.5} className="w-8 h-8" />}
                                                </motion.div>
                                                <p className={`mt-6 text-sm font-semibold transition-colors duration-300 text-center ${isActive ? 'text-green-500' : isCurrent ? 'text-foreground' : 'text-muted-foreground'
                                                    }`}>
                                                    {node.label}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>

                                <motion.button
                                    onClick={runWorkflow}
                                    disabled={isFlowRunning}
                                    whileHover={isFlowRunning ? {} : { scale: 1.05 }}
                                    whileTap={isFlowRunning ? {} : { scale: 0.95 }}
                                    className="mt-16 px-8 py-4 bg-foreground text-background font-bold rounded-full flex items-center gap-2 hover:bg-foreground/90 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Zap className={`w-5 h-5 ${isFlowRunning ? 'animate-pulse' : ''}`} />
                                    {isFlowRunning ? t('running') : t('runFlow')}
                                </motion.button>
                            </div>
                        )}

                        {/* AGENT TAB CONTENT */}
                        {activeTab === 'agent' && (
                            <div className="w-full h-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 bg-background/50 rounded-2xl border border-foreground/5 shadow-inner overflow-hidden">
                                {/* Chat Panel */}
                                <div className="p-6 flex flex-col bg-foreground/[0.01]">
                                    <div className="flex items-center gap-3 mb-8 border-b border-foreground/10 pb-4">
                                        <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
                                            <Bot className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">Orion AI</h4>
                                            <p className="text-xs text-green-500">Online</p>
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-6 overflow-y-auto">
                                        {/* User Message */}
                                        <AnimatePresence>
                                            {agentStep >= 1 && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="flex justify-end"
                                                >
                                                    <div className="bg-foreground text-background text-sm p-4 rounded-2xl rounded-tr-sm max-w-[85%] leading-relaxed shadow-sm">
                                                        {t('userMessage')}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Pending Indicator */}
                                        <AnimatePresence>
                                            {agentStep >= 1 && agentStep < 5 && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="flex items-center gap-2 text-muted-foreground text-xs"
                                                >
                                                    <div className="flex gap-1">
                                                        <motion.div className="w-1.5 h-1.5 rounded-full bg-foreground/40" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                                                        <motion.div className="w-1.5 h-1.5 rounded-full bg-foreground/40" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                                                        <motion.div className="w-1.5 h-1.5 rounded-full bg-foreground/40" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                                                    </div>
                                                    Processing request...
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Agent Response */}
                                        <AnimatePresence>
                                            {agentStep >= 5 && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="flex justify-start"
                                                >
                                                    <div className="bg-foreground/5 border border-foreground/10 text-foreground text-sm p-4 rounded-2xl rounded-tl-sm max-w-[85%] leading-relaxed">
                                                        {t('agentResponse')}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Terminal Panel */}
                                <div className="p-6 bg-[#0E0E0E] text-[#00FF41] font-mono text-xs flex flex-col border-l border-foreground/5 relative">
                                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
                                    <div className="flex items-center gap-2 mb-6 text-muted-foreground/50 border-b border-foreground/10 pb-4">
                                        <Terminal className="w-4 h-4" />
                                        <span>terminal // agent_trace</span>
                                    </div>

                                    <div className="space-y-3 flex-1">
                                        <AnimatePresence>
                                            {agentStep >= 1 && (
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{`> Analyzing intent...`}</motion.div>
                                            )}
                                            {agentStep >= 2 && (
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{t('tool1')}</motion.div>
                                            )}
                                            {agentStep >= 3 && (
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{t('tool2')}</motion.div>
                                            )}
                                            {agentStep >= 4 && (
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{t('tool3')}</motion.div>
                                            )}
                                            {agentStep >= 5 && (
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white mt-4">{`> Task completed successfully. Ready.`}</motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <button
                                        onClick={runAgent}
                                        disabled={isAgentRunning}
                                        className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 text-white transition-colors rounded disabled:opacity-50"
                                    >
                                        {isAgentRunning ? t('running') : t('simulateSupport')}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
