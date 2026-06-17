"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

const contactItems = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: Linkedin, label: profile.linkedin, href: profile.linkedinUrl },
  { icon: MapPin, label: profile.location, href: undefined },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-paper py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[12px] uppercase tracking-widest2 text-brass-light mb-6"
        >
          05 — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="font-display text-[36px] md:text-[54px] leading-[1.08] tracking-tightest max-w-[760px] text-balance"
        >
          Open to FP&amp;A, business partnering, and finance leadership
          conversations.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-paper/10 border border-paper/10"
        >
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="bg-ink p-6 h-full hover:bg-ink-soft transition-colors duration-300">
                <Icon size={18} className="text-brass-light mb-4" />
                <p className="text-[13.5px] font-mono text-paper/80 break-all">
                  {item.label}
                </p>
              </div>
            );
            return item.href ? (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </motion.div>

        <div className="mt-20 pt-8 border-t border-paper/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-mono text-[11.5px] text-paper/40 tracking-wide">
            {profile.name} — FP&amp;A Consultant
          </p>
          <p className="font-mono text-[11.5px] text-paper/40 tracking-wide">
            © {new Date().getFullYear()} · Built for clarity, not decoration.
          </p>
        </div>
      </div>
    </section>
  );
}
