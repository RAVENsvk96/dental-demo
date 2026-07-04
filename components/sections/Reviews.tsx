"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { reviews } from "@/content/review";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Reviews() {
  const featuredReview = reviews[0];
  const otherReviews = reviews.slice(1);

  return (
    <section id="recenzie" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          badge="Recenzie"
          title="Pacienti oceňujú náš pokojný prístup"
          description="Dôvera, komunikácia a komfort sú pre nás rovnako dôležité ako samotné ošetrenie."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-border bg-surface p-8 shadow-2xl shadow-black/20"
          >
            <Quote className="h-10 w-10 text-primary" />

            <div className="mt-6 flex gap-1 text-primary">
              {Array.from({ length: featuredReview.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary" />
              ))}
            </div>

            <p className="mt-6 text-xl leading-9 text-white">
              “{featuredReview.text}”
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-white">
                {featuredReview.name.charAt(0)}
              </div>

              <div>
                <p className="font-semibold text-white">
                  {featuredReview.name}
                </p>
                <p className="text-sm text-muted">Overený pacient</p>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-6">
            {otherReviews.map((review, index) => (
              <motion.article
                key={review.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[1.5rem] border border-border bg-surface/70 p-6"
              >
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary" />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  “{review.text}”
                </p>

                <p className="mt-5 font-semibold text-white">
                  {review.name}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}