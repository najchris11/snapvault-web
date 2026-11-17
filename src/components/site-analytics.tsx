'use client';
import { sanitizedAnalyticsEvent } from '@/lib/analytics';
import { Analytics } from '@vercel/analytics/next';
import { useEffect, useState } from 'react';
export function SiteAnalytics() {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    setAllowed(navigator.doNotTrack !== '1');
  }, []);
  return allowed ? (
    <Analytics beforeSend={(event) => sanitizedAnalyticsEvent(event, navigator.doNotTrack)} />
  ) : null;
}
