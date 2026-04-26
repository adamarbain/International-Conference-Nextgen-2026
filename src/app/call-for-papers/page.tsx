"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FileText,
  ArrowRight,
  CheckCircle,
  BookOpen,
  AlertCircle,
  Download,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { tracks, importantDates } from "@/data/seminar";
import {
  fadeUp,
  staggerContainer,
  slideInLeft,
  pageTransition,
} from "@/lib/animations";

const submissionGuidelines = [
  {
    id: "language",
    title: "Language",
    value: "English",
    desc: "All submissions must be written in English. Papers in other languages will not be considered.",
  },
  {
    id: "length",
    title: "Page Limit",
    value: "6–8 pages",
    desc: "Full papers should be 6–8 pages (including references, figures, and tables). Extended abstracts: 2–4 pages.",
  },
  {
    id: "format",
    title: "File Format",
    value: "PDF",
    desc: "Submissions must be in PDF format using the official proceedings template.",
  },
  {
    id: "blind",
    title: "Review Process",
    value: "Double-blind",
    desc: "Remove all author identifiers from your manuscript before submission. Author details are submitted separately.",
  },
  {
    id: "originality",
    title: "Originality",
    value: "Unpublished",
    desc: "Submissions must be original work not previously published or concurrently submitted to another venue.",
  },
  {
    id: "template",
    title: "Template",
    value: "Official Template",
    desc: "Use the provided proceedings template. Submissions not conforming to the template may be desk-rejected.",
  },
];

export default function CallForPapersPage() {
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
        title="Call for Papers"
        subtitle="We invite original research papers, case studies, and extended abstracts from scholars worldwide"
        badge="Submissions Open"
      />

      {/* ── Introduction ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold text-gold uppercase tracking-widest mb-3">
              Welcome
            </p>
            <h2 className="text-3xl font-extrabold text-navy mb-6">
              What We Are Looking For
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The International Conference on Global Sustainable Business
                Transformation with NextGen Information Technology welcomes
                original contributions addressing the intersection of digital
                technologies, sustainable development, and business
                transformation. We seek high-quality research papers, empirical
                studies, case analyses, and conceptual frameworks.
              </p>
              <p>
                Submissions from academics, researchers, postgraduate students,
                industry practitioners, and policy experts are all warmly
                invited. Interdisciplinary work that bridges computer science,
                business, economics, environmental science, and policy is
                especially encouraged.
              </p>
              <p>
                Accepted papers will be published in the official conference
                proceedings. Outstanding papers may be selected for extended
                publication in affiliated peer-reviewed journals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Topics of Interest ─────────────────────────────────────────── */}
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
              Scope
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Topics of Interest
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              Papers should fall within one or more of the three conference
              tracks. Interdisciplinary submissions spanning multiple tracks are
              welcome.
            </p>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {tracks.map((track, i) => {
              const colors = [
                "border-emerald-200 bg-emerald-50",
                "border-blue-200 bg-blue-50",
                "border-amber-200 bg-amber-50",
              ];
              const headerColors = [
                "bg-emerald-700",
                "bg-blue-700",
                "bg-amber-700",
              ];
              return (
                <motion.div
                  key={track.id}
                  variants={prefersReducedMotion ? {} : fadeUp}
                  className={`rounded-2xl overflow-hidden border ${colors[i]}`}
                >
                  <div className={`${headerColors[i]} text-white p-5`}>
                    <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                      Track {track.number}
                    </span>
                    <h3 className="font-bold text-base mt-1 leading-tight">
                      {track.title}
                    </h3>
                  </div>
                  <ul className="p-5 space-y-2">
                    {track.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle
                          size={14}
                          className="shrink-0 mt-0.5 text-gray-400"
                        />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Submission Guidelines ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">
              Formatting Requirements
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Submission Guidelines
            </h2>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {submissionGuidelines.map((g) => (
              <motion.div
                key={g.id}
                variants={prefersReducedMotion ? {} : fadeUp}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  {g.title}
                </p>
                <p className="text-lg font-bold text-navy mb-2">{g.value}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Paper Template ──────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-200"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center shrink-0">
                <FileText size={22} className="text-navy" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">
                  Author Resources
                </p>
                <h3 className="text-navy font-bold text-xl mb-2">
                  Example Paper Template
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Download and use the official LaTeX template to format your
                  manuscript before submission.
                </p>
                <a
                  href="/ICGSBT%20LaTeX%20Template.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-navy-light transition-colors"
                >
                  <Download size={16} />
                  Download LaTeX Template (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Important Dates ────────────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-3xl font-extrabold text-white">
              Important Dates
            </h2>
          </motion.div>

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
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-xl border ${
                  date.id === "conference"
                    ? "bg-gold/20 border-gold/40"
                    : date.status === "past"
                    ? "bg-white/5 border-white/10 opacity-60"
                    : "bg-white/10 border-white/20"
                }`}
              >
                <div>
                  <p className="text-white font-semibold">{date.label}</p>
                  <p className="text-blue-200 text-xs mt-0.5">
                    {date.description}
                  </p>
                </div>
                <span
                  className={`text-sm font-bold px-4 py-1.5 rounded-lg shrink-0 ${
                    date.id === "conference"
                      ? "bg-gold text-navy-dark"
                      : date.status === "past"
                      ? "bg-gray-600 text-gray-200"
                      : "bg-white/20 text-white"
                  }`}
                >
                  {date.date}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Proceedings ────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-8 border border-blue-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center shrink-0">
                <BookOpen size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-navy font-bold text-xl mb-2">
                  Proceedings Publication
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  All accepted and presented papers will be published in the
                  official proceedings:
                </p>
                <p className="text-navy font-semibold text-sm bg-white rounded-lg p-3 border border-blue-200 italic">
                  &ldquo;Proceedings of The International Conference on Global
                  Sustainable Business Transformation with NextGen Information
                  Technology&rdquo;
                </p>
                <p className="text-gray-500 text-xs mt-3">
                  Selected high-quality papers will be invited for extended
                  publication in affiliated indexed academic journals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Submit CTA ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-gold to-gold-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <AlertCircle size={20} className="text-navy/60 mr-2" />
              <p className="text-sm text-navy/70 font-medium">
                Ensure your paper meets all formatting requirements before
                submitting.
              </p>
            </div>
            <h2 className="text-3xl font-extrabold text-navy-dark mb-4">
              Ready to Submit?
            </h2>
            <p className="text-navy/70 mb-8">
              Use the online submission portal to upload your manuscript.
              Confirmation will be sent to your registered email address.
            </p>
            <a
              href="https://forms.gle/rBWtZcVBTFttbsSv6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-navy-light transition-colors shadow-lg"
            >
              <FileText size={18} />
              Submit Your Paper <ArrowRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
