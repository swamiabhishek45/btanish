import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { brand } from "@/lib/brand";
import { announcementBar, branchLocations, contactDetails, navigationLinks } from "@/lib/site-data";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium tracking-[0.2em] text-[var(--color-foreground)] uppercase transition duration-300 hover:-translate-y-0.5 hover:text-[var(--color-primary)]"
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="page-enter sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[rgba(255,248,245,0.94)] backdrop-blur-xl">
      <div className="border-b border-[color:var(--color-border)] bg-[var(--color-primary)] px-6 py-2 text-center text-[0.68rem] font-semibold tracking-[0.28em] text-white uppercase lg:px-10">
        {announcementBar}
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-34">
              <Image src={brand.logo} alt={brand.name} fill sizes="136px" className="object-contain object-left" priority />
            </div>
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${contactDetails.email}`}
              className="text-sm text-[var(--color-muted)] transition duration-300 hover:-translate-y-0.5 hover:text-[var(--color-primary)]"
            >
              {contactDetails.email}
            </a>
            <Link
              href={`https://wa.me/${contactDetails.whatsapp}`}
              className="rounded-full bg-[var(--color-secondary)] px-5 py-3 text-xs font-semibold tracking-[0.22em] text-white uppercase transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[var(--color-primary)]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {navigationLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[color:var(--color-border)] bg-[var(--color-panel)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <Reveal cascade className="space-y-6">
          <div className="relative h-16 w-44">
            <Image src={brand.logo} alt={brand.name} fill sizes="176px" className="object-contain object-left" />
          </div>
          <p className="max-w-xl text-base leading-8 text-[var(--color-muted)]">
            B Tanish Salon serves Wakad and Pimple Gurav with hair, skin, nail, and beauty services shaped around consultation, hygiene, and current style.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href={contactDetails.instagram} target="_blank" rel="noreferrer" className="rounded-full border border-[color:var(--color-border-strong)] px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
              Instagram
            </a>
            <a href={contactDetails.facebook} target="_blank" rel="noreferrer" className="rounded-full border border-[color:var(--color-border-strong)] px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
              Facebook
            </a>
            <a href={contactDetails.google} target="_blank" rel="noreferrer" className="rounded-full border border-[color:var(--color-border-strong)] px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
              Google
            </a>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {branchLocations.map((branch, index) => (
            <Reveal key={branch.name} delay={index * 90}>
              <article className="surface-glow rounded-[2rem] border border-[color:var(--color-border)] bg-white p-6 shadow-[0_20px_60px_rgba(96,27,68,0.06)]">
                <p className="text-xs font-semibold tracking-[0.3em] text-[var(--color-secondary)] uppercase">{branch.name}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{branch.address}</p>
                <p className="mt-4 text-sm text-[var(--color-foreground)]">Hours: {branch.hours}</p>
                <div className="mt-4 space-y-1 text-sm text-[var(--color-foreground)]">
                  {branch.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="block transition hover:text-[var(--color-primary)]">
                      {phone}
                    </a>
                  ))}
                </div>
                <a
                  href={branch.directionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase transition hover:bg-[var(--color-primary-deep)]"
                >
                  Get Direction
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="border-t border-[color:var(--color-border)] px-6 py-5 text-center text-sm text-[var(--color-muted)] lg:px-10">
        Copyright © 2025 {brand.name}
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
