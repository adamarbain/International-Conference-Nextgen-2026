"use client";

import { motion, useReducedMotion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, badge }: PageHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-navy py-20 px-4 text-white text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #f0a500 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2a4a8a 0%, transparent 50%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto">
        {badge && (
          <motion.span
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-gold text-navy-dark text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider"
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-blue-200 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
