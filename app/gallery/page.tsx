import type { Metadata } from "next";

import { GalleryFilter } from "@/components/gallery-filter";
import { PageHero, VideoCard } from "@/components/ui";
import { getBtanishGalleryItems } from "@/lib/gallery-library";
import { featureVideos } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the B Tanish gallery using real hairstyle, manicure, interior, transformation, and video assets from the salon library.",
};

export default async function GalleryPage() {
  const galleryItems = await getBtanishGalleryItems();

  return (
    <div>
      <PageHero
        eyebrow="Real work and spaces"
        title="Every B Tanish image in the local library, gathered in one gallery."
        description="This page now scans `public/Btanish` directly, so hairstyle, manicure, interiors, transformations, brand assets, and partner visuals all render here automatically."
      />
      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <GalleryFilter items={galleryItems} />
      </section>
      <section className="bg-[var(--color-panel)] py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.34em] text-[var(--color-secondary)] uppercase">Video highlights</p>
            <h2 className="mt-4 font-serif text-4xl text-[var(--color-foreground)]">Motion makes the gallery feel like the salon floor.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featureVideos.map((video) => (
              <VideoCard key={video.src} src={video.src} title={video.title} description={video.description} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
