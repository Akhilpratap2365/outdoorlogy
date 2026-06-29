import { createFileRoute, Link } from "@tanstack/react-router";
import { Route as MapRoute, Map, Mountain, Sparkles, Compass, Camera, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

const iconMap = { Route: MapRoute, Map, Mountain, Sparkles, Compass, Camera } as const;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Outdoorlogy" },
      { name: "description", content: "Travel planning, custom itineraries, adventure tours, luxury vacations, solo travel guidance and travel photography." },
      { property: "og:title", content: "Outdoorlogy Services" },
      { property: "og:description", content: "End-to-end travel design, from quiet retreats to high-altitude expeditions." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <section className="bg-gradient-to-b from-secondary/50 to-background pb-24 pt-44">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we do"
          title="Six ways we craft a journey."
          description="From a weekend reset to a six-month sabbatical — we design, plan, and quietly run the show."
          align="center"
        />

        <div className="mt-20 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <div key={s.title} className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-card px-6 py-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--gradient-sunset)] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-30" />
                <div className="relative flex-1">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 text-white shadow-soft">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-sm uppercase tracking-[0.24em] text-gray-500">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-gray-600">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 px-7 py-4 text-base font-semibold text-black shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Tell us your dream trip <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}