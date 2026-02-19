"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { trackFormSubmit } from '../lib/analytics';

export default function Contact() {
  const t = useTranslations('Contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'placeholder';
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        trackFormSubmit('contact_form');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-foreground/[0.02]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('title')}</h2>
          <p className="text-muted text-lg">
            {t('subtitle')}
          </p>
        </motion.div>

        {status === 'success' ? (
          <div className="p-12 text-center rounded-3xl border border-foreground/10 bg-foreground/[0.02] animate-fade-in-scale">
            <h3 className="text-2xl font-bold mb-4">{t('successTitle')}</h3>
            <p className="text-muted">{t('successDesc')}</p>
            <motion.button
              onClick={() => setStatus('idle')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 text-sm font-medium hover:underline"
            >
              {t('sendAnother')}
            </motion.button>
          </div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted">{t('name')}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  placeholder={t('placeholderName')}
                  className="w-full px-6 py-4 bg-foreground/[0.03] border border-foreground/5 rounded-xl focus:border-foreground/20 focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted">{t('email')}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  placeholder={t('placeholderEmail')}
                  className="w-full px-6 py-4 bg-foreground/[0.03] border border-foreground/5 rounded-xl focus:border-foreground/20 focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-muted">{t('message')}</label>
              <textarea 
                id="message" 
                name="message" 
                required
                rows={5}
                placeholder={t('placeholderMessage')}
                className="w-full px-6 py-4 bg-foreground/[0.03] border border-foreground/5 rounded-xl focus:border-foreground/20 focus:outline-none transition-colors resize-none"
              />
            </div>

              <motion.button
                type="submit" 
                disabled={status === 'loading'}
                whileHover={status === 'loading' ? undefined : { scale: 1.02 }}
                whileTap={status === 'loading' ? undefined : { scale: 0.98 }}
                className="w-full py-5 bg-foreground text-background font-bold rounded-xl hover:bg-muted transition-colors disabled:opacity-50"
              >
               {status === 'loading' ? t('sending') : t('send')}
             </motion.button>

            {status === 'error' && (
              <p className="text-center text-red-400 text-sm">{t('error')}</p>
            )}
          </motion.form>
        )}
      </div>
    </section>
  );
}
