import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/ui";
import { branchLocations, featuredStats, reviewHighlights, whyChooseUs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Visit & Reviews",
  description:
    "See the trust signals, branch details, and review-led experience pillars that shape the redesigned B Tanish Salon website.",
};

export default function TestimonialsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Ratings, trust, and visits"
        title="Why people choose B Tanish, without inventing fake testimonials."
        description="Since the available source material focused on trust signals instead of long written reviews, this page turns the original site's strongest proof points into a clearer visit-and-reviews experience."
      />
      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 70}>
              <article className="surface-glow rounded-[2rem] border border-[color:var(--color-border)] bg-white p-8 shadow-[0_22px_70px_rgba(96,27,68,0.08)]">
                <p className="font-serif text-4xl text-[var(--color-foreground)]">{stat.value}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{stat.label}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {whyChooseUs.concat(reviewHighlights).map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="surface-glow rounded-[2rem] border border-[color:var(--color-border)] bg-[var(--color-panel)] p-8 shadow-[0_22px_70px_rgba(96,27,68,0.05)]">
                <h2 className="font-serif text-3xl text-[var(--color-foreground)]">{item.title}</h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-panel)] py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.34em] text-[var(--color-secondary)] uppercase">Plan your visit</p>
            <h2 className="mt-4 font-serif text-4xl text-[var(--color-foreground)]">Use the right branch, call directly, and head out with clear timing info.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {branchLocations.map((branch, index) => (
              <Reveal key={branch.name} delay={index * 100}>
                <article className="surface-glow rounded-[2rem] border border-white/80 bg-white p-8 shadow-[0_20px_60px_rgba(96,27,68,0.06)]">
                  <p className="text-xs font-semibold tracking-[0.32em] text-[var(--color-secondary)] uppercase">{branch.name}</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{branch.address}</p>
                  <p className="mt-4 text-sm text-[var(--color-foreground)]">Hours: {branch.hours}</p>
                  <div className="mt-4 space-y-2 text-sm">
                    {branch.phones.map((phone) => (
                      <a key={phone} href={`tel:${phone}`} className="block text-[var(--color-foreground)] transition hover:text-[var(--color-primary)]">
                        {phone}
                      </a>
                    ))}
                  </div>
                  <a
                    href={branch.directionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex rounded-full bg-[var(--color-primary)] px-5 py-3 text-xs font-semibold tracking-[0.24em] text-white uppercase transition hover:bg-[var(--color-primary-deep)]"
                  >
                    Get Direction
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
