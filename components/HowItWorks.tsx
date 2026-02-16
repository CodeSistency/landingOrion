"use client";

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HowItWorks() {
  const t = useTranslations('Process');
  const { ref, isVisible } = useScrollAnimation(0.1);

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
    <section className="py-32 px-6 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto" ref={ref as any}>
        <h2 className={`text-3xl md:text-5xl font-bold mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative space-y-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
