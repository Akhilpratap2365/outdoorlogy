import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Clock, Quote } from "lucide-react";
import { images, packages, stats, testimonials, blogPosts } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Outdoorlogy — Explore Beyond Boundaries" },
      { name: "description", content: "Premium curated adventures, custom itineraries and travel storytelling. Mountains, beaches, deserts and forests — explored beautifully." },
      { property: "og:title", content: "Outdoorlogy — Explore Beyond Boundaries" },
      { property: "og:description", content: "Premium curated adventures, custom itineraries and travel storytelling." },
      { property: "og:image", content: "/og-image.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <FeaturedDestinations />
      <SignatureExperience />
      <HomeBlogPreview />
      <HomeTestimonials />
      <CTABand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={images.heroMountain}
        alt="Lone traveler on a Himalayan ridge at sunrise"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="container-page relative flex min-h-[100svh] flex-col justify-end pb-20 pt-40 text-[var(--banner-foreground)]">
        <div className="max-w-3xl">
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[0.98] sm:text-7xl md:text-[5.5rem]">
            Explore Beyond <em className="text-gradient-sunset not-italic">Boundaries</em> with Outdoorlogy
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Curated, thoughtfully designed travel for people who chase ridgelines,
            coral reefs and the quiet roads between. No templates. No tour-bus energy.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/packages"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-sunset)] px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              Explore Packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-base font-semibold text-[var(--banner-foreground)] transition hover:bg-white/15"
            >
              Read the Blog
            </Link>
          </div>
        </div>

        <div className="mt-16 hidden gap-4 md:grid md:grid-cols-3">
          {packages.slice(0, 3).map((p, i) => (
            <div
              key={p.slug}
              className="glass overflow-hidden rounded-3xl p-3 transition-transform hover:-translate-y-1"
              style={{ animation: `float 6s ease-in-out ${i * 0.4}s infinite` }}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between px-2 pb-1 pt-3 text-white">
                <div>
                  <p className="text-sm font-semibold">{p.title}</p>
                  <p className="text-xs text-white/70">{p.region}</p>
                </div>

                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-foreground">
                  {p.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function StatsStrip() {
  return (
    <section className="container-page relative z-10 -mt-12">
      <div className="glass-light grid grid-cols-2 gap-6 rounded-3xl p-8 shadow-soft md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-bold text-forest-deep md:text-5xl">{s.value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedDestinations() {
  return (
    <section className="container-page py-28">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Signature Trips"
          title="Destinations you'll talk about for years"
          description="Four flagship journeys, each designed around a single feeling — awe, ease, wonder, exhale."
        />
        <Link to="/packages" className="group inline-flex items-center gap-2 text-sm font-semibold text-forest">
          View all packages <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((p) => (
          <article key={p.slug} className="group relative overflow-hidden rounded-3xl bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={p.image} alt={p.title} width={1200} height={1500} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-forest-deep">
                <Star className="h-3 w-3 fill-accent text-accent" /> {p.rating}
              </span>
              <div className="absolute inset-x-4 bottom-4 text-white">
                <p className="text-xs font-medium uppercase tracking-widest text-white/70">{p.region}</p>
                <h3 className="mt-1 text-xl font-bold leading-tight">{p.title}</h3>
              </div>
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <div className="text-xs text-muted-foreground">From</div>
                <div className="font-display text-2xl font-bold text-forest-deep">₹{p.price.toLocaleString("en-IN")}</div>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" /> {p.duration}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SignatureExperience() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(900px 500px at 80% 20%, oklch(0.72 0.18 50 / 0.3), transparent 60%)",
        }}
      />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src={images.aboutStory}
              alt="Misty forest mountain road"
              width={1600}
              height={1200}
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -right-4 hidden max-w-xs rounded-3xl bg-white p-5 shadow-xl md:block">
            <div className="text-xs uppercase tracking-widest text-gray-500">
              Our promise
            </div>

            <p className="mt-2 text-base leading-relaxed text-gray-800">
              A trip planned by humans who've already done the road, the trek
              and the awkward border crossing.
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Why Outdoorlogy"
            title="Travel design, the way it should feel"
            description="We build trips like editors build magazines — every detail chosen, nothing filler. From the first email to the last sunset, your journey is in the hands of people who care."
          />

          <ul className="mt-10 space-y-5">
            {[
              [
                "Hand-crafted itineraries",
                "No copy-paste plans. Built around how you actually travel.",
              ],
              [
                "Small groups, big access",
                "Max 12 travelers. Local guides who know the back doors.",
              ],
              [
                "Honest, all-in pricing",
                "No surprise upgrades, no hidden margins. Ever.",
              ],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange-500 font-bold text-white">
                  ✓
                </span>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {t}
                  </h4>

                  <p className="text-gray-600">
                    {d}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HomeBlogPreview() {
  return (
    <section className="container-page py-28">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading eyebrow="The Field Notes" title="Stories from the road" description="Long-form essays, sharp guides and field-tested travel writing." />
        <Link to="/blog" className="group inline-flex items-center gap-2 text-sm font-semibold text-forest">
          Read the blog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {blogPosts.slice(0, 3).map((post) => (
          <article key={post.slug} className="group">
            <div className="overflow-hidden rounded-3xl">
              <img src={post.image} alt={post.title} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
              <span className="text-muted-foreground">{post.read} read</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold leading-snug text-foreground transition-colors group-hover:text-forest">{post.title}</h3>
            <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HomeTestimonials() {
  return (
    <section className="bg-secondary/60 py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Travelers, in their words" title="The reviews we're most proud of" align="center" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex h-full flex-col justify-between rounded-3xl bg-card p-7 shadow-card">
              <Quote className="h-7 w-7 text-accent" />
              <blockquote className="mt-4 leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--gradient-forest)] text-sm font-bold text-white">{t.avatar}</span>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.trip}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


function CTABand() {
  return (
    <section className="container-page py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--gradient-forest)] p-10 md:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />

        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h3 className="text-balance font-display text-3xl font-bold leading-tight md:text-5xl !text-black">
              Let's plan a trip you'll never want to come home from.
            </h3>

            <p className="mt-5 max-w-xl text-lg leading-relaxed !text-black">
              Tell us where you've been dreaming of, and we'll come back with a
              one-of-one itinerary in 48 hours.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--gradient-sunset)] px-7 py-4 text-base font-semibold text-black shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Start planning
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}