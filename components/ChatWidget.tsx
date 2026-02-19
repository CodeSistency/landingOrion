"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ChatWidget() {
    const t = useTranslations('ChatWidget');
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Array<{ type: 'user' | 'agent'; text: string }>>([
        { type: 'agent', text: t('greeting') }
    ]);
    const [inputValue, setInputValue] = useState('');

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Add user message to UI
        setMessages(prev => [...prev, { type: 'user', text: inputValue }]);
        setInputValue('');

        // TODO: Connect with actual AI agent logic here!
        // For now, simulating a typing indicator and a generic reply
        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'agent', text: "Agent integration pending..." }]);
        }, 1000);
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={toggleChat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="fixed bottom-6 right-6 z-50 p-4 bg-foreground text-background rounded-full shadow-2xl hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)] transition-shadow"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] bg-background border border-foreground/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-foreground text-background flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-background" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">{t('title')}</h3>
                                <span className="text-xs text-green-400 flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                    Online
                                </span>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-foreground/[0.02]">
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3 text-sm rounded-2xl ${msg.type === 'user'
                                                ? 'bg-foreground text-background rounded-br-sm'
                                                : 'bg-background border border-foreground/10 text-foreground rounded-bl-sm shadow-sm'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-background border-t border-foreground/10">
                            <form onSubmit={handleSend} className="flex gap-2 relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder={t('placeholder')}
                                    className="flex-1 py-3 px-4 bg-foreground/[0.03] border border-foreground/10 rounded-full text-sm focus:outline-none focus:border-foreground/30 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="p-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
