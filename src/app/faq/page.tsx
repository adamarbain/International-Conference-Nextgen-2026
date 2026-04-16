"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import { faqItems } from "@/data/seminar";
import { fadeUp, staggerContainer, pageTransition } from "@/lib/animations";

const categories = [
  { id: "registration", label: "Registration & Payment", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { id: "submission", label: "Paper Submission", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { id: "attendance", label: "Attendance", color: "bg-purple-50 text-purple-700 border-purple-200" },
  { id: "venue", label: "Venue & Travel", color: "bg-amber-50 text-amber-700 border-amber-200" },
  { id: "general", label: "General", color: "bg-gray-50 text-gray-700 border-gray-200" },
] as const;

type Category = typeof categories[number]["id"];

export default function FAQPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={prefersReducedMotion ? {} : pageTransition}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col"
    >
      <Navbar />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about the seminar, registration, and submissions"
        badge="FAQ"
      />

      <section className="py-20 bg-white flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category overview */}
          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((cat) => (
              <motion.span
                key={cat.id}
                variants={prefersReducedMotion ? {} : fadeUp}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${cat.color}`}
              >
                {cat.label} ({faqItems.filter((f) => f.category === cat.id).length})
              </motion.span>
            ))}
          </motion.div>

          {/* FAQ sections by category */}
          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {categories.map((cat) => {
              const items = faqItems.filter((f) => f.category === cat.id);
              if (items.length === 0) return null;
              return (
                <motion.div key={cat.id} variants={prefersReducedMotion ? {} : fadeUp}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${cat.color}`}>
                      {cat.label}
                    </span>
                    <div className="flex-1 h-px bg-gray-100" />
                  </div>
                  <FAQAccordion items={items} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Still Have Questions CTA ───────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-5">
              <MessageCircle size={24} className="text-gold" />
            </div>
            <h2 className="text-2xl font-bold text-navy mb-3">
              Still Have Questions?
            </h2>
            <p className="text-gray-500 mb-7 leading-relaxed">
              Our team is happy to help. Reach out through our contact page and
              we&apos;ll get back to you within 2 working days.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white font-bold px-7 py-3.5 rounded-xl hover:bg-navy-light transition-colors"
            >
              Contact Us <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
