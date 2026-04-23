"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { scaleIn } from "@/lib/animations";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const diff = targetDate.getTime() - new Date().getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const TARGET = new Date("2026-07-14T09:00:00+08:00");
const ZERO_TIME_LEFT: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(ZERO_TIME_LEFT);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Keep the first SSR/client render identical, then start the live countdown.
    setTimeLeft(calculateTimeLeft(TARGET));
    const id = setInterval(() => {
      setTimeLeft(calculateTimeLeft(TARGET));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      variants={prefersReducedMotion ? {} : scaleIn}
      initial="hidden"
      animate="visible"
      className="flex items-center gap-3 sm:gap-5"
    >
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 sm:gap-5">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 min-w-[64px]">
              <span className="block text-3xl sm:text-4xl font-bold text-white tabular-nums leading-none">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <span className="block text-xs text-blue-200 mt-1.5 uppercase tracking-wider font-medium">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-2xl text-gold font-bold mb-4 select-none">
              :
            </span>
          )}
        </div>
      ))}
    </motion.div>
  );
}
