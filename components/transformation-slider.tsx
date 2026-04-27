"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/reveal";
import type { Transformation } from "@/lib/site-data";

export function TransformationSlider({
  transformation,
}: {
  transformation: Transformation;
}) {
  const [position, setPosition] = useState(52);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const updatePosition = (clientX: number) => {
    const frame = frameRef.current;

    if (!frame) {
      return;
    }

    const rect = frame.getBoundingClientRect();
    const nextValue = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(10, Math.min(90, nextValue));

    setPosition(clamped);
  };

  useEffect(() => {
    if (!dragging) {
      return;
    }

    function handlePointerMove(event: PointerEvent) {
      updatePosition(event.clientX);
    }

    function handlePointerUp() {
      setDragging(false);
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [dragging]);

  return (
    <div className="space-y-5">
      <Reveal variant="zoom">
        <div className="surface-glow relative overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-[var(--color-panel)] shadow-[0_30px_90px_rgba(96,27,68,0.1)]">
          <div
            ref={frameRef}
            className="relative h-[520px] touch-none sm:h-[620px]"
          >
            <Image
              src={transformation.beforeImage}
              alt={`${transformation.title} before`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 0 0 ${position}%)` }}
            >
              <Image
                src={transformation.afterImage}
                alt={`${transformation.title} after`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            <div
              className="absolute top-0 bottom-0 z-20 w-px bg-white/90 shadow-[0_0_0_1px_rgba(140,15,91,0.18),0_0_24px_rgba(255,255,255,0.6)]"
              style={{ left: `${position}%` }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 z-10 w-[4.5rem] bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent)]"
              style={{ left: `calc(${position}% - 2.25rem)` }}
            >
              <button
                type="button"
                aria-label={`Drag to compare before and after for ${transformation.title}`}
                onPointerDown={(event) => {
                  updatePosition(event.clientX);
                  setDragging(true);
                }}
                onKeyDown={(event) => {
                  if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    setPosition((current) => Math.max(10, current - 4));
                  }

                  if (event.key === "ArrowRight") {
                    event.preventDefault();
                    setPosition((current) => Math.min(90, current + 4));
                  }
                }}
                className="pointer-events-auto absolute top-1/2 left-1/2 z-30 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-white/85 bg-white text-[var(--color-primary)] shadow-[0_16px_38px_rgba(27,11,21,0.24)] transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/80"
              >
                <span className="flex items-center gap-1 text-[0.6rem] leading-none">
                  <span>‹</span>
                  <span className="h-3.5 w-px bg-[var(--color-primary)]/35" />
                  <span>›</span>
                </span>
              </button>
            </div>
            <div className="absolute left-6 top-6 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[var(--color-foreground)] uppercase">
              Before
            </div>
            <div className="absolute right-6 top-6 rounded-full bg-[var(--color-primary)]/88 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-white uppercase">
              After
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal cascade variant="up">
        <div className="motion-copy grid gap-4 rounded-[2rem] border border-[color:var(--color-border)] bg-white p-6 md:grid-cols-[1fr_1fr_auto]">
          <div>
            <p className="text-xs font-semibold tracking-[0.32em] text-[var(--color-secondary)] uppercase">{transformation.beforeLabel}</p>
            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">Starting point reviewed during consultation.</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.32em] text-[var(--color-secondary)] uppercase">{transformation.afterLabel}</p>
            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{transformation.details}</p>
          </div>
          <div className="self-center">
            <p className="rounded-full border border-[color:var(--color-border-strong)] px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[var(--color-foreground)] uppercase">
              Drag the center handle
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
