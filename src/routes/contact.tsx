import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Twitter, Facebook } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Outdoorlogy" },
      { name: "description", content: "Tell us where you've been dreaming of. We reply within 24 hours with a draft itinerary, all-in pricing and zero pressure." },
      { property: "og:title", content: "Contact Outdoorlogy" },
      { property: "og:description", content: "Tell us where you've been dreaming of. We'll plan it." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="bg-gradient-to-b from-secondary/50 to-background pb-12 pt-40">
        <div className="container-page">
          <SectionHeading eyebrow="Get in touch" title="Tell us where you've been dreaming of." description="We reply within 24 hours with a draft itinerary, all-in pricing and zero pressure." />
        </div>
      </section>

      <section className="container-page grid gap-10 pb-20 lg:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="rounded-[2rem] border border-border bg-card p-8 shadow-card md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Your name" name="name" placeholder="Anaya Sharma" />
            <Field label="Email" name="email" type="email" placeholder="you@somewhere.com" />
            <Field label="Destination" name="destination" placeholder="Where to?" />
            <Field label="Travel dates" name="dates" placeholder="e.g. October 2026" />
          </div>
          <div className="mt-5">
            <label htmlFor="msg" className="text-sm font-semibold text-foreground">Tell us about the trip</label>
            <textarea
              id="msg"
              required
              rows={5}
              placeholder="Group size, vibe, must-haves, hard-passes…"
              className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-sunset)] px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" /> Send the brief
          </button>
          {submitted && (
            <p className="mt-4 rounded-2xl bg-secondary/80 px-4 py-3 text-sm text-forest-deep animate-fade-in">
              Thank you — we've got it. Expect a reply within 24 hours.
            </p>
          )}
        </form>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
            <h3 className="font-display text-2xl font-bold">Reach us directly</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-forest" /> H-286 Tedhi Puliya, Lucknow</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-forest" /> +91 91250 40027</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-forest" /> tanishqojha75@gmail.com</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {[Instagram, Youtube, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-forest transition hover:bg-forest hover:text-white">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <iframe
              title="Outdoorlogy on the map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=78.25%2C30.05%2C78.40%2C30.15&amp;layer=mapnik&amp;marker=30.10%2C78.32"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[var(--gradient-forest)] p-7 text-white">
            <h3 className="font-display text-2xl font-bold">Join the newsletter</h3>
            <p className="mt-2 text-sm text-white/75">One short, beautifully-written travel letter a month. No spam, ever.</p>
            <form className="mt-5 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="your@email.com" className="flex-1 rounded-full bg-white/15 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:bg-white/25" />
              <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-forest-deep">Subscribe</button>
            </form>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
      />
    </div>
  );
}