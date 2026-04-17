"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  Target,
  Globe2,
  Lightbulb,
  Handshake,
  Building,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { seminarInfo } from "@/data/seminar";
import { fadeUp, staggerContainer, pageTransition } from "@/lib/animations";

const objectives = [
  {
    id: "academic",
    icon: GraduationCap,
    title: "Academic Leadership",
    desc: "Position Universiti Malaya as a leading hub for interdisciplinary research at the intersection of digital technology and sustainable business transformation.",
  },
  {
    id: "alignment",
    icon: Target,
    title: "Strategic Alignment",
    desc: "Align academic research and industry practices with the United Nations 2030 Agenda for Sustainable Development and Malaysia's digital economy aspirations.",
  },
  {
    id: "industry",
    icon: Lightbulb,
    title: "Industry Empowerment",
    desc: "Provide industry stakeholders with research-backed insights and practical frameworks to drive sustainable digital transformation in their organisations.",
  },
  {
    id: "exchange",
    icon: Globe2,
    title: "Cultural & Knowledge Exchange",
    desc: "Foster a vibrant international exchange of ideas, perspectives, and best practices among scholars and practitioners from diverse cultural backgrounds.",
  },
  {
    id: "collaboration",
    icon: Handshake,
    title: "Mutual Collaboration",
    desc: "Establish long-term collaborative networks between universities, research centres, government agencies, and industry organisations globally.",
  },
];

export default function AboutPage() {
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
        title="About the Seminar"
        subtitle="Understanding our mission, vision, and the global context that shapes this gathering"
        badge="NEXTGEN2026"
      />

      {/* ── Background ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold text-gold uppercase tracking-widest mb-3">
              Background
            </p>
            <h2 className="text-3xl font-extrabold text-navy mb-8">
              Context & Rationale
            </h2>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5 text-gray-600 leading-relaxed"
          >
            {[
              "The United Nations 2030 Agenda for Sustainable Development provides a global blueprint for peace, prosperity, and planetary well-being. At its core, the 17 Sustainable Development Goals (SDGs) call for transformative action across all sectors of the economy — demanding a fundamental rethinking of business models, governance frameworks, and technological infrastructure.",
              "In tandem with these global imperatives, the digital revolution is reshaping the landscape of commerce, governance, and society at an unprecedented pace. Artificial intelligence, big data analytics, blockchain, the Internet of Things, and cloud computing are no longer emerging technologies — they are the defining forces of the Fourth Industrial Revolution, reshaping industries from finance and manufacturing to agriculture and healthcare.",
              "Malaysia, as a rapidly developing digital economy, is uniquely positioned at the confluence of these global trends. The Malaysian Digital Economy Blueprint (MyDIGITAL) and the 12th Malaysia Plan articulate an ambitious vision for digital transformation that must be underpinned by rigorous academic research, evidence-based policy, and strong public-private partnerships.",
              "It is within this rich and dynamic global context that the International Conference on Global Sustainable Business Transformation with NextGen Information Technology is convened. By bringing together leading scholars, industry pioneers, and policymakers from across the world, this seminar serves as a critical platform for advancing the intellectual and practical foundations of sustainable digital transformation.",
            ].map((paragraph, i) => (
              <motion.p key={i} variants={prefersReducedMotion ? {} : fadeUp}>
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Objectives ─────────────────────────────────────────────────── */}
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
              What We Aim to Achieve
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Seminar Objectives
            </h2>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {objectives.map((obj, i) => {
              const Icon = obj.icon;
              return (
                <motion.div
                  key={obj.id}
                  variants={prefersReducedMotion ? {} : fadeUp}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={22} className="text-navy" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center mb-3">
                    <span className="text-xs font-extrabold text-navy">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-navy font-bold text-lg mb-3">
                    {obj.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {obj.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Justification ──────────────────────────────────────────────── */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold text-gold uppercase tracking-widest mb-3">
              Why This Seminar Matters
            </p>
            <h2 className="text-3xl font-extrabold mb-8">Justification</h2>
          </motion.div>
          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5 text-blue-100 leading-relaxed"
          >
            {[
              "The intersection of sustainability and digital transformation represents one of the most critical and underexplored frontiers in contemporary research. While significant advances have been made in each domain independently, the synergistic relationship between NextGen digital technologies and sustainable business practices demands dedicated scholarly attention.",
              "Existing international conferences tend to address either technology or sustainability in isolation. This seminar deliberately bridges these two domains — creating a unique interdisciplinary space where computer scientists and business scholars engage in productive dialogue with industry practitioners and government officials.",
              "Furthermore, the seminar provides an essential platform for researchers from developing nations, particularly in Southeast Asia, to contribute to and benefit from global conversations on sustainable digital transformation. By hosting this gathering at Universiti Malaya, we are affirming Malaysia's role as a knowledge leader in the ASEAN region and beyond.",
            ].map((paragraph, i) => (
              <motion.p key={i} variants={prefersReducedMotion ? {} : fadeUp}>
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Organising Institutions ────────────────────────────────────── */}
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
              Co-organisers
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Organising Institutions
            </h2>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                faculty: "Faculty of Computer Science & Information Technology",
                university: "Universiti Malaya",
                desc: "One of Malaysia's foremost research faculties in computer science, information technology, and artificial intelligence. The faculty has consistently produced world-class research in machine learning, network security, software engineering, and computational intelligence, contributing significantly to Malaysia's digital economy ambitions.",
                accent: "bg-blue-50 border-blue-200",
                iconColor: "text-blue-700",
                badgeBg: "bg-blue-100 text-blue-800",
              },
              {
                faculty: "Faculty of Business & Economics",
                university: "Universiti Malaya",
                desc: "A leading centre for business and economics research in Asia, renowned for its contributions to digital economy, sustainable finance, international trade, and entrepreneurship. The faculty's interdisciplinary research connects economic theory with practical business transformation strategies for the modern digital era.",
                accent: "bg-emerald-50 border-emerald-200",
                iconColor: "text-emerald-700",
                badgeBg: "bg-emerald-100 text-emerald-800",
              },
            ].map((inst) => (
              <motion.div
                key={inst.faculty}
                variants={prefersReducedMotion ? {} : fadeUp}
                className={`rounded-2xl p-8 border ${inst.accent}`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Building size={26} className={inst.iconColor} />
                  </div>
                  <div>
                    <span
                      className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2 ${inst.badgeBg}`}
                    >
                      {inst.university}
                    </span>
                    <h3 className="text-navy font-bold text-lg leading-tight">
                      {inst.faculty}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {inst.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 bg-navy rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-xl font-bold mb-3">
              {seminarInfo.university}
            </h3>
            <p className="text-blue-200 max-w-3xl mx-auto text-sm leading-relaxed">
              Founded in 1949, Universiti Malaya is Malaysia's oldest and
              highest-ranked university. Consistently ranked among the top 100
              universities in Asia by QS World University Rankings, UM is a
              research-intensive university committed to excellence,
              innovation, and global impact.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
