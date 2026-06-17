"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { heroStats, profile } from "@/lib/data";

const ForecastRibbon = dynamic(() => import("./ForecastRibbon"), {
  ssr: false,
});

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative pt-[140px] pb-24 md:pt-[170px] md:pb-32 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Left: copy */}
          <div className="md:col-span-7">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="font-mono text-[12px] uppercase tracking-widest2 text-brass mb-6"
            >
              Consolidated Statement — {new Date().getFullYear()}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-display text-[44px] leading-[1.05] sm:text-[58px] md:text-[68px] tracking-tightest text-ink text-balance"
            >
              Turning ten years of
              <span className="italic text-brass"> financial complexity </span>
              into numbers leadership can trust.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-7 text-[17px] md:text-[18px] leading-[1.7] text-ink-soft max-w-[560px]"
            >
              {profile.name} is an FP&amp;A consultant who consolidates, forecasts, and
              defends the numbers that reach a Group CFO &mdash; built on a decade across
              budgeting, variance analysis, P&amp;L management, and process automation
              in multi-market organisations.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 bg-ink text-paper px-6 py-3.5 text-[13px] font-mono uppercase tracking-wide hover:bg-brass transition-colors duration-300"
              >
                Review the ledger
                <ArrowDownRight size={15} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-[13px] font-mono uppercase tracking-wide text-ink-soft border-b border-ink/30 pb-1 hover:border-brass hover:text-brass transition-colors"
              >
                {profile.email}
              </a>
            </motion.div>
          </div>

          {/* Right: 3D ribbon */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[280px] md:h-[360px] rounded-sm"
            >
              <div className="absolute inset-0 border border-line bg-paper-dim/40" />
              <ForecastRibbon />
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between pointer-events-none">
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-slate">
                  Forecast vs. Actual
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-rust">
                  ● Variance flag
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-line"
        >
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-7 px-1 md:px-6 ${
                i !== 0 ? "border-l border-line" : ""
              } ${i === 2 ? "md:border-l" : ""}`}
            >
              <div className="font-display text-[32px] md:text-[38px] text-ink tracking-tightest">
                <AnimatedCounter
                  value={stat.value}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="mt-2 text-[12.5px] leading-snug text-slate max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
