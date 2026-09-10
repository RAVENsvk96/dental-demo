"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
import { HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";

const experienceGoals = [
  {
    icon: ShieldCheck,
    title: "Dôveryhodná prezentácia",
    text: "Pokojný vizuálny štýl a jasná hierarchia pomáhajú návštevníkovi rýchlo sa zorientovať.",
  },
  {
    icon: MessageCircle,
    title: "Zrozumiteľné informácie",
    text: "Služby a dôležité odpovede sú usporiadané tak, aby boli ľahko dostupné na každom zariadení.",
  },
  {
    icon: HeartHandshake,
    title: "Príjemná používateľská skúsenosť",
    text: "Návrh ukazuje, ako môže moderný web pôsobiť profesionálne, ľudsky a bez zbytočného chaosu.",
  },
];

export default function Reviews() {
  return (
    <section id="recenzie" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          badge="Ciele návrhu"
          title="Web navrhnutý s dôrazom na dôveru"
          description="Táto sekcia predstavuje dizajnové a používateľské ciele demo projektu. Neobsahuje recenzie skutočných pacientov."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {experienceGoals.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[1.5rem] border border-border bg-surface/70 p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
