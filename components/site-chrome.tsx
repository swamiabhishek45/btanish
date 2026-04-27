"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { brand } from "@/lib/brand";
import { announcementBar, branchLocations, contactDetails, navigationLinks } from "@/lib/site-data";

function NavLink({ href, label, onNavigate }: { href: string; label: string; onNavigate?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="text-sm font-medium tracking-[0.2em] text-[var(--color-foreground)] uppercase transition duration-300 hover:-translate-y-0.5 hover:text-[var(--color-primary)]"
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="page-enter sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[rgba(255,248,245,0.94)] backdrop-blur-xl">
      <div className="border-b border-[color:var(--color-border)] bg-[var(--color-primary)] px-6 py-2 text-center text-[0.68rem] font-semibold tracking-[0.28em] text-white uppercase lg:px-10">
        {announcementBar}
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-34">
              <Image src={brand.logo} alt={brand.name} fill sizes="136px" className="object-contain object-left" priority />
            </div>
          </Link>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] bg-white/88 text-[var(--color-foreground)] transition hover:border-[var(--color-secondary)] hover:text-[var(--color-primary)] lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
          <div className="hidden flex-wrap items-center gap-3 lg:flex">
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
        <div
          id="site-navigation"
          className={`${isMenuOpen ? "flex" : "hidden"} flex-col gap-4 rounded-[1.6rem] border border-[color:var(--color-border)] bg-white/90 p-5 shadow-[0_22px_60px_rgba(96,27,68,0.08)] lg:hidden`}
        >
          <nav className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <NavLink key={link.href} {...link} onNavigate={() => setIsMenuOpen(false)} />
            ))}
          </nav>
          <a
            href={`mailto:${contactDetails.email}`}
            className="text-sm text-[var(--color-muted)] transition duration-300 hover:text-[var(--color-primary)]"
          >
            {contactDetails.email}
          </a>
          <Link
            href={`https://wa.me/${contactDetails.whatsapp}`}
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-secondary)] px-5 py-3 text-xs font-semibold tracking-[0.22em] text-white uppercase transition duration-300 hover:bg-[var(--color-primary)]"
          >
            Book Appointment
          </Link>
        </div>
        <nav className="hidden flex-wrap items-center gap-x-6 gap-y-3 lg:flex">
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
      <a
        href={`https://wa.me/${contactDetails.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="floating-whatsapp fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition duration-200 hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-current">
          <path d="M19.05 4.94A9.84 9.84 0 0 0 12.03 2C6.59 2 2.16 6.42 2.16 11.87c0 1.75.46 3.47 1.33 4.99L2 22l5.29-1.39a9.82 9.82 0 0 0 4.72 1.21h.01c5.44 0 9.87-4.43 9.87-9.88a9.8 9.8 0 0 0-2.84-7ZM12.03 20.15h-.01a8.18 8.18 0 0 1-4.16-1.14l-.3-.18-3.14.82.84-3.06-.2-.31a8.2 8.2 0 0 1-1.26-4.41c0-4.52 3.69-8.21 8.23-8.21 2.19 0 4.24.85 5.79 2.4a8.14 8.14 0 0 1 2.4 5.8c0 4.53-3.7 8.22-8.2 8.22Zm4.5-6.12c-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.12-.17.25-.64.81-.79.98-.15.17-.29.19-.54.07-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.37-1.7-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.47-.4-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.91 2.44 1.04 2.61.13.17 1.77 2.7 4.28 3.78.6.26 1.07.42 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.17.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.29Z" />
        </svg>
      </a>
      <SiteFooter />
    </>
  );
}
