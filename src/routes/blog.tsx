import { createFileRoute } from "@tanstack/react-router";
import { blogPosts } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Travel Blog — Outdoorlogy" },
      { name: "description", content: "Field notes, long-form essays and travel guides. Honest, well-told stories from the road." },
      { property: "og:title", content: "Outdoorlogy — Travel Blog" },
      { property: "og:description", content: "Field notes, long-form essays and travel guides." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <>
      <section className="bg-gradient-to-b from-secondary/50 to-background pb-12 pt-40">
        <div className="container-page">
          <SectionHeading eyebrow="The Field Notes" title="Stories, essays and travel guides." description="Written by people who actually went." />
        </div>
      </section>

      <section className="container-page">
        <article className="group grid gap-10 overflow-hidden rounded-[2rem] border border-border bg-card p-4 shadow-card lg:grid-cols-[1.2fr_1fr] lg:p-6">
          <div className="overflow-hidden rounded-3xl">
            <img src={featured.image} alt={featured.title} width={1200} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--gradient-sunset)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Featured</span>
            <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-tight md:text-5xl">{featured.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{featured.excerpt}</p>
            <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
              <span>{featured.category}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span className="text-muted-foreground">{featured.read} read</span>
            </div>
          </div>
        </article>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article key={post.slug} className="group">
              <div className="overflow-hidden rounded-3xl">
                <img src={post.image} alt={post.title} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
                <span>{post.category}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                <span className="text-muted-foreground">{post.read} read</span>
              </div>
              <h3 className="mt-3 flex items-start justify-between gap-3 text-2xl font-bold leading-snug text-foreground transition-colors group-hover:text-forest">
                <span>{post.title}</span>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-forest" />
              </h3>
              <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}