import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Clock, MapPin, Check, ArrowRight } from "lucide-react";
import { packages } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Tour Packages — Outdoorlogy" },
      { name: "description", content: "Four flagship Outdoorlogy journeys: Himalayan trekking, Goa beach escape, Rajasthan heritage and Kerala nature retreat." },
      { property: "og:title", content: "Outdoorlogy Tour Packages" },
      { property: "og:description", content: "Flagship curated trips across India — handcrafted itineraries, fair pricing." },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-secondary/50 to-background pb-16 pt-40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Flagship Journeys"
            title="Four trips. Four different versions of you when you get home."
            description="Each package is built around a feeling, refined for years, and quietly impossible to copy."
          />
        </div>
      </section>

      <section className="container-page space-y-16 pb-28">
        {packages.map((p, i) => (
          <article key={p.slug} className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="overflow-hidden rounded-[2rem] shadow-card">
                <img src={p.image} alt={p.title} width={1200} height={1500} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="glass-light absolute -bottom-6 left-6 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-soft">
                <Star className="h-4 w-4 fill-accent text-accent" /> {p.rating} · 248 reviews
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-forest">
                <MapPin className="h-3 w-3" /> {p.region}
              </div>
              <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-tight md:text-5xl">{p.title}</h2>
              <p className="mt-4 text-lg italic text-muted-foreground">{p.tagline}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {p.includes.map((inc) => (
                  <div key={inc} className="flex items-center gap-3 rounded-2xl bg-secondary/60 px-4 py-3 text-sm font-medium text-foreground">
                    <Check className="h-4 w-4 text-forest" /> {inc}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-border pt-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Starts at</div>
                  <div className="mt-1 font-display text-4xl font-bold text-forest-deep">₹{p.price.toLocaleString("en-IN")}</div>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="h-4 w-4" /> {p.duration} · all inclusive</div>
                </div>
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-sunset)] px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5">
                  Book Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}