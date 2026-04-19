import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { ImageCard, PrimaryLink, SecondaryLink, SectionIntro, StatPill, VideoCard } from "@/components/ui";
import { brand } from "@/lib/brand";
import {
  branchLocations,
  brandPartners,
  featureVideos,
  featuredGallery,
  featuredStats,
  heroContent,
  ownerStory,
  reviewHighlights,
  serviceCategories,
  transformations,
  whyChooseUs,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Beauty Salon in Wakad & Pimple Gurav",
  description:
    "Redesigned B Tanish Salon homepage featuring real gallery media, services, branch locations, and before-and-after transformations.",
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.98),rgba(248,216,219,0.74),rgba(246,238,232,0.95))]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(140,15,91,0.08),transparent_30%,rgba(239,136,149,0.24)_78%,rgba(255,255,255,0.5))]" />
        <div className="float-ambient absolute -top-24 left-10 h-72 w-72 rounded-full bg-[rgba(239,136,149,0.22)] blur-3xl" />
        <div className="float-ambient absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[rgba(140,15,91,0.14)] blur-3xl [animation-delay:1.5s]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-22">
          <Reveal cascade className="flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.36em] text-[var(--color-primary)] uppercase">{heroContent.eyebrow}</p>
            <h1 className="mt-6 max-w-2xl font-serif text-5xl leading-[1.02] text-[var(--color-foreground)] md:text-7xl">
              {heroContent.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">{heroContent.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryLink href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</PrimaryLink>
              <SecondaryLink href={heroContent.secondaryCta.href}>{heroContent.secondaryCta.label}</SecondaryLink>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {featuredStats.map((stat) => (
                <StatPill key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </Reveal>

          <Reveal className="grid gap-6 lg:grid-cols-[0.74fr_0.26fr]" delay={120} variant="right">
            <div className="surface-glow relative min-h-[34rem] overflow-hidden rounded-[2.6rem] border border-white/70 shadow-[0_40px_120px_rgba(96,27,68,0.18)]">
              <Image
                src="/Btanish/Interior/12.png"
                alt="Interior of B Tanish Salon"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(27,11,21,0.7),transparent_52%)]" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="text-xs font-semibold tracking-[0.34em] text-[var(--color-accent)] uppercase">The salon</p>
                <p className="mt-3 font-serif text-3xl">Trend-aware beauty service backed by hygiene, consultation, and comfort.</p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="surface-glow rounded-[2rem] border border-white/70 bg-white/84 p-5 shadow-[0_24px_80px_rgba(96,27,68,0.08)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-[var(--color-panel)]">
                  <Image loading="eager" src={brand.ownerImage} alt="Ravindra Giramkar at B Tanish Salon" fill sizes="20vw" className="object-cover" />
                </div>
                <p className="mt-4 text-xs font-semibold tracking-[0.28em] text-[var(--color-secondary)] uppercase">Founder story</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Ravindra Giramkar brings 18+ years of beauty industry experience to the B Tanish journey.
                </p>
              </div>
              <div className="surface-glow overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_24px_80px_rgba(96,27,68,0.08)]">
                <video autoPlay muted loop playsInline className="aspect-[4/5] w-full object-cover">
                  <source src={featureVideos[0].src} type="video/mp4" />
                </video>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.46fr_0.54fr] lg:items-center">
          <Reveal variant="left">
            <div className="surface-glow relative overflow-hidden rounded-[2.5rem] border border-[color:var(--color-border)] bg-white shadow-[0_24px_80px_rgba(96,27,68,0.08)]">
              <Image
                loading="eager"
                src={brand.ownerImage}
                alt="Ravindra Giramkar inside B Tanish Salon"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} variant="right">
            <div>
              <SectionIntro eyebrow={ownerStory.eyebrow} title={ownerStory.title} description={ownerStory.description} />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {whyChooseUs.map((item, index) => (
                  <Reveal key={item.title} delay={index * 80}>
                    <article className="surface-glow rounded-[1.8rem] border border-[color:var(--color-border)] bg-white p-6 shadow-[0_18px_55px_rgba(96,27,68,0.05)]">
                      <h3 className="font-serif text-2xl text-[var(--color-foreground)]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-panel)] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionIntro
            eyebrow="All services under one roof"
            title="Hair, skin, nail care, and make-up shaped around real client needs."
            description="The original B Tanish site presents a complete salon experience, from cuts and colour to facials, nail services, and beauty finishing across both Pune branches."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {serviceCategories.map((category, index) => (
              <Reveal key={category.id} delay={index * 80}>
                <article className="surface-glow overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_24px_80px_rgba(96,27,68,0.08)]">
                  <div className="relative h-72">
                    <Image src={category.image} alt={category.name} fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover" />
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold tracking-[0.28em] text-[var(--color-secondary)] uppercase">{category.icon}</p>
                      <p className="text-xs font-semibold tracking-[0.28em] text-[var(--color-primary)] uppercase">{category.name}</p>
                    </div>
                    <h3 className="font-serif text-3xl text-[var(--color-foreground)]">{category.name}</h3>
                    <p className="text-sm leading-7 text-[var(--color-muted)]">{category.summary}</p>
                    <ul className="space-y-2 text-sm text-[var(--color-foreground)]">
                      {category.highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-[var(--color-secondary)]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Gallery preview"
            title="Real salon imagery from the B Tanish floor."
            description="Your local assets now drive the site, replacing generic stock photography with hairstyle, manicure, interior, and transformation images from the actual brand library."
          />
          <Reveal variant="right">
            <SecondaryLink href="/gallery">Explore full gallery</SecondaryLink>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <ImageCard
            image={featuredGallery[0].image}
            alt={featuredGallery[0].alt}
            label={featuredGallery[0].category}
            title={featuredGallery[0].title}
            description={featuredGallery[0].description}
            className="lg:min-h-[32rem]"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredGallery.slice(1, 5).map((item) => (
              <ImageCard
                key={item.title}
                image={item.image}
                alt={item.alt}
                label={item.category}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-background)] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Salon reels"
              title="Video moments that add motion to the experience."
              description="The redesign also uses the local video library so the site feels more like a living salon brand and less like a static brochure."
            />
            <Reveal variant="right">
              <Link href={`https://wa.me/${brand.phones.whatsapp}`} className="text-sm font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase transition duration-300 hover:-translate-y-0.5 hover:text-[var(--color-primary-deep)]">
                Book a visit
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featureVideos.map((video) => (
              <VideoCard key={video.src} src={video.src} title={video.title} description={video.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Transformations"
            title="Before-and-after work that shows visible salon impact."
            description="The transformation section now uses the real `public/Btanish/Transform` media so users can compare authentic results directly on the site."
          />
          <Reveal variant="right">
            <SecondaryLink href="/transformations">See all transformations</SecondaryLink>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {transformations.slice(0, 2).map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <article className="surface-glow rounded-[2rem] border border-[color:var(--color-border)] bg-white p-7 shadow-[0_22px_70px_rgba(96,27,68,0.07)]">
                <p className="text-xs font-semibold tracking-[0.32em] text-[var(--color-secondary)] uppercase">{item.category}</p>
                <h3 className="mt-4 font-serif text-3xl text-[var(--color-foreground)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.details}</p>
                <div className="mt-6 grid gap-4">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                    <Image src={item.beforeImage} alt={`${item.title} before`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                    <Image src={item.afterImage} alt={`${item.title} after`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-panel)] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionIntro
            eyebrow="Brand partners"
            title="Trusted product partners already present in your asset set."
            description="Instead of placeholder brand names, the redesign surfaces the actual partner logos available in `public/Btanish/Brand Partners`."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brandPartners.map((partner, index) => (
              <Reveal key={partner.image} delay={index * 60}>
                <article className="surface-glow flex min-h-36 items-center justify-center rounded-[1.8rem] border border-white/80 bg-white p-6 shadow-[0_16px_50px_rgba(96,27,68,0.05)]">
                  <div className="relative h-18 w-full">
                    <Image src={partner.image} alt={partner.name} fill sizes="220px" className="object-contain" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="Branches and contact"
            title="Visit B Tanish in Wakad or Pimple Gurav."
            description="Both branches, timings, phone numbers, and direction links are taken from the existing live site so visitors can act quickly."
          />
          <div className="grid gap-6">
            {branchLocations.map((branch, index) => (
              <Reveal key={branch.name} delay={index * 100}>
                <article className="surface-glow rounded-[2rem] border border-[color:var(--color-border)] bg-white p-6 shadow-[0_20px_60px_rgba(96,27,68,0.06)]">
                  <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
                    <div className="overflow-hidden rounded-[1.6rem] border border-[color:var(--color-border)]">
                      <iframe
                        title={`${branch.name} map`}
                        src={branch.mapEmbed}
                        className="h-64 w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.32em] text-[var(--color-secondary)] uppercase">{branch.name}</p>
                      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{branch.address}</p>
                      <p className="mt-4 text-sm text-[var(--color-foreground)]">Hours: {branch.hours}</p>
                      <div className="mt-4 space-y-1 text-sm">
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
                        className="mt-5 inline-flex rounded-full bg-[var(--color-secondary)] px-4 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase transition hover:bg-[var(--color-primary)]"
                      >
                        Get Direction
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 lg:px-10">
        <Reveal cascade variant="up" className="mx-auto max-w-7xl">
          <div className="motion-copy rounded-[2.6rem] border border-[color:var(--color-border)] bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-deep))] px-8 py-12 text-white shadow-[0_30px_100px_rgba(96,27,68,0.2)] lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.34em] text-[var(--color-accent)] uppercase">Why clients stay with B Tanish</p>
                <h2 className="mt-4 font-serif text-4xl">A salon experience built around trust, rating momentum, and real-world results.</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {reviewHighlights.map((item, index) => (
                  <Reveal key={item.title} delay={index * 80}>
                    <div className="rounded-[1.6rem] bg-white/10 p-4">
                      <p className="font-serif text-xl">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-white/80">{item.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
