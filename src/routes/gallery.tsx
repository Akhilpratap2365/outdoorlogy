import { createFileRoute } from "@tanstack/react-router";
import { galleryImages } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Outdoorlogy" },
      { name: "description", content: "A visual archive of mountains, oceans, deserts and quiet corners we've been lucky enough to walk through." },
      { property: "og:title", content: "Outdoorlogy Gallery" },
      { property: "og:description", content: "A visual archive of our favorite places." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-secondary/50 to-background pb-12 pt-40">
        <div className="container-page">
          <SectionHeading eyebrow="Gallery" title="A visual archive of the road." description="Hover for a closer look." />
        </div>
      </section>

      <section className="container-page pb-28">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {galleryImages.map((img, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-3xl shadow-card">
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute inset-x-5 bottom-5 translate-y-3 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-widest text-white/70">Frame · {String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1 font-display text-xl font-semibold">{img.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}