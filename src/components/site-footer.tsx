import { Link } from "@tanstack/react-router";
import { Compass, Instagram, Youtube, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[var(--gradient-forest)] text-[var(--footer-foreground)]">
      <div className="absolute inset-0 opacity-30" style={{
        background: "radial-gradient(800px 400px at 10% 0%, oklch(0.72 0.18 50 / 0.4), transparent 60%), radial-gradient(600px 400px at 90% 100%, oklch(0.78 0.09 220 / 0.35), transparent 60%)"
      }} />
      <div className="container-page relative grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 text-xl font-display font-bold">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15"><Compass className="h-5 w-5" /></span>
            Outdoorlogy
          </div>
          <p className="mt-4 max-w-xs text-sm text-[var(--footer-foreground-70)]">
            Curated journeys for travelers who chase horizons. Mountains, oceans, forests and forgotten roads — explored beautifully.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Youtube, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Explore" links={[["Home","/"],["About","/about"],["Services","/services"],["Packages","/packages"]]} />
        <FooterCol title="Read & See" links={[["Blog","/blog"],["Gallery","/gallery"],["Testimonials","/about"],["Contact","/contact"]]} />

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--footer-foreground-60)]">Get in touch</h4>
          <ul className="mt-5 space-y-3 text-sm text-[var(--footer-foreground-80)]">
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> H-286 Tedhi Puliya, Lucknow</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0" /> +91 91250 40027</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0" /> tanishqojha75@gmail.com</li>
          </ul>
        </div>
      </div>

        <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-[var(--footer-foreground-60)] sm:flex-row">
          <p>© {new Date().getFullYear()} Outdoorlogy. All rights reserved.</p>
          <p>
            <a href="https://friendly-frangollo-717683.netlify.app/#" target="_blank" rel="noopener noreferrer" className="text-[var(--footer-foreground-80)] hover:underline">designed by Tanishq Ojha</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--footer-foreground-60)]">{title}</h4>
      <ul className="mt-5 space-y-2.5 text-sm">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-[var(--footer-foreground-80)] transition hover:text-[var(--footer-foreground)]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}