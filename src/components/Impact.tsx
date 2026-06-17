"use client";

import { motion } from "framer-motion";
import { achievements, recognitions } from "@/lib/data";

export default function Impact() {
  return (
    <section id="impact" className="bg-ink text-paper py-24 md:py-32 dark-scrollbar">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[12px] uppercase tracking-widest2 text-brass-light mb-4">
              03 — Impact
            </p>
            <h2 className="font-display text-[32px] md:text-[38px] leading-[1.1] tracking-tightest text-paper max-w-[600px]">
              The outputs a CFO actually reads.
            </h2>
          </motion.div>
          <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-paper/40">
            <span className="h-2 w-2 rounded-full bg-ledger" />
            LIVE — KEY ACHIEVEMENTS
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/10 border border-paper/10">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="bg-ink p-7 md:p-8 hover:bg-ink-soft transition-colors duration-300"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[40px] md:text-[46px] leading-none tracking-tightest text-paper font-feature-tnum">
                  {a.metric}
                </span>
                {a.unit && (
                  <span className="font-mono text-[12px] uppercase tracking-widest2 text-brass-light">
                    {a.unit}
                  </span>
                )}
              </div>
              <p className="mt-4 text-[13.5px] leading-[1.6] text-paper/60 max-w-[260px]">
                {a.label}
              </p>
            </motion.div>
          ))}
        </div>

        {recognitions.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-3 font-mono text-[11.5px] text-paper/50 uppercase tracking-wide"
          >
            <span className="text-brass-light">★</span>
            {recognitions.join(" · ")}
          </motion.div>
        )}
      </div>
    </section>
  );
}
