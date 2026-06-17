"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { experience, type ExperienceEntry } from "@/lib/data";

function LedgerRow({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const hasDetail = Boolean(entry.groups && entry.groups.length > 0);
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
      className="border-b border-line"
    >
      <button
        type="button"
        onClick={() => hasDetail && setOpen((v) => !v)}
        className={`w-full text-left py-7 grid grid-cols-12 gap-4 items-start ${
          hasDetail ? "cursor-pointer group" : "cursor-default"
        }`}
        aria-expanded={hasDetail ? open : undefined}
      >
        <div className="col-span-3 md:col-span-2">
          <span className="font-mono text-[12px] text-slate tracking-wide">
            {entry.period}
          </span>
        </div>

        <div className="col-span-9 md:col-span-7">
          <h3 className="font-display text-[19px] md:text-[21px] text-ink leading-snug">
            {entry.company}
          </h3>
          <p className="mt-1 text-[14px] text-ink-soft">{entry.role}</p>
          {entry.current && (
            <span className="inline-flex items-center gap-1.5 mt-2.5 text-[10.5px] font-mono uppercase tracking-widest2 text-ledger">
              <span className="h-1.5 w-1.5 rounded-full bg-ledger animate-pulse" />
              Current
            </span>
          )}
        </div>

        <div className="hidden md:flex md:col-span-3 justify-end text-slate">
          <span className="text-[12px] font-mono mr-3">{entry.location}</span>
          {hasDetail && (
            <span className="text-brass">
              {open ? <Minus size={16} /> : <Plus size={16} />}
            </span>
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {hasDetail && open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-9 pl-0 md:pl-[16.6%] pr-0 md:pr-[20%] space-y-7">
              {entry.groups!.map((g) => (
                <div key={g.heading}>
                  <h4 className="font-mono text-[11px] uppercase tracking-widest2 text-brass mb-3">
                    {g.heading}
                  </h4>
                  <ul className="space-y-2.5">
                    {g.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-[14px] leading-[1.65] text-ink-soft flex items-start gap-3"
                      >
                        <span className="mt-[7px] h-[3px] w-[3px] rounded-full bg-line shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="font-mono text-[12px] uppercase tracking-widest2 text-brass mb-4">
            02 — Experience
          </p>
          <h2 className="font-display text-[32px] md:text-[38px] leading-[1.1] tracking-tightest text-ink max-w-[600px]">
            A ledger of roles, each one closing into the next.
          </h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 pb-4 border-b border-ink">
          <span className="col-span-3 md:col-span-2 font-mono text-[10.5px] uppercase tracking-widest2 text-slate">
            Period
          </span>
          <span className="col-span-9 md:col-span-7 font-mono text-[10.5px] uppercase tracking-widest2 text-slate">
            Role
          </span>
          <span className="hidden md:block md:col-span-3 text-right font-mono text-[10.5px] uppercase tracking-widest2 text-slate">
            Location
          </span>
        </div>

        <div>
          {experience.map((entry, i) => (
            <LedgerRow entry={entry} index={i} key={`${entry.company}-${entry.period}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
