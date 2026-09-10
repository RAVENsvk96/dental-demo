"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
import { ArrowUpRight, Eye, ShieldCheck } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          badge="Demo projekt"
          title="Páči sa vám tento webový koncept?"
          description="Toto je ukážka dizajnu a vývoja, nie stránka skutočnej ambulancie. Objednávky ani osobné alebo zdravotné údaje tu neprijímame."
        />

        <div className="mt-12 rounded-[2rem] border border-border bg-surface p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Bez fiktívnych objednávok a zberu údajov
            </h3>

            <p className="mt-4 leading-7 text-zinc-300">
              Kontaktný formulár, telefón, adresa a mapa sú v tejto demo verzii
              zámerne vypnuté. Ak hľadáte autora projektu, pokračujte na jeho
              portfólio.
            </p>
          </div>

          <a
            href="https://www.samuelzeliska.sk/#kontakt"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 lg:mt-0"
          >
            Kontaktovať autora
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-border bg-surface/50 p-5 text-sm leading-6 text-muted">
          <Eye className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p>
            Všetky názvy, opisy a prezentačné prvky na tejto stránke slúžia iba
            na ukážku možného spracovania webu pre klienta.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
