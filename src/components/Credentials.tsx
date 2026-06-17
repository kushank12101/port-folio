"use client";

import { motion } from "framer-motion";
import { certifications, software, education, languages } from "@/lib/data";

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="font-mono text-[12px] uppercase tracking-widest2 text-brass mb-4">
            04 — Credentials
          </p>
          <h2 className="font-display text-[32px] md:text-[38px] leading-[1.1] tracking-tightest text-ink max-w-[600px]">
            Certifications, systems, and the foundation underneath.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55 }}
            className="md:col-span-4"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-slate mb-5 pb-3 border-b border-line">
              Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((c) => (
                <li key={c.name}>
                  <p className="text-[14.5px] text-ink-soft leading-snug">{c.name}</p>
                  {(c.issuer || c.year) && (
                    <p className="text-[12px] font-mono text-slate mt-1">
                      {[c.issuer, c.year].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="md:col-span-4"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-slate mb-5 pb-3 border-b border-line">
              Systems &amp; Tools
            </h3>
            <ul className="space-y-3">
              {software.map((s) => (
                <li
                  key={s}
                  className="text-[14.5px] text-ink-soft flex items-center gap-3"
                >
                  <span className="h-[3px] w-[3px] rounded-full bg-brass shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="md:col-span-4"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-slate mb-5 pb-3 border-b border-line">
              Education
            </h3>
            <p className="text-[14.5px] text-ink-soft leading-snug">
              {education.degree}
            </p>
            <p className="text-[13px] text-slate mt-2 leading-snug">
              {education.school}
            </p>
            <p className="text-[12px] font-mono text-slate mt-2">
              {education.period} · {education.detail}
            </p>

            <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-slate mt-9 mb-4 pb-3 border-b border-line">
              Languages
            </h3>
            <p className="text-[14.5px] text-ink-soft">{languages.join(" · ")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
