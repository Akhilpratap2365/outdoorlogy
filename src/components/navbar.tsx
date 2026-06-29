import { Link } from "@tanstack/react-router";
import { Menu, X, Compass } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/blog", label: "Blog" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`container-page flex items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "glass-light border-border/40 shadow-soft"
            : "border-white/20 bg-white/5 backdrop-blur-md text-foreground"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className={`grid h-9 w-9 place-items-center rounded-full ${scrolled ? "bg-primary text-primary-foreground" : "bg-white/15 text-foreground"}`}>
            <Compass className="h-5 w-5" />
          </span>
          <span className={scrolled ? "text-foreground" : "text-foreground"}>Outdoorlogy</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-white/10 ${scrolled ? "text-foreground/80 hover:bg-secondary hover:text-foreground" : "text-foreground/90"}`}
              activeProps={{ className: scrolled ? "bg-secondary text-foreground" : "bg-white/15 text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/packages"
            className="inline-flex items-center rounded-full bg-[var(--gradient-sunset)] px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
          >
            Book a Trip
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className={`grid h-10 w-10 place-items-center rounded-full lg:hidden ${scrolled ? "bg-secondary text-foreground" : "bg-white/15 text-foreground"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="container-page mt-2 rounded-3xl border border-border/40 bg-card p-4 shadow-soft lg:hidden animate-fade-in">
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground/90 hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/packages"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--gradient-sunset)] px-5 py-3 text-sm font-semibold text-white"
            >
              Book a Trip
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}