import { createFileRoute } from "@tanstack/react-router";
import { images, stats, testimonials } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";
import { Mountain, Heart, Leaf, Quote } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Outdoorlogy" },
      { name: "description", content: "Outdoorlogy is a travel design studio building thoughtful, magazine-grade journeys since 2014." },
      { property: "og:title", content: "About Outdoorlogy" },
      { property: "og:description", content: "A travel design studio building thoughtful, magazine-grade journeys since 2014." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A travel studio, not a travel agency."
        description="We started Outdoorlogy in 2014 with a single belief: the best trips feel personal. A decade and 120 destinations later, that's still the only rule."
        image={images.aboutStory}
      />

      <section className="container-page py-24">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Mission & Vision" title="To make the world feel a little bigger, and a lot more reachable." />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We design journeys that respect the places they visit, the people who live there, and the traveler doing the visiting. Less spectacle, more substance.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              By 2030, our goal is for every Outdoorlogy trip to be carbon-balanced and locally-sourced — from the guides to the dal on the table.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { Icon: Mountain, title: "Adventure, curated", text: "Bigger horizons, smarter planning, zero busywork." },
              { Icon: Heart, title: "Hospitality first", text: "We answer every email like you're already family." },
              { Icon: Leaf, title: "Slow & sustainable", text: "Local partners, fair pay, low footprints." },
              { Icon: Quote, title: "Honest storytelling", text: "We tell you what worked. And what didn't." },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-forest"><Icon className="h-5 w-5" /></span>
                <h4 className="mt-5 text-lg font-semibold">{title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--gradient-forest)] py-24 text-white">
        <div className="container-page">
          <SectionHeading eyebrow="By the numbers" title="A decade of carefully made trips." light align="center" />
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-5xl font-bold text-forest-deep md:text-6xl">{s.value}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-widest text-forest-deep">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <SectionHeading eyebrow="Reviews" title="What travelers say" align="center" />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border bg-card p-8 shadow-card">
              <Quote className="h-8 w-8 text-accent" />
              <blockquote className="mt-4 text-lg leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--gradient-forest)] font-bold text-white">{t.avatar}</span>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.trip}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

function PageHero({ eyebrow, title, description, image }: { eyebrow: string; title: string; description: string; image: string }) {
  return (
    <section className="relative h-[68vh] min-h-[480px] w-full overflow-hidden">
      <img src={image} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />
      <div className="container-page relative flex h-full flex-col justify-end pb-16 pt-40 text-white">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {eyebrow}
          </span>
          <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.02] sm:text-6xl md:text-7xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">{description}</p>
        </div>
      </div>
    </section>
  );
}