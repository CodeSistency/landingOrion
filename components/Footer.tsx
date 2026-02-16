"use client";

import { useTranslations } from 'next-intl';
import Logo from './Logo';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="py-20 px-6 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="space-y-6">
          <Logo size="sm" />
          <p className="text-muted text-sm max-w-xs">
            {t('desc')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-muted/40">{t('connect')}</span>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-muted/40">{t('support')}</span>
            <a href="mailto:contact@orion.dev" className="text-sm text-muted hover:text-foreground transition-colors">
              contact@orion.dev
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-muted/40">{t('legal')}</span>
            <a href="/privacy" className="text-sm text-muted hover:text-foreground transition-colors">
              {t('privacy')}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-foreground/5 text-xs text-muted/40 flex justify-between items-center">
        <p>© 2025 Orion. {t('rights')}</p>
        <p>{t('premium')}</p>
      </div>
    </footer>
  );
}
