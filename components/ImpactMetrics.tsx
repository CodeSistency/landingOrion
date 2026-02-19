"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function ImpactMetrics() {
  const t = useTranslations('ImpactMetrics');

  const metrics = [
    { value: t('metric1Value'), label: t('metric1Label') },
    { value: t('metric2Value'), label: t('metric2Label') },
    { value: t('metric3Value'), label: t('metric3Label') },
    { value: t('metric4Value'), label: t('metric4Label') }
  ];

  return (
    <motion.section
      className="px-6 py-16 md:py-24 bg-foreground/[0.01] border-y border-foreground/5 relative overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-foreground/5 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] bg-foreground/5 text-foreground/80 border border-foreground/10">
            {t('title')}
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 text-center group"
            >
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/40 transition-all duration-300 drop-shadow-sm">
                {metric.value}
              </h3>
              <p className="mt-4 text-sm md:text-base text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
