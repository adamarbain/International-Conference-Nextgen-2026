"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, AlertCircle, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { registrationTiers, seminarInfo } from "@/data/seminar";
import {
  fadeUp,
  staggerContainer,
  pageTransition,
} from "@/lib/animations";

const inclusions = [
  "Access to all keynote addresses and parallel sessions",
  "Official conference proceedings (digital)",
  "Welcome reception and networking dinner",
  "Lunch and refreshments on both conference days",
  "Certificate of participation (digital)",
  "Conference kit and name badge",
  "Access to post-conference session recordings (where available)",
];

export default function RegistrationPage() {
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
        title="Registration"
        subtitle="Secure your place at the International Conference — 14–15 July 2026"
        badge="Open for Registration"
      />

      {/* ── Fee Table ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Registration Fees
            </h2>
            <p className="mt-3 text-gray-500">
              Early bird rates apply for registrations made before 14 June 2026
            </p>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm"
          >
            <table className="w-full min-w-[760px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Category
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Early Bird (RM)
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Normal (RM)
                  </th>
                </tr>
              </thead>
              <tbody>
                {registrationTiers.map((tier, i) => (
                  <motion.tr
                    key={tier.id}
                    variants={prefersReducedMotion ? {} : fadeUp}
                    className={`border-t border-gray-100 ${
                      tier.id === "group" ? "bg-gold/5" : i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <p className="font-semibold text-navy text-sm">
                        {tier.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {tier.description}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-lg font-bold text-navy">
                        {tier.localFee}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-lg font-bold text-navy">
                        {tier.intlFee}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-5 flex items-start gap-2 bg-amber-50 rounded-xl p-4 border border-amber-200"
          >
            <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800">
              <strong>Early Bird Discount:</strong> A RM400 early bird discount is
              available for all registrations completed before 14 June 2026. Fees
              shown above are standard rates. Presenting authors must be
              registered to have their paper included in the proceedings.
            </p>
          </motion.div> */}
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">
              Payment Information
            </p>
            <h2 className="text-3xl font-extrabold text-navy">
              Bank Details for Registration Payment
            </h2>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <div className="space-y-3 text-sm sm:text-base text-gray-700">
              <p>
                <span className="font-semibold text-navy">Account Name:</span>{" "}
                Colnet International Sdn. Bhd.
              </p>
              <p>
                <span className="font-semibold text-navy">Bank:</span> Maybank
              </p>
              <p>
                <span className="font-semibold text-navy">Account Number:</span>{" "}
                5623 1132 0165
              </p>
              <p>
                <span className="font-semibold text-navy">SWIFT Code:</span>{" "}
                MBBEMYKL / MBBEMYKLPJY
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ── What's Included ────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">
              What You Get
            </p>
            <h2 className="text-3xl font-extrabold text-navy">
              Included in Your Registration
            </h2>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-3"
          >
            {inclusions.map((item, i) => (
              <motion.div
                key={i}
                variants={prefersReducedMotion ? {} : fadeUp}
                className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm"
              >
                <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 bg-navy rounded-2xl p-6 text-white text-center"
          >
            <Package size={28} className="text-gold mx-auto mb-3" />
            <p className="font-semibold mb-1">Conference Kit</p>
            <p className="text-blue-200 text-sm">
              All participants receive a premium conference kit including the
              programme booklet, note-taking materials, and exclusive seminar
              memorabilia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Register CTA ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-gold text-navy-dark font-bold px-9 py-4 rounded-xl hover:bg-gold-light transition-colors shadow-lg text-lg"
            >
              Register Now <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Important Notes ────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-extrabold text-navy mb-6">
              Important Notes
            </h2>
            <ul className="space-y-3">
              {[
                "Each paper submission requires at least one registered author to present at the seminar.",
                "Presenting authors must register at the Full Author rate or above — student registration does not cover paper presentation for non-student papers.",
                "Cancellations before 1 June 2026: 70% refund. Between 1–30 June 2026: 30% refund. No refunds after 30 June 2026.",
                "Substitutions (name changes) are accepted at any time at no charge with written notice to the secretariat.",
                "Group discounts apply for 3 or more participants from the same institution registering together.",
                "For payment via bank transfer, proof of payment must be uploaded within 5 working days to confirm your registration.",
                "For queries, contact the secretariat at " +
                  seminarInfo.email +
                  ".",
              ].map((note, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200"
                >
                  <AlertCircle
                    size={15}
                    className="text-navy shrink-0 mt-0.5"
                  />
                  <p className="text-sm text-gray-700">{note}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
