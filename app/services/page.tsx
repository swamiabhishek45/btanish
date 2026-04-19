import Image from "next/image";
import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { PageHero, PrimaryLink } from "@/components/ui";
import { brand } from "@/lib/brand";
import { branchLocations, serviceCategories } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore B Tanish Salon services across hair care, skin care, nail care, and make-up, using the real salon content and media library.",
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Salon services"
        title="All services under one roof, rebuilt with the real B Tanish brand."
        description="This page replaces the placeholder price list with a stronger service overview grounded in the salon's actual categories, branch presence, and media."
      />

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <div className="grid gap-8">
          {serviceCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 90}>
              <article
                id={category.id}
                className="surface-glow overflow-hidden rounded-[2.4rem] border border-[color:var(--color-border)] bg-white shadow-[0_28px_80px_rgba(96,27,68,0.08)]"
              >
                <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
                  <div className="relative min-h-80">
                    <Image src={category.image} alt={category.name} fill sizes="(max-width: 1024px) 100vw, 35vw" className="object-cover" />
                  </div>
                  <div className="p-8 lg:p-10">
                    <p className="text-xs font-semibold tracking-[0.32em] text-[var(--color-secondary)] uppercase">{category.icon}</p>
                    <h2 className="mt-4 font-serif text-4xl text-[var(--color-foreground)]">{category.name}</h2>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">{category.summary}</p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      {category.highlights.map((item) => (
                        <div key={item} className="rounded-[1.4rem] border border-[color:var(--color-border)] bg-[var(--color-panel)] p-5 text-sm leading-7 text-[var(--color-foreground)]">
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <PrimaryLink href={`https://wa.me/${brand.phones.whatsapp}`}>Book Consultation</PrimaryLink>
                      <a
                        href="#branches"
                        className="inline-flex items-center rounded-full border border-[color:var(--color-border-strong)] px-6 py-3 text-xs font-semibold tracking-[0.24em] text-[var(--color-foreground)] uppercase transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                      >
                        View Branches
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="branches" className="bg-[var(--color-panel)] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.34em] text-[var(--color-secondary)] uppercase">Where to book</p>
            <h2 className="mt-4 font-serif text-4xl text-[var(--color-foreground)]">Choose the branch that works best for you.</h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Use the live branch details from the original site to call, message, or get directions right away.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {branchLocations.map((branch, index) => (
              <Reveal key={branch.name} delay={index * 100}>
                <article className="surface-glow rounded-[2rem] border border-[color:var(--color-border)] bg-white p-7 shadow-[0_20px_60px_rgba(96,27,68,0.06)]">
                  <p className="text-xs font-semibold tracking-[0.3em] text-[var(--color-secondary)] uppercase">{branch.name}</p>
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
