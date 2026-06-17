"use client";

import { motion } from "framer-motion";
import { competencies, profile } from "@/lib/data";

export default function Profile() {
  return (
    <section id="profile" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6 }}
              className="md:sticky md:top-32"
            >
              <p className="font-mono text-[12px] uppercase tracking-widest2 text-brass mb-4">
                01 — Profile
              </p>
              <h2 className="font-display text-[32px] md:text-[38px] leading-[1.1] tracking-tightest text-ink">
                A finance partner who closes the books and explains them.
              </h2>
            </motion.div>
          </div>

          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-[17px] md:text-[18.5px] leading-[1.75] text-ink-soft"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-14 grid sm:grid-cols-2 gap-x-10 gap-y-10"
              id="competencies"
            >
              {competencies.map((group) => (
                <div key={group.heading}>
                  <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-slate mb-4 pb-3 border-b border-line">
                    {group.heading}
                  </h3>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-[14.5px] leading-snug text-ink-soft flex items-start gap-3"
                      >
                        <span className="mt-[7px] h-[3px] w-[3px] rounded-full bg-brass shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
