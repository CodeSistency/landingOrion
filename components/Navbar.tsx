"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Logo from './Logo';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const t = useTranslations('Navbar');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#features', label: t('features') },
        { href: '#services', label: t('services') },
        { href: '#process', label: t('process') },
        { href: '#showcase', label: t('benefits') },
    ];

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-background/80 backdrop-blur-md border-b border-foreground/10 py-4 shadow-sm'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="relative z-10" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo size="sm" />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:text-foreground transition-colors">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 border-l border-foreground/10 pl-6 space-x-2">
                        {/* <LanguageToggle /> */}
                        {/* <ThemeToggle /> */}
                    </div>
                </div>

                {/* Mobile Menu Button context */}
                <div className="flex md:hidden items-center gap-4 relative z-10">
                    {/* <LanguageToggle /> */}
                    {/* <ThemeToggle /> */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full bg-background border-b border-foreground/10 shadow-xl overflow-hidden"
                    >
                        <div className="py-6 px-6 flex flex-col gap-6">
                            <ul className="flex flex-col gap-4 text-center">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="text-lg font-medium text-foreground block w-full py-2"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
