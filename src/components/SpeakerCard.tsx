"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, Tag } from "lucide-react";
import type { Speaker } from "@/data/seminar";
import { fadeUp } from "@/lib/animations";

interface SpeakerCardProps {
  speaker: Speaker;
  large?: boolean;
}

export default function SpeakerCard({
  speaker,
  large = false,
}: SpeakerCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const avatarSize = large ? 140 : 110;

  return (
    <motion.div
      variants={prefersReducedMotion ? {} : fadeUp}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col"
    >
      {/* Avatar */}
      <div
        className="flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${speaker.color}22, ${speaker.color}44)`,
          padding: large ? "2.25rem 0" : "1.5rem 0",
        }}
      >
        {speaker.image ? (
          <div
            className="relative rounded-full overflow-hidden shadow-md border-2 border-white/70 bg-white"
            style={{
              width: avatarSize,
              height: avatarSize,
            }}
          >
            <Image
              src={speaker.image}
              alt={speaker.name}
              fill
              className="object-cover"
              sizes={large ? "140px" : "110px"}
            />
          </div>
        ) : (
          <div
            className="rounded-full flex items-center justify-center text-white font-bold shadow-md"
            style={{
              width: avatarSize,
              height: avatarSize,
              fontSize: large ? "2.4rem" : "1.9rem",
              backgroundColor: speaker.color,
            }}
          >
            {speaker.initials}
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 ${large ? "p-7" : "p-5"}`}>
        <span className="inline-block text-xs font-bold text-gold bg-amber-50 px-2.5 py-1 rounded-full mb-3 self-start">
          {speaker.role}
        </span>
        <h3
          className={`font-bold text-navy leading-tight ${
            large ? "text-xl mb-1" : "text-base mb-1"
          }`}
        >
          {speaker.name}
        </h3>
        {large && (
          <p className="text-sm text-gray-500 font-medium mb-1">
            {speaker.title}
          </p>
        )}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
          <Building2 size={12} className="shrink-0" />
          <span>{speaker.institution}</span>
        </div>

        {large && (
          <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">
            {speaker.bio}
          </p>
        )}

        <div className="flex items-start gap-2 bg-blue-50 rounded-lg p-3 mt-auto">
          <Tag size={13} className="text-navy shrink-0 mt-0.5" />
          <p className="text-xs text-navy font-medium leading-snug">
            {speaker.topic}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
