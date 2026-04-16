"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { seminarInfo } from "@/data/seminar";
import { fadeUp, staggerContainer, pageTransition } from "@/lib/animations";

const subjectOptions = [
  "General Enquiry",
  "Paper Submission",
  "Registration",
  "Sponsorship",
  "Other",
];

export default function ContactPage() {
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
        title="Contact Us"
        subtitle="We'd love to hear from you — reach out with any questions or enquiries"
        badge="Get in Touch"
      />

      {/* ── Contact Info Cards ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6 mb-16"
          >
            {[
              {
                icon: Mail,
                title: "Email",
                value: seminarInfo.email,
                sub: "We respond within 2 working days",
                href: `mailto:${seminarInfo.email}`,
              },
              {
                icon: Phone,
                title: "Phone",
                value: seminarInfo.phone,
                sub: "Mon–Fri, 9:00am–5:00pm MYT",
                href: `tel:${seminarInfo.phone}`,
              },
              {
                icon: MapPin,
                title: "Address",
                value: seminarInfo.address,
                sub: "Kuala Lumpur, Malaysia",
                href: "#",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  variants={prefersReducedMotion ? {} : fadeUp}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-7 text-center border border-gray-100 hover:border-navy/20 hover:shadow-md transition-all block"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-navy rounded-2xl mb-4">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    {item.title}
                  </p>
                  <p className="text-navy font-semibold text-sm leading-snug mb-1">
                    {item.value}
                  </p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </motion.a>
              );
            })}
          </motion.div>

          {/* ── Organiser Info ─────────────────────────────────────────── */}
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-navy rounded-2xl p-8 text-white mb-16"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center shrink-0">
                <Building2 size={24} className="text-gold" />
              </div>
              <div>
                <p className="text-blue-200 text-xs uppercase tracking-wider font-bold mb-2">
                  Organised by
                </p>
                <h3 className="text-xl font-bold mb-1">
                  {seminarInfo.university}
                </h3>
                <p className="text-blue-200 text-sm mb-3">
                  {seminarInfo.organiserFaculties[0]} &amp;{" "}
                  {seminarInfo.organiserFaculties[1]}
                </p>
                <p className="text-blue-300 text-sm leading-relaxed max-w-2xl">
                  Universiti Malaya is Malaysia&apos;s oldest and highest-ranked
                  university. The seminar is jointly organised by the faculties
                  of Computer Science &amp; IT and Business &amp; Economics,
                  two of UM&apos;s flagship academic units.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Contact Form ───────────────────────────────────────────── */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={prefersReducedMotion ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">
                Send a Message
              </p>
              <h2 className="text-3xl font-extrabold text-navy">
                Write to Us
              </h2>
            </motion.div>

            <motion.form
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5 bg-gray-50 rounded-2xl p-8 border border-gray-200"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <motion.div variants={prefersReducedMotion ? {} : fadeUp}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors"
                  />
                </motion.div>
                <motion.div variants={prefersReducedMotion ? {} : fadeUp}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors"
                  />
                </motion.div>
              </div>

              <motion.div variants={prefersReducedMotion ? {} : fadeUp}>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Subject <span className="text-red-400">*</span>
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors text-gray-700">
                  <option value="">Select a subject…</option>
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </motion.div>

              <motion.div variants={prefersReducedMotion ? {} : fadeUp}>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Institution / Organisation
                </label>
                <input
                  type="text"
                  placeholder="Your university or organisation"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors"
                />
              </motion.div>

              <motion.div variants={prefersReducedMotion ? {} : fadeUp}>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Write your message here…"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors resize-none"
                />
              </motion.div>

              <motion.div variants={prefersReducedMotion ? {} : fadeUp}>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy text-white font-bold px-8 py-3.5 rounded-xl hover:bg-navy-light transition-colors shadow-sm"
                >
                  <Send size={17} />
                  Send Message
                </button>
                <p className="text-xs text-gray-400 mt-3">
                  This form is for enquiry purposes only. No data is stored or
                  processed. Please email us directly at{" "}
                  <a
                    href={`mailto:${seminarInfo.email}`}
                    className="text-navy hover:underline"
                  >
                    {seminarInfo.email}
                  </a>{" "}
                  for urgent matters.
                </p>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
