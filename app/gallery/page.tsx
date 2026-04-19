import type { Metadata } from "next";

import { GalleryFilter } from "@/components/gallery-filter";
import { PageHero, VideoCard } from "@/components/ui";
import { featureVideos, featuredGallery } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the B Tanish gallery using real hairstyle, manicure, interior, transformation, and video assets from the salon library.",
};

export default function GalleryPage() {
  return (
    <div>
      <PageHero
        eyebrow="Real work and spaces"
        title="A gallery built from the actual B Tanish asset library."
        description="The redesign replaces stock visuals with real hairstyle, manicure, salon interior, and transformation imagery, plus the local video set."
      />
      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <GalleryFilter items={featuredGallery} />
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
