"use client";

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Benefits() {
  const t = useTranslations('Benefits');
  const { ref, isVisible } = useScrollAnimation(0.1);

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
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto" ref={ref as any}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              {t('title').split(t('scale'))[0]}
              <span className="text-muted-foreground/30">{t('scale')}</span>
              {t('title').split(t('scale'))[1]}
            </h2>
            <p className="text-xl text-muted leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl font-bold mb-2">{benefit.value}</div>
                <div className="text-sm font-medium uppercase tracking-widest text-muted mb-4">{benefit.label}</div>
                <p className="text-sm text-muted/60 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
