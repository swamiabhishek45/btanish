import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { TransformationSlider } from "@/components/transformation-slider";
import { PageHero } from "@/components/ui";
import { transformations } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Transformations",
  description:
    "Compare before-and-after B Tanish transformations using the real image sets provided in the local project assets.",
};

export default function TransformationsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Before and after"
        title="Real B Tanish transformations, now using the actual comparison assets."
        description="Each slider on this page is driven by the transformation folders in `public/Btanish/Transform`, replacing the previous placeholder imagery."
      />
      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <div className="grid gap-12">
          {transformations.map((transformation, index) => (
            <Reveal key={transformation.title} className="space-y-6" delay={index * 120}>
              <article className="space-y-6">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold tracking-[0.32em] text-[var(--color-secondary)] uppercase">{transformation.category}</p>
                  <h2 className="mt-4 font-serif text-4xl text-[var(--color-foreground)]">{transformation.title}</h2>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{transformation.details}</p>
                </div>
                <TransformationSlider transformation={transformation} />
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
