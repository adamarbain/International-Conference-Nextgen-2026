"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Users,
  BookOpen,
  Mic,
  Calendar,
  LucideIcon,
} from "lucide-react";
import type { Highlight } from "@/data/seminar";
import { fadeUp } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Users,
  BookOpen,
  Mic,
  Calendar,
};

interface StatCardProps {
  highlight: Highlight;
}

export default function StatCard({ highlight }: StatCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = iconMap[highlight.iconName] ?? Users;

  return (
    <motion.div
      variants={prefersReducedMotion ? {} : fadeUp}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl p-7 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 mb-4">
        <Icon size={26} className="text-navy" />
      </div>
      <div className="text-4xl font-extrabold text-navy mb-1">
        {highlight.value}
      </div>
      <div className="text-sm text-gray-500 font-medium">{highlight.label}</div>
    </motion.div>
  );
}
