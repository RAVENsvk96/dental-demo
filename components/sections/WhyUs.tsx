import SectionHeading from "@/components/layout/SectionHeading";
import { whyUs } from "@/content/whyUs";

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 md:p-10">
        <SectionHeading
          badge={whyUs.badge}
          title={whyUs.title}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyUs.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-transparent bg-zinc-950/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <h3 className="font-semibold text-cyan-500">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}