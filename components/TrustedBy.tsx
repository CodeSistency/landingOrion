"use client";

import { useTranslations } from 'next-intl';
import { Activity, Cloud, Cpu, Globe, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';

const trustedIcons = [Zap, Cloud, Shield, Activity, Cpu, Globe];

export default function TrustedBy() {
  const t = useTranslations('TrustedBy');

  return (
    <motion.section
      className="px-6 py-12 md:py-16"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.p variants={fadeInUp} className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground/70 md:text-sm">
          {t('title')}
        </motion.p>

        <motion.div variants={staggerContainer} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {trustedIcons.map((Icon, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group flex h-16 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/[0.02] text-foreground/35 transition-all duration-200 hover:border-foreground/20 hover:bg-foreground/[0.04] hover:text-foreground/70"
              aria-hidden="true"
            >
              <Icon className="h-6 w-6 transition-opacity duration-200 opacity-70 group-hover:opacity-100" strokeWidth={1.8} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
