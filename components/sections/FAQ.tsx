"use client";

import { motion } from "framer-motion";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import { faq } from "@/content/faq";

export default function FAQ() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          badge="FAQ"
          title="Časté otázky"
          description="Odpovede na otázky, ktoré od našich pacientov dostávame najčastejšie."
        />

        <div className="mt-12 grid gap-6">
          {faq.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="rounded-[1.75rem] border border-border bg-surface p-7 transition-all duration-300 hover:border-primary/60 hover:bg-surface-dark hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.question}
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}