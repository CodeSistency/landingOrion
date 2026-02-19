"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute left-0 right-0 top-1/4 -z-10 m-auto h-[400px] w-[600px] rounded-full bg-foreground/20 opacity-40 blur-[120px]"></div>

      <div className="max-w-4xl space-y-8 relative z-10">
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-bold tracking-tight">
          {t('title').split(t('efficiency'))[0]}
          <span className="text-muted-foreground/40">{t('efficiency')}</span>
          {t('title').split(t('efficiency'))[1]}
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-muted max-w-2xl mx-auto">
          {t('subtitle')}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-foreground text-background text-base font-bold rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.28)] ring-2 ring-foreground/20 hover:shadow-[0_16px_36px_rgba(0,0,0,0.34)] transition-all duration-200 w-full sm:w-auto"
          >
            {t('getStarted')}
          </motion.a>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-accent/20 text-foreground font-semibold rounded-full hover:bg-foreground/5 transition-colors opacity-90 w-full sm:w-auto"
          >
            {t('learnMore')}
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 text-foreground">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </motion.section>
  );
}
