'use client';

import { useEffect, useState } from 'react';

// Snap capped free Memories storage at 5GB on Sept 29, 2025. Anything over
// that limit isn't deleted — starting January 2027, Memories older than a
// year that aren't in your oldest 5GB get archived and need a paid plan to
// open, edit, or share. Snap hasn't published an exact day, so this targets
// the start of that month.
// Source: https://help.snapchat.com/hc/en-us/articles/41291271694228-How-do-I-manage-my-Memories-storage
const PAYWALL_START = new Date('2027-01-01T00:00:00Z');

function getRemaining(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining>>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setRemaining(getRemaining(PAYWALL_START));
    const id = setInterval(() => setRemaining(getRemaining(PAYWALL_START)), 1000);
    return () => clearInterval(id);
  }, []);

  // Avoid a hydration mismatch: render nothing time-sensitive until mounted.
  if (!mounted || !remaining) return null;

  const units: [number, string][] = [
    [remaining.days, 'days'],
    [remaining.hours, 'hrs'],
    [remaining.minutes, 'min'],
    [remaining.seconds, 'sec'],
  ];

  return (
    <div className="glass flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl px-5 py-3.5">
      <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warning opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-warning" />
        </span>
        Memories over 5GB move behind a paywall around
      </div>
      <div className="flex items-baseline gap-3 font-mono tabular-nums">
        {units.map(([value, label]) => (
          <div key={label} className="flex items-baseline gap-1">
            <span className="text-lg font-medium text-foreground">
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
