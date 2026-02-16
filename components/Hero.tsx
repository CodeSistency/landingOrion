"use client";

import { useTranslations } from 'next-intl';
import Logo from './Logo';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const t = useTranslations('Hero');
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref as any}
      className={`min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute top-10 left-10 reveal animate-fade-in-up">
        <Logo size="md" />
      </div>

      <div className="max-w-4xl space-y-8">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight reveal animate-fade-in-up animation-delay-100">
          {t('title').split(t('efficiency'))[0]}
          <span className="text-muted-foreground/40">{t('efficiency')}</span>
          {t('title').split(t('efficiency'))[1]}
        </h1>
        
        <p className="text-lg md:text-2xl text-muted max-w-2xl mx-auto reveal animate-fade-in-up animation-delay-200">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal animate-fade-in-up animation-delay-300">
          <a 
            href="#contact" 
            className="px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-muted transition-colors w-full sm:w-auto"
          >
            {t('getStarted')}
          </a>
          <a 
            href="#features" 
            className="px-8 py-4 border border-accent/20 text-foreground font-semibold rounded-full hover:bg-foreground/5 transition-colors w-full sm:w-auto"
          >
            {t('learnMore')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 text-foreground">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
