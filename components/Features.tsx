"use client";

import { useTranslations } from 'next-intl';
import { BrainCircuit, Workflow, Plug } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function Features() {
  const t = useTranslations('Features');

  const features = [
    {
      title: t('aiAutomation.title'),
      description: t('aiAutomation.description'),
      icon: BrainCircuit,
    },
    {
      title: t('workflowDesign.title'),
      description: t('workflowDesign.description'),
      icon: Workflow,
    },
    {
      title: t('systemIntegration.title'),
      description: t('systemIntegration.description'),
      icon: Plug,
    }
  ];

  return (
    <motion.section
      id="features"
      className="py-32 px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold">
            {t('title')}
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.05] transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
