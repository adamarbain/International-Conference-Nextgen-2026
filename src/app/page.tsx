"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Calendar,
  ChevronRight,
  FileText,
  Award,
  Users,
  Handshake,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import StatCard from "@/components/StatCard";
import TrackCard from "@/components/TrackCard";
import SpeakerCard from "@/components/SpeakerCard";
import {
  seminarInfo,
  speakers,
  tracks,
  importantDates,
  highlights,
} from "@/data/seminar";
import type { Variants } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  slideInLeft,
  pageTransition,
} from "@/lib/animations";

const sectionHeadingVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={prefersReducedMotion ? {} : pageTransition}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col"
    >
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 90%, #f0a500 0%, transparent 45%), radial-gradient(circle at 90% 10%, #2a4a8a 0%, transparent 55%)",
          }}
        />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(45deg, #fff 1px, transparent 1px), linear-gradient(-45deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <motion.div
              variants={prefersReducedMotion ? {} : fadeIn}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="bg-gold text-navy-dark text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest">
                14–15 July 2026
              </span>
              <span className="text-blue-200 text-xs font-medium flex items-center gap-1.5">
                <MapPin size={12} />
                Universiti Malaya, Kuala Lumpur
              </span>
            </motion.div>

            <motion.h1
              variants={prefersReducedMotion ? {} : fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              The International Conference on{" "}
              <span className="text-gold">
                Global Sustainable Business Transformation
              </span>{" "}
              with NextGen Information Technology
            </motion.h1>

            <motion.p
              variants={prefersReducedMotion ? {} : fadeUp}
              initial="hidden"
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-blue-200 text-lg mb-8 max-w-2xl leading-relaxed"
            >
              An international academic gathering where research meets
              innovation — advancing sustainable digital transformation for
              organisations, economies, and communities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/registration"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg"
              >
                Register Now <ArrowRight size={17} />
              </Link>
              <Link
                href="/call-for-papers"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                Submit Abstract <FileText size={17} />
              </Link>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-xs text-blue-300 uppercase tracking-widest font-medium mb-3">
                Seminar Begins In
              </p>
              <CountdownTimer />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Highlights ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {highlights.map((h) => (
              <StatCard key={h.id} highlight={h} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── About Snapshot ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                variants={prefersReducedMotion ? {} : fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xs font-bold text-gold uppercase tracking-widest mb-3"
              >
                About the Seminar
              </motion.p>
              <motion.h2
                variants={prefersReducedMotion ? {} : sectionHeadingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-extrabold text-navy mb-6 leading-tight"
              >
                Where Research Meets
                <br />
                Sustainable Innovation
              </motion.h2>
              <motion.div
                variants={prefersReducedMotion ? {} : fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4 text-gray-600 leading-relaxed"
              >
                <p>
                  Aligned with the United Nations 2030 Sustainable Development
                  Goals, this seminar brings together academics, industry
                  leaders, and policymakers to explore how NextGen digital
                  technologies can accelerate sustainable business
                  transformation.
                </p>
                <p>
                  Co-organised by the Faculty of Computer Science & IT and the
                  Faculty of Business & Economics at Universiti Malaya, the
                  seminar fosters cross-disciplinary dialogue on AI, green
                  economy, digital trade, and sustainable development.
                </p>
                <p>
                  Participants will gain access to cutting-edge research,
                  networking opportunities, and collaborative platforms that
                  bridge academic insight with real-world application.
                </p>
              </motion.div>
              <motion.div
                variants={prefersReducedMotion ? {} : fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-7"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-xl hover:bg-navy-light transition-colors"
                >
                  Learn More <ChevronRight size={16} />
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={prefersReducedMotion ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Award, label: "Academic Excellence", desc: "Peer-reviewed proceedings published internationally" },
                { icon: Users, label: "100+ Participants", desc: "Scholars and professionals from around the globe" },
                { icon: Calendar, label: "2-Day Programme", desc: "Keynotes, parallel sessions, and networking events" },
                { icon: Handshake, label: "Industry Bridges", desc: "Connecting research with real-world application" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-5">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <Icon size={20} className="text-navy" />
                  </div>
                  <p className="text-navy font-semibold text-sm mb-1">{label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">
              Research Themes
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Three Focused Tracks
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              Explore cutting-edge research across three interconnected themes
              that define the future of sustainable digital transformation.
            </p>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {tracks.map((track, i) => (
              <TrackCard key={track.id} track={track} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Speakers ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">
                Keynote Speakers
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
                Featured Speakers
              </h2>
            </div>
            <Link
              href="/speakers"
              className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-navy-light transition-colors whitespace-nowrap"
            >
              View All Speakers <ChevronRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Important Dates ──────────────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">
              Key Deadlines
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Important Dates
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/20 hidden sm:block" />
            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {importantDates.map((date) => (
                <motion.div
                  key={date.id}
                  variants={prefersReducedMotion ? {} : slideInLeft}
                  className="relative sm:pl-16"
                >
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden sm:flex">
                    <div
                      className={`w-5 h-5 rounded-full border-2 ${
                        date.status === "past"
                          ? "bg-gray-400 border-gray-400"
                          : date.status === "current"
                          ? "bg-gold border-gold"
                          : "bg-white border-white"
                      }`}
                    />
                  </div>
                  <div
                    className={`rounded-xl p-5 border ${
                      date.status === "past"
                        ? "bg-white/5 border-white/10 opacity-60"
                        : date.id === "conference"
                        ? "bg-gold/20 border-gold/40"
                        : "bg-white/10 border-white/20"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-white font-semibold text-sm">
                        {date.label}
                      </span>
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          date.status === "past"
                            ? "bg-gray-600 text-gray-300"
                            : date.id === "conference"
                            ? "bg-gold text-navy-dark"
                            : "bg-white/20 text-white"
                        }`}
                      >
                        {date.date}
                      </span>
                    </div>
                    <p className="text-blue-200 text-xs">{date.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-gold to-gold-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-dark mb-4">
              Ready to Submit Your Research?
            </h2>
            <p className="text-navy/80 text-lg mb-8 max-w-2xl mx-auto">
              Join researchers, academics, and industry experts from around the
              world. Share your work and contribute to the global dialogue on
              sustainable digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/call-for-papers"
                className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-navy-light transition-colors shadow-lg"
              >
                Submit a Paper <ArrowRight size={18} />
              </Link>
              <Link
                href="/registration"
                className="inline-flex items-center gap-2 bg-white text-navy font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-md"
              >
                Register to Attend
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Sponsors Strip ───────────────────────────────────────────────── */}
      {/* <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              Sponsors & Partners
            </p>
            <h2 className="text-2xl font-bold text-navy mb-2">
              Our Supporting Partners
            </h2>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                variants={prefersReducedMotion ? {} : fadeUp}
                className="w-36 h-20 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200"
              >
                <span className="text-xs text-gray-400 font-medium">
                  Sponsor Logo
                </span>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link
              href="/sponsors"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-6 py-2.5 rounded-xl hover:bg-navy hover:text-white transition-colors"
            >
              Become a Sponsor <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section> */}

      <Footer />
    </motion.div>
  );
}
