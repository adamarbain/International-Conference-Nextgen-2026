"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Leaf, Cpu, Sun, LucideIcon } from "lucide-react";
import type { Track } from "@/data/seminar";
import { fadeUp } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Cpu,
  Sun,
};

const trackColors = [
  { bg: "bg-emerald-50", icon: "text-emerald-700", border: "border-emerald-100", badge: "bg-emerald-100 text-emerald-800" },
  { bg: "bg-blue-50", icon: "text-blue-700", border: "border-blue-100", badge: "bg-blue-100 text-blue-800" },
  { bg: "bg-amber-50", icon: "text-amber-700", border: "border-amber-100", badge: "bg-amber-100 text-amber-800" },
];

interface TrackCardProps {
  track: Track;
  index: number;
}

export default function TrackCard({ track, index }: TrackCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = iconMap[track.iconName] ?? Leaf;
  const colors = trackColors[index % trackColors.length];

  return (
    <motion.div
      variants={prefersReducedMotion ? {} : fadeUp}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl p-7 border ${colors.bg} ${colors.border} hover:shadow-md transition-shadow`}
    >
      <div
        className={`inline-flex items-center justify-center w-13 h-13 rounded-xl bg-white mb-4 shadow-sm`}
      >
        <Icon size={26} className={colors.icon} />
      </div>
      <div
        className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${colors.badge}`}
      >
        Track {track.number}
      </div>
      <h3 className="text-navy font-bold text-lg leading-tight mb-3">
        {track.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-5">
        {track.description}
      </p>
      <ul className="space-y-1.5">
        {track.topics.map((topic) => (
          <li key={topic} className="flex items-start gap-2 text-sm text-gray-700">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colors.icon.replace("text-", "bg-")}`} />
            {topic}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
