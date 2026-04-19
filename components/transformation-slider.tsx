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

  const updatePosition = (clientY: number) => {
    const frame = frameRef.current;

    if (!frame) {
      return;
    }

    const rect = frame.getBoundingClientRect();
    const nextValue = ((clientY - rect.top) / rect.height) * 100;
    const clamped = Math.max(8, Math.min(92, nextValue));

    setPosition(clamped);
  };

  useEffect(() => {
    if (!dragging) {
      return;
    }

    function handlePointerMove(event: PointerEvent) {
      updatePosition(event.clientY);
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
            className="relative h-[520px] cursor-ns-resize touch-none sm:h-[620px]"
            onPointerDown={(event) => {
              updatePosition(event.clientY);
              setDragging(true);
            }}
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
              style={{ clipPath: `inset(${position}% 0 0 0)` }}
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
              className="absolute inset-x-0 h-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
              style={{ top: `${position}%` }}
            >
              <button
                type="button"
                aria-label={`Drag to compare before and after for ${transformation.title}`}
                onPointerDown={(event) => {
                  event.stopPropagation();
                  updatePosition(event.clientY);
                  setDragging(true);
                }}
                className="absolute left-1/2 top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/92 text-[var(--color-primary)] shadow-lg transition hover:scale-105"
              >
                ↕
              </button>
            </div>
            <div className="absolute left-6 top-6 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[var(--color-foreground)] uppercase">
              Before
            </div>
            <div className="absolute left-6 bottom-6 rounded-full bg-[var(--color-primary)]/88 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-white uppercase">
              After
            </div>
            <div className="absolute inset-y-0 right-4 z-20 hidden items-center sm:flex">
              <input
                aria-label={`Compare before and after for ${transformation.title}`}
                type="range"
                min="0"
                max="100"
                value={position}
                onChange={(event) => setPosition(Number(event.target.value))}
                className="luxury-range-vertical"
              />
            </div>
          </div>
          <input
            aria-label={`Compare before and after for ${transformation.title}`}
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            className="luxury-range absolute inset-x-6 bottom-4 z-10 sm:hidden"
          />
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
              Drag Up or Down
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
