import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntroProps) {
  return (
    <Reveal cascade className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold tracking-[0.34em] text-[var(--color-secondary)] uppercase">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-[var(--color-foreground)] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--color-muted)] md:text-lg">{description}</p>
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--color-border)] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.98),rgba(248,216,219,0.6),rgba(246,238,232,0.92))]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(140,15,91,0.1),transparent_35%,rgba(239,136,149,0.22)_100%)]" />
      <div className="float-ambient absolute left-0 top-0 h-72 w-72 rounded-full bg-[rgba(140,15,91,0.12)] blur-3xl" />
      <div className="float-ambient absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[rgba(239,136,149,0.18)] blur-3xl [animation-delay:1.2s]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} />
      </div>
    </section>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-xs font-semibold tracking-[0.24em] text-white uppercase transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[var(--color-primary-deep)] hover:shadow-[0_18px_36px_rgba(93,10,61,0.28)]"
    >
      {children}
    </Link>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full border border-[color:var(--color-border-strong)] bg-white/80 px-6 py-3 text-xs font-semibold tracking-[0.24em] text-[var(--color-foreground)] uppercase transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-[var(--color-secondary)] hover:bg-white hover:shadow-[0_16px_28px_rgba(96,27,68,0.1)]"
    >
      {children}
    </Link>
  );
}

export function ImageCard({
  image,
  alt,
  label,
  title,
  description,
  className = "",
  imageWrapperClassName = "",
}: {
  image: string;
  alt: string;
  label: string;
  title: string;
  description: string;
  className?: string;
  imageWrapperClassName?: string;
}) {
  return (
    <Reveal cascade variant="zoom">
      <article
        className={`surface-glow group overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-white shadow-[0_24px_80px_rgba(96,27,68,0.08)] ${className}`}
      >
        <div className={`relative h-72 overflow-hidden ${imageWrapperClassName}`}>
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(27,11,21,0.42),transparent_50%)]" />
        </div>
        <div className="motion-copy space-y-3 p-6">
          <p className="text-xs font-semibold tracking-[0.32em] text-[var(--color-secondary)] uppercase">
            {label}
          </p>
          <h3 className="font-serif text-2xl text-[var(--color-foreground)]">
            {title}
          </h3>
          <p className="text-sm leading-7 text-[var(--color-muted)]">
            {description}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <Reveal cascade variant="zoom">
      <div className="surface-glow rounded-[1.8rem] border border-white/70 bg-white/86 p-5 shadow-[0_18px_50px_rgba(96,27,68,0.08)]">
        <p className="font-serif text-3xl text-[var(--color-foreground)]">{value}</p>
        <p className="mt-2 text-sm text-[var(--color-muted)]">{label}</p>
      </div>
    </Reveal>
  );
}

export function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-[var(--color-secondary)]" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
}

export function VideoCard({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal cascade variant="zoom">
      <article className="surface-glow overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-[var(--color-panel)] shadow-[0_24px_80px_rgba(96,27,68,0.08)]">
        <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-foreground)]">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]">
            <source src={src} type="video/mp4" />
          </video>
        </div>
        <div className="motion-copy space-y-3 p-6">
          <p className="text-xs font-semibold tracking-[0.32em] text-[var(--color-secondary)] uppercase">Salon reel</p>
          <h3 className="font-serif text-2xl text-[var(--color-foreground)]">{title}</h3>
          <p className="text-sm leading-7 text-[var(--color-muted)]">{description}</p>
        </div>
      </article>
    </Reveal>
  );
}
