"use client";

import Image from "next/image";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import type { GalleryItem } from "@/lib/site-data";

export function GalleryFilter({ items }: { items: GalleryItem[] }) {
  const categories = [
    "All",
    ...Array.from(new Set(items.map((item) => item.category))).sort((left, right) =>
      left.localeCompare(right, undefined, { numeric: true, sensitivity: "base" }),
    ),
  ];
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filteredItems = active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => {
          const isActive = category === active;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-5 py-3 text-xs font-semibold tracking-[0.24em] uppercase transition duration-300 ${
                isActive
                  ? "bg-[var(--color-primary)] text-white shadow-[0_18px_40px_rgba(96,27,68,0.18)]"
                  : "border border-[color:var(--color-border-strong)] bg-white text-[var(--color-foreground)] hover:-translate-y-0.5 hover:border-[var(--color-secondary)] hover:text-[var(--color-primary)]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item, index) => (
          <Reveal key={`${item.title}-${item.category}`} delay={index * 30} variant="zoom" cascade className="h-full">
            <article className="surface-glow group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-white shadow-[0_22px_70px_rgba(96,27,68,0.08)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(27,11,21,0.58),transparent_50%)]" />
              </div>
              <div className="motion-copy flex flex-1 flex-col space-y-3 p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold tracking-[0.32em] text-[var(--color-secondary)] uppercase">{item.category}</p>
                  <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-[var(--color-muted)] uppercase">B Tanish</p>
                </div>
                <h3 className="font-serif text-2xl text-[var(--color-foreground)]">{item.title}</h3>
                <p className="text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
