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
    <section className="bg-gradient-to-b from-secondary/50 to-background pb-24 pt-40">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we do"
          title="Six ways we craft a journey."
          description="From a weekend reset to a six-month sabbatical — we design, plan, and quietly run the show."
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <div key={s.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--gradient-sunset)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--gradient-forest)] text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-sunset)] px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5">
            Tell us your dream trip <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}