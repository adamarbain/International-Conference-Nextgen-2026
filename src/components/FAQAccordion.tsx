"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/data/seminar";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`border rounded-xl overflow-hidden transition-colors ${
              isOpen
                ? "border-navy shadow-sm"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span
                className={`text-sm font-semibold ${
                  isOpen ? "text-navy" : "text-gray-800"
                }`}
              >
                {item.question}
              </span>
              <motion.span
                animate={
                  prefersReducedMotion ? {} : { rotate: isOpen ? 180 : 0 }
                }
                transition={{ duration: 0.25 }}
                className="shrink-0"
              >
                <ChevronDown
                  size={18}
                  className={isOpen ? "text-navy" : "text-gray-400"}
                />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={
                    prefersReducedMotion ? false : { height: 0, opacity: 0 }
                  }
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1 bg-white border-t border-gray-100">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
