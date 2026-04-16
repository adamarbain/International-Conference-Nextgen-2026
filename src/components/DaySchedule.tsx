"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Coffee, Mic, Award, Layers, Utensils, Star } from "lucide-react";
import type { ScheduleItem, ParallelSessionRow } from "@/data/seminar";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface DayScheduleProps {
  items: ScheduleItem[];
  parallelSessions?: ParallelSessionRow[];
  sessionLabel?: string;
}

const typeConfig = {
  ceremony: {
    bg: "bg-gold/10 border-gold/30",
    icon: Star,
    iconColor: "text-gold",
    labelColor: "text-amber-700",
    label: "Ceremony",
  },
  keynote: {
    bg: "bg-blue-50 border-blue-200",
    icon: Mic,
    iconColor: "text-blue-700",
    labelColor: "text-blue-700",
    label: "Keynote",
  },
  break: {
    bg: "bg-gray-50 border-gray-200",
    icon: Coffee,
    iconColor: "text-gray-500",
    labelColor: "text-gray-500",
    label: "Break",
  },
  parallel: {
    bg: "bg-emerald-50 border-emerald-200",
    icon: Layers,
    iconColor: "text-emerald-700",
    labelColor: "text-emerald-700",
    label: "Parallel Session",
  },
  closing: {
    bg: "bg-purple-50 border-purple-200",
    icon: Award,
    iconColor: "text-purple-700",
    labelColor: "text-purple-700",
    label: "Closing",
  },
};

export default function DaySchedule({
  items,
  parallelSessions,
  sessionLabel,
}: DayScheduleProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={prefersReducedMotion ? {} : staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-3"
    >
      {items.map((item) => {
        const config = typeConfig[item.type];
        const Icon = config.icon;

        return (
          <motion.div
            key={item.time + item.title}
            variants={prefersReducedMotion ? {} : fadeUp}
          >
            <div
              className={`flex items-start gap-4 p-4 rounded-xl border ${config.bg}`}
            >
              <div className="shrink-0 mt-0.5">
                <Icon size={18} className={config.iconColor} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-gray-500 tabular-nums">
                    {item.time}
                  </span>
                  <span
                    className={`text-xs font-semibold ${config.labelColor} uppercase tracking-wide`}
                  >
                    {config.label}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  {item.title}
                </p>
                {item.speaker && (
                  <p className="text-xs text-gray-500 mt-0.5">{item.speaker}</p>
                )}
              </div>
            </div>

            {/* Parallel session table */}
            {item.type === "parallel" && parallelSessions && (
              <div className="mt-2 overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-xs min-w-[600px]">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="px-3 py-2.5 text-left font-semibold w-28">
                        Time
                      </th>
                      <th className="px-3 py-2.5 text-left font-semibold">
                        Track 1
                      </th>
                      <th className="px-3 py-2.5 text-left font-semibold">
                        Track 2
                      </th>
                      <th className="px-3 py-2.5 text-left font-semibold">
                        Track 3
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {parallelSessions.map((row, i) => (
                      <tr
                        key={row.time}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-3 py-2 text-gray-500 font-medium tabular-nums whitespace-nowrap">
                          {row.time}
                        </td>
                        <td className="px-3 py-2 text-gray-700">{row.track1}</td>
                        <td className="px-3 py-2 text-gray-700">{row.track2}</td>
                        <td className="px-3 py-2 text-gray-700">{row.track3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
