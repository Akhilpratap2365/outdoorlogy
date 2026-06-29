import heroMountain from "@/assets/hero-mountain.jpg";
import pkgHimalaya from "@/assets/pkg-himalaya.jpg";
import pkgGoa from "@/assets/pkg-goa.jpg";
import pkgRajasthan from "@/assets/pkg-rajasthan.jpg";
import pkgKerala from "@/assets/pkg-kerala.jpg";
import aboutStory from "@/assets/about-story.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

export const images = {
  heroMountain, aboutStory,
  pkgHimalaya, pkgGoa, pkgRajasthan, pkgKerala,
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
  blog1, blog2, blog3, blog4, blog5, blog6,
};

export const packages = [
  {
    slug: "himalayan-adventure",
    title: "Himalayan Adventure",
    region: "Uttarakhand, India",
    duration: "7 Days",
    price: 18999,
    rating: 4.9,
    image: pkgHimalaya,
    tagline: "Trek, camp and watch dawn break above the clouds.",
    includes: ["High-altitude trekking", "Riverside camping", "Bonfire nights", "Certified guides"],
  },
  {
    slug: "goa-beach-escape",
    title: "Goa Beach Escape",
    region: "South Goa, India",
    duration: "5 Days",
    price: 14999,
    rating: 4.8,
    image: pkgGoa,
    tagline: "Slow mornings, salt air and golden sunset cruises.",
    includes: ["Beach resort stay", "Water sports", "Sunset cruise", "Local food trail"],
  },
  {
    slug: "rajasthan-heritage-tour",
    title: "Rajasthan Heritage Tour",
    region: "Jaisalmer & Jodhpur, India",
    duration: "6 Days",
    price: 21999,
    rating: 4.9,
    image: pkgRajasthan,
    tagline: "Forts of sandstone, dunes of gold, nights under stars.",
    includes: ["Heritage forts", "Desert safari", "Cultural shows", "Boutique haveli stays"],
  },
  {
    slug: "kerala-nature-retreat",
    title: "Kerala Nature Retreat",
    region: "Alleppey & Munnar, India",
    duration: "5 Days",
    price: 19999,
    rating: 4.9,
    image: pkgKerala,
    tagline: "Houseboats, tea estates and an Ayurveda exhale.",
    includes: ["Houseboat cruise", "Tea garden walks", "Ayurveda spa", "Backwater village visit"],
  },
] as const;

export const services = [
  { title: "Travel Planning", desc: "End-to-end concierge — flights, stays, transfers and the small details that matter.", icon: "Route" },
  { title: "Custom Itineraries", desc: "Hand-built day-by-day plans, designed around how you like to travel.", icon: "Map" },
  { title: "Adventure Tours", desc: "Treks, climbs, dives and rafting led by certified expedition guides.", icon: "Mountain" },
  { title: "Luxury Vacations", desc: "Private villas, boutique resorts and slow-luxury escapes worth remembering.", icon: "Sparkles" },
  { title: "Solo Travel Guidance", desc: "Routes, safety, community and confidence — for those who travel alone.", icon: "Compass" },
  { title: "Travel Photography", desc: "Pro photographers along for the journey, so the memories stay sharp.", icon: "Camera" },
] as const;

export const blogPosts = [
  { slug: "hidden-places-india", title: "Top 10 Hidden Places in India", excerpt: "Coves, valleys and villages most maps still pretend don't exist.", image: blog1, category: "Destinations", read: "8 min" },
  { slug: "solo-travel-guide", title: "The Solo Traveler's Field Guide", excerpt: "How to plan, pack and pace a trip that's entirely your own.", image: blog2, category: "Solo Travel", read: "11 min" },
  { slug: "budget-travel-tips", title: "Budget Travel Without the Cliches", excerpt: "Real numbers, real trade-offs, and the receipts to back it up.", image: blog3, category: "Tips", read: "6 min" },
  { slug: "best-adventure-destinations", title: "Best Adventure Destinations of the Decade", excerpt: "From Patagonia's spires to Spiti's silence — where the wild still is.", image: blog4, category: "Adventure", read: "9 min" },
  { slug: "mountain-vs-beach", title: "Mountain vs Beach: An Honest Verdict", excerpt: "We spent a year doing both. Here's what surprised us most.", image: blog5, category: "Essays", read: "7 min" },
  { slug: "packing-essentials", title: "The 12 Packing Essentials We Never Travel Without", excerpt: "After 120 destinations, our kit has earned its place.", image: blog6, category: "Guides", read: "5 min" },
] as const;

export const testimonials = [
  { name: "Ananya Mehta", trip: "Himalayan Adventure", quote: "Felt like a trip designed by people who actually love this. Every detail, even the tea at base camp, was thoughtful.", avatar: "AM" },
  { name: "Rahul Verma", trip: "Rajasthan Heritage", quote: "The havelis, the silence of the dunes, the food — Outdoorlogy gave us a version of Rajasthan we couldn't have found alone.", avatar: "RV" },
  { name: "Sara Iyer", trip: "Kerala Retreat", quote: "I came back lighter. Not metaphorically — literally and metaphorically. Best five days of my year.", avatar: "SI" },
  { name: "Karan Singh", trip: "Goa Escape", quote: "Forget the cliches. Outdoorlogy showed me a Goa of quiet beaches and family-run kitchens. I'm already planning the next one.", avatar: "KS" },
] as const;

export const stats = [
  { value: "5,000+", label: "Travelers Hosted" },
  { value: "120+", label: "Destinations" },
  { value: "98%", label: "Happy Clients" },
  { value: "10+", label: "Years Crafting Trips" },
] as const;

export const galleryImages = [
  { src: gallery1, alt: "Pacific Northwest waterfall", tall: true },
  { src: gallery2, alt: "Maldives overwater bungalows" },
  { src: gallery3, alt: "Cappadocia balloons at sunrise" },
  { src: gallery4, alt: "Aurora over Norwegian fjord", tall: true },
  { src: gallery5, alt: "Cliff sunset" },
  { src: gallery6, alt: "Japanese pagoda and Mt Fuji" },
];