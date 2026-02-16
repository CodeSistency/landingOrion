"use client";

import { useTranslations } from 'next-intl';
import { BrainCircuit, Workflow, Plug } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Features() {
  const t = useTranslations('Features');
  const { ref, isVisible } = useScrollAnimation(0.1);

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
    <section id="features" ref={ref as any} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className={`text-3xl md:text-5xl font-bold transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.05] transition-all duration-700 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
