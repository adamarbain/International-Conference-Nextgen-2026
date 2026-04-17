"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  Star,
  Plane,
  Train,
  Bus,
  Car,
  ExternalLink,
  Info,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { hotels, transportOptions, seminarInfo } from "@/data/seminar";
import {
  fadeUp,
  staggerContainer,
  pageTransition,
} from "@/lib/animations";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Plane,
  Train,
  Bus,
  Car,
};

export default function VenuePage() {
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
        title="Venue & Travel"
        subtitle="Everything you need to know about getting to and around Universiti Malaya"
        badge="KL 2026"
      />

      {/* ── Venue Details ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={prefersReducedMotion ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold text-gold uppercase tracking-widest mb-3">
                Conference Venue
              </p>
              <h2 className="text-3xl font-extrabold text-navy mb-5">
                Faculty of Computer Science & Information Technology, Universiti
                Malaya
              </h2>
              <div className="flex items-start gap-2 mb-5">
                <MapPin size={16} className="text-gold shrink-0 mt-1" />
                <p className="text-gray-600">
                  Faculty of Computer Science & Information Technology,
                  Universiti Malaya, 50603 Kuala Lumpur, Malaysia
                </p>
              </div>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Universiti Malaya (UM) is Malaysia&apos;s oldest and most
                  prestigious university, consistently ranked among the top
                  universities in Asia. The main campus is a verdant 309-hectare
                  site nestled in the heart of Kuala Lumpur, offering
                  world-class facilities for academic events.
                </p>
                <p>
                  The seminar will be hosted at the Faculty of Computer Science
                  & Information Technology (FSKTM), Universiti Malaya. Detailed
                  room and hall assignments will be provided in the final
                  programme booklet distributed to all registered participants.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: "Campus Size", value: "309 hectares" },
                  { label: "Founded", value: "1949" },
                  { label: "Distance from KLCC", value: "~8 km" },
                  { label: "Nearest LRT", value: "Universiti (KJ13)" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                  >
                    <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                    <p className="text-navy font-bold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interactive Map */}
            <motion.div
              variants={prefersReducedMotion ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white h-80">
                <iframe
                  title="Map to Faculty of Computer Science & Information Technology, Universiti Malaya"
                  src="https://www.google.com/maps?q=Faculty%20of%20Computer%20Science%20%26%20Information%20Technology%2C%20Universiti%20Malaya&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="bg-white rounded-lg px-4 py-2 border border-gray-200 text-xs text-navy font-medium flex items-center gap-2">
                  <MapPin size={12} />
                  3°7&apos;19&quot;N 101°39&apos;14&quot;E
                </div>
                <a
                  href="https://maps.google.com/?q=Faculty+of+Computer+Science+%26+Information+Technology,+Universiti+Malaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-gold transition-colors"
                >
                  Open in Google Maps <ExternalLink size={12} />
                </a>
              </div>

              <div className="mt-4 bg-blue-50 rounded-xl p-4 border border-blue-100 flex items-start gap-3">
                <Info size={15} className="text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-700">
                  Detailed venue maps, hall assignments, and campus navigation
                  guides will be included in the final programme booklet sent to
                  all registered participants.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Getting There ──────────────────────────────────────────────── */}
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
              Transport
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Getting There
            </h2>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {transportOptions.map((opt) => {
              const Icon = iconMap[opt.iconName] ?? Plane;
              return (
                <motion.div
                  key={opt.id}
                  variants={prefersReducedMotion ? {} : fadeUp}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-navy font-bold mb-2">{opt.mode}</h3>
                  <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                    {opt.description}
                  </p>
                  <ul className="space-y-1.5">
                    {opt.details.map((d, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-1.5 text-xs text-gray-600"
                      >
                        <span className="text-gold mt-1">•</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Hotels ─────────────────────────────────────────────────────── */}
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
              Accommodation
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Recommended Hotels
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              We recommend booking early as Kuala Lumpur hotels fill quickly
              during peak periods. The options below offer convenient access to
              the UM campus.
            </p>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {hotels.map((hotel) => {
              const bookingIsExternal = /^https?:\/\//i.test(hotel.bookingLink);
              return (
              <motion.div
                key={hotel.id}
                variants={prefersReducedMotion ? {} : fadeUp}
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="h-36 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                      Hotel
                    </p>
                    <p className="text-white font-bold text-lg">{hotel.name}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: hotel.stars }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-gold fill-gold"
                      />
                    ))}
                    {Array.from({ length: 5 - hotel.stars }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-gray-200 fill-gray-200"
                      />
                    ))}
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-xs text-gray-600">
                      <MapPin size={12} className="shrink-0 mt-0.5 text-gold" />
                      <span>{hotel.distance}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-gray-600">
                      <MapPin size={12} className="shrink-0 mt-0.5 text-gray-400" />
                      <span>{hotel.address}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">
                        Approx. rate
                      </p>
                      <p className="text-navy font-bold text-sm">
                        {hotel.priceRange}
                      </p>
                    </div>
                    <a
                      href={hotel.bookingLink}
                      {...(bookingIsExternal
                        ? {
                            target: "_blank" as const,
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className="inline-flex items-center gap-1 text-navy text-xs font-semibold hover:text-gold transition-colors"
                    >
                      Book <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Visa Info ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center shrink-0">
                <Info size={22} className="text-gold" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">
                  Visa Information for International Participants
                </h2>
                <div className="space-y-3 text-blue-200 text-sm leading-relaxed">
                  <p>
                    Malaysia has a generally open visa policy, with citizens of
                    most countries granted visa-free entry for stays of up to 30
                    or 90 days. Participants from ASEAN member states, most
                    Western countries, Japan, South Korea, Australia, and many
                    others may enter Malaysia without a prior visa.
                  </p>
                  <p>
                    Participants who require a visa to enter Malaysia must apply
                    through their nearest Malaysian embassy or consulate well in
                    advance. An official{" "}
                    <strong className="text-white">
                      Invitation Letter for Visa Application
                    </strong>{" "}
                    can be provided upon request to registered participants.
                    Please contact the secretariat at{" "}
                    <a
                      href="mailto:nextgen2026@um.edu.my"
                      className="text-gold hover:underline"
                    >
                      {seminarInfo.email ?? "nextgen2026@um.edu.my"}
                    </a>{" "}
                    with your full name, passport number, and registration
                    confirmation.
                  </p>
                  <p>
                    We strongly advise all international participants to check
                    the current visa requirements via the Immigration Department
                    of Malaysia website at{" "}
                    <span className="text-white font-medium">
                      www.imi.gov.my
                    </span>{" "}
                    and to apply for any required visa at least 6–8 weeks before
                    the seminar date.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
