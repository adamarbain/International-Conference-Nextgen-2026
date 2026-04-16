"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Network,
  FlaskConical,
  Heart,
  Download,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { sponsorTiers, sponsorshipPackages, seminarInfo } from "@/data/seminar";
import {
  fadeUp,
  staggerContainer,
  pageTransition,
} from "@/lib/animations";

const benefits = [
  {
    id: "visibility",
    icon: Eye,
    title: "Brand Visibility",
    desc: "Reach a targeted audience of academics, researchers, and industry professionals from across the globe.",
  },
  {
    id: "network",
    icon: Network,
    title: "Network Access",
    desc: "Connect directly with decision-makers, researchers, and innovators at the forefront of sustainable digital transformation.",
  },
  {
    id: "research",
    icon: FlaskConical,
    title: "Research Exposure",
    desc: "Showcase your organisation's commitment to research-led innovation and gain visibility among leading academic institutions.",
  },
  {
    id: "csr",
    icon: Heart,
    title: "CSR Value",
    desc: "Demonstrate your corporate social responsibility by supporting cutting-edge academic discourse on global sustainability challenges.",
  },
];

const packageColumns = [
  "Logo on Conference Materials",
  "Logo on Website",
  "Exhibition Booth",
  "Programme Advertisement",
  "Complimentary Passes",
  "Social Media Feature",
  "Speaking Slot",
  "Investment",
];

const packageKeys: (keyof (typeof sponsorshipPackages)[0])[] = [
  "logoOnMaterials",
  "logoOnWebsite",
  "exhibitionBooth",
  "programmeAdvert",
  "complimentaryPasses",
  "socialMediaFeature",
  "speakingSlot",
  "price",
];

export default function SponsorsPage() {
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
        title="Sponsors & Partners"
        subtitle="Support world-class research while amplifying your organisation's reach and impact"
        badge="Sponsorship 2026"
      />

      {/* ── Current Sponsors ───────────────────────────────────────────── */}
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
              Our Partners
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Current Sponsors
            </h2>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            {sponsorTiers.map((tier) => (
              <motion.div
                key={tier.id}
                variants={prefersReducedMotion ? {} : fadeUp}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: tier.color }}
                  />
                  <h3
                    className="text-lg font-bold"
                    style={{ color: tier.color }}
                  >
                    {tier.name}
                  </h3>
                </div>
                <div
                  className={`grid gap-4 ${
                    tier.id === "gold"
                      ? "grid-cols-2 sm:grid-cols-3"
                      : tier.id === "silver"
                      ? "grid-cols-2 sm:grid-cols-4"
                      : "grid-cols-2"
                  }`}
                >
                  {Array.from({ length: tier.slots }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-xl border-2 border-dashed flex items-center justify-center"
                      style={{
                        borderColor: tier.color + "44",
                        backgroundColor: tier.bgColor,
                        height: tier.id === "gold" ? 100 : 80,
                      }}
                    >
                      <span
                        className="text-xs font-medium"
                        style={{ color: tier.color }}
                      >
                        {tier.name} Logo
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Sponsor ────────────────────────────────────────────────── */}
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
              Partnership Value
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Why Sponsor This Seminar?
            </h2>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.id}
                  variants={prefersReducedMotion ? {} : fadeUp}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-2xl mb-5">
                    <Icon size={24} className="text-navy" />
                  </div>
                  <h3 className="text-navy font-bold mb-3">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Packages Table ─────────────────────────────────────────────── */}
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
              Compare
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Sponsorship Packages
            </h2>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm"
          >
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-4 text-left text-sm font-semibold w-44">
                    Benefits
                  </th>
                  {sponsorshipPackages.map((pkg) => (
                    <th
                      key={pkg.tier}
                      className="px-5 py-4 text-center text-sm font-semibold"
                    >
                      {pkg.tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packageColumns.map((col, ci) => (
                  <tr
                    key={col}
                    className={ci % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-5 py-3.5 text-sm text-gray-700 font-medium border-r border-gray-100">
                      {col}
                    </td>
                    {sponsorshipPackages.map((pkg) => {
                      const val = pkg[packageKeys[ci]];
                      const isPrice = packageKeys[ci] === "price";
                      const isCheck = val === "✓" || val?.startsWith("✓");
                      const isNone = val === "—";
                      return (
                        <td
                          key={pkg.tier}
                          className={`px-5 py-3.5 text-center text-sm border-r border-gray-100 last:border-0 ${
                            isPrice
                              ? "font-bold text-navy"
                              : isNone
                              ? "text-gray-300"
                              : isCheck
                              ? "text-emerald-600 font-medium"
                              : "text-gray-700"
                          }`}
                        >
                          {isCheck && !isPrice ? (
                            <span className="flex items-center justify-center gap-1">
                              <CheckCircle size={14} />
                              {val !== "✓" ? val.replace("✓ ", "") : ""}
                            </span>
                          ) : (
                            val
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── Become a Sponsor CTA ───────────────────────────────────────── */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold mb-4">
              Become a Partner
            </h2>
            <p className="text-blue-200 mb-3 leading-relaxed">
              For sponsorship enquiries, custom packages, or to download the
              full sponsorship prospectus, please contact our partnership team.
            </p>
            <p className="text-gold font-semibold text-lg mb-8">
              {seminarInfo.email}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${seminarInfo.email}?subject=Sponsorship Enquiry`}
                className="inline-flex items-center gap-2 bg-gold text-navy-dark font-bold px-7 py-3.5 rounded-xl hover:bg-gold-light transition-colors"
              >
                Contact Partnership Team <ArrowRight size={17} />
              </a>
              <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-7 py-3.5 rounded-xl transition-colors">
                <Download size={17} />
                Download Prospectus
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
