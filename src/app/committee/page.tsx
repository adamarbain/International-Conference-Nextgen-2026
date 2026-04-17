"use client";

import { motion, useReducedMotion } from "framer-motion";
import { User, Crown, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { committeeGroups } from "@/data/seminar";
import {
  fadeUp,
  staggerContainer,
  pageTransition,
} from "@/lib/animations";

const specialRoles = ["patron", "chair", "secretariat"];

export default function CommitteePage() {
  const prefersReducedMotion = useReducedMotion();

  const specialGroups = committeeGroups.filter((g) =>
    specialRoles.includes(g.id)
  );
  const subGroups = committeeGroups.filter(
    (g) => !specialRoles.includes(g.id)
  );

  return (
    <motion.div
      variants={prefersReducedMotion ? {} : pageTransition}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col"
    >
      <Navbar />
      <PageHero
        title="Organising Committee"
        subtitle="Meet the dedicated team behind the International Conference 2026"
        badge="Committee"
      />

      {/* ── Patron / Chair / Secretariat ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {specialGroups.map((group) => (
              <motion.div
                key={group.id}
                variants={prefersReducedMotion ? {} : fadeUp}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 bg-navy rounded-xl flex items-center justify-center">
                    {group.id === "patron" ? (
                      <Crown size={17} className="text-gold" />
                    ) : group.id === "chair" ? (
                      <Shield size={17} className="text-white" />
                    ) : (
                      <User size={17} className="text-white" />
                    )}
                  </div>
                  <h2 className="text-xl font-extrabold text-navy">
                    {group.title}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {group.members.map((member) => (
                    <div
                      key={member.id}
                      className={`rounded-xl p-5 border ${
                        group.id === "patron"
                          ? "bg-gold/5 border-gold/30"
                          : group.id === "chair"
                          ? "bg-blue-50 border-blue-200"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center mb-3">
                        <User size={18} className="text-white" />
                      </div>
                      <p className="text-navy font-bold text-sm leading-tight mb-1">
                        {member.name}
                      </p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                      {member.institution && (
                        <p className="text-xs text-gray-400 mt-0.5">
                          {member.institution}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Sub-committees ─────────────────────────────────────────────── */}
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
              Working Groups
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Sub-committees
            </h2>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {subGroups.map((group) => (
              <motion.div
                key={group.id}
                variants={prefersReducedMotion ? {} : fadeUp}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="bg-navy px-5 py-4">
                  <h3 className="text-white font-bold text-base">
                    {group.title}
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  {group.members.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50"
                    >
                      <div className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                        <User size={15} className="text-navy" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy leading-tight">
                          {member.name}
                        </p>
                        <p className="text-xs text-gray-500">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Join CTA ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">
              Interested in Volunteering?
            </h2>
            <p className="text-blue-200 mb-6 text-sm leading-relaxed">
              We welcome volunteers from Universiti Malaya to support the
              operations of the seminar. If you are interested in joining the
              organizing team, please reach out to the secretariat.
            </p>
            <a
              href="mailto:nextgen2026@um.edu.my"
              className="inline-flex items-center gap-2 bg-gold text-navy-dark font-bold px-7 py-3 rounded-xl hover:bg-gold-light transition-colors"
            >
              Contact the Secretariat
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
