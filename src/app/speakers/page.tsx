"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SpeakerCard from "@/components/SpeakerCard";
import { speakers, seminarInfo } from "@/data/seminar";
import { fadeUp, staggerContainer, pageTransition } from "@/lib/animations";

export default function SpeakersPage() {
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
        title="Keynote Speakers"
        subtitle="Distinguished academics and industry leaders sharing cutting-edge insights"
        badge="Keynotes 2026"
      />

      {/* ── Speaker Cards ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">
              Our Keynote Speakers
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
              Meet the Experts
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Each keynote address is carefully curated to advance the
              seminar&apos;s themes of sustainable digital transformation,
              NextGen technologies, and global business innovation.
            </p>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} large />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Keynote Info ───────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                label: "Duration",
                value: "45–60 minutes",
                desc: "Each keynote includes a dedicated Q&A session",
              },
              {
                label: "Format",
                value: "In-Person",
                desc: "All keynote presentations will be delivered live at Universiti Malaya",
              },
              {
                label: "Language",
                value: "English",
                desc: "All keynotes and Q&A sessions are conducted in English",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={prefersReducedMotion ? {} : fadeUp}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
              >
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-xl font-bold text-navy mb-2">{item.value}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Call for Speakers CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail size={28} className="text-gold" />
            </div>
            <h2 className="text-3xl font-extrabold mb-4">
              Interested in Speaking?
            </h2>
            <p className="text-blue-200 leading-relaxed mb-8 text-lg">
              We welcome distinguished academics and industry leaders to join
              our panel of keynote speakers. If you are interested in
              presenting at the seminar, please contact our programme
              committee.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${seminarInfo.email}`}
                className="inline-flex items-center gap-2 bg-gold text-navy-dark font-bold px-7 py-3.5 rounded-xl hover:bg-gold-light transition-colors"
              >
                Contact Programme Committee <ArrowRight size={17} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                General Enquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
