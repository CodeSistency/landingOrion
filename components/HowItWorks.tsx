"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function HowItWorks() {
  const t = useTranslations('Process');

  const steps = [
    {
      number: "01",
      title: t('analyze.title'),
      description: t('analyze.description')
    },
    {
      number: "02",
      title: t('design.title'),
      description: t('design.description')
    },
    {
      number: "03",
      title: t('implement.title'),
      description: t('implement.description')
    },
    {
      number: "04",
      title: t('optimize.title'),
      description: t('optimize.description')
    }
  ];

  return (
    <motion.section
      id="process"
      className="py-32 px-6 bg-foreground/[0.02]"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-20">
          {t('title')}
        </motion.h2>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative space-y-4"
            >
              <div className="text-6xl font-black text-foreground/5 absolute -top-8 -left-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold relative z-10">{step.title}</h3>
              <p className="text-muted leading-relaxed relative z-10">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 border-t border-foreground/10" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
