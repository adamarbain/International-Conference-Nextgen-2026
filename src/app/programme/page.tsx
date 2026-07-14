"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FileText, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import DaySchedule from "@/components/DaySchedule";
import { day1Schedule, day2Schedule } from "@/data/seminar";
import { fadeUp, pageTransition } from "@/lib/animations";

export default function ProgrammePage() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
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
        title="Programme Schedule"
        subtitle="14–15 July 2026 · Universiti Malaya, Kuala Lumpur"
        badge="July 2026"
      />

      <section className="bg-gradient-to-r from-gold to-gold-light py-8 sm:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-navy/10 bg-white/80 p-6 shadow-sm backdrop-blur-sm"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-navy/70">
                  Programme Resources
                </p>
                <h2 className="mt-1 text-2xl font-bold text-navy">
                  Programme Book Available
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-gray-600">
                  Download the official conference programme book to explore the
                  full agenda, sessions, and event highlights.
                </p>
              </div>
              <a
                href="/Programme_Book_ICGSBT2026_.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-light"
              >
                <FileText size={18} />
                Download Programme Book
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Day Tabs ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-white flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab switcher */}
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-3 mb-10"
          >
            {([1, 2] as const).map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeDay === day
                    ? "bg-navy text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Calendar size={16} />
                Day {day} — {day === 1 ? "14 July" : "15 July"}
              </button>
            ))}
          </motion.div>

          {/* Schedule */}
          <AnimatePresence mode="wait">
            {activeDay === 1 ? (
              <motion.div
                key="day1"
                initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center">
                    <Calendar size={18} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-navy text-lg">
                      Day 1 — Tuesday, 14 July 2026
                    </h2>
                  </div>
                </div>
                <DaySchedule
                  items={day1Schedule}
                  //parallelSessions={parallelSession1}
                />
              </motion.div>
            ) : (
              <motion.div
                key="day2"
                initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center">
                    <Calendar size={18} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-navy text-lg">
                      Day 2 — Wednesday, 15 July 2026
                    </h2>
                  </div>
                </div>
                <DaySchedule
                  items={day2Schedule}
                  //parallelSessions={[...parallelSession2, ...parallelSession3]}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Legend */}
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 pt-8 border-t border-gray-100"
          >
            <h3 className="text-sm font-semibold text-gray-700 mb-4">
              Legend
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { color: "bg-gold/10 border-gold/30", label: "Ceremony" },
                { color: "bg-blue-50 border-blue-200", label: "Keynote Address" },
                { color: "bg-gray-50 border-gray-200", label: "Break" },
                { color: "bg-emerald-50 border-emerald-200", label: "Parallel Session" },
                { color: "bg-purple-50 border-purple-200", label: "Closing" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium text-gray-700 ${item.color}`}
                >
                  <div className={`w-2 h-2 rounded-full border ${item.color}`} />
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
