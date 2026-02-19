"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function Benefits() {
  const t = useTranslations('Benefits');

  const benefits = [
    {
      label: t('efficiency'),
      value: "10x",
      description: t('efficiencyDesc')
    },
    {
      label: t('costSavings'),
      value: "60%",
      description: t('costSavingsDesc')
    },
    {
      label: t('scalability'),
      value: "∞",
      description: t('scalabilityDesc')
    },
    {
      label: t('support'),
      value: "24/7",
      description: t('supportDesc')
    }
  ];

  return (
    <motion.section
      className="py-32 px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              {t('title').split(t('scale'))[0]}
              <span className="text-muted-foreground/30">{t('scale')}</span>
              {t('title').split(t('scale'))[1]}
            </h2>
            <p className="text-xl text-muted leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5 transition-colors duration-300"
              >
                <div className="text-4xl font-bold mb-2">{benefit.value}</div>
                <div className="text-sm font-medium uppercase tracking-widest text-muted mb-4">{benefit.label}</div>
                <p className="text-sm text-muted/60 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
