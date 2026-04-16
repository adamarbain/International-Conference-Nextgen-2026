"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Download, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import DaySchedule from "@/components/DaySchedule";
import {
  day1Schedule,
  day2Schedule,
  parallelSession1,
  parallelSession2,
  parallelSession3,
} from "@/data/seminar";
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
                      Day 1 — Monday, 14 July 2026
                    </h2>
                    <p className="text-xs text-gray-500">
                      Opening Ceremony, Keynote Addresses & Parallel Session 1
                    </p>
                  </div>
                </div>
                <DaySchedule
                  items={day1Schedule}
                  parallelSessions={parallelSession1}
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
                      Day 2 — Tuesday, 15 July 2026
                    </h2>
                    <p className="text-xs text-gray-500">
                      Parallel Sessions 2 & 3, Closing Ceremony & Best Paper
                      Award
                    </p>
                  </div>
                </div>
                <DaySchedule
                  items={day2Schedule}
                  parallelSessions={[...parallelSession2, ...parallelSession3]}
                />
                <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <p className="text-xs text-blue-700 font-medium">
                    <strong>Note:</strong> The parallel session table above
                    shows Session 2 (9:00–12:30) rows first, followed by
                    Session 3 (14:00–16:00) rows. A break is taken from 1:00pm
                    to 2:00pm between the two sessions.
                  </p>
                </div>
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

          {/* Download PDF */}
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 flex justify-center"
          >
            <button className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-navy-light transition-colors shadow-sm">
              <Download size={17} />
              Download Full Programme (PDF)
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
