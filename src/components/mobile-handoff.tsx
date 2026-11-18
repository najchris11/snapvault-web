'use client';
import { useState } from 'react';
import { SITE_URL } from '@/lib/site';

export function MobileHandoff() {
  const [message, setMessage] = useState('');
  async function share() {
    try {
      if (navigator.share)
        await navigator.share({
          title: 'Back up your Snapchat Memories with SnapVault',
          url: SITE_URL,
        });
      else {
        await navigator.clipboard.writeText(SITE_URL);
        setMessage('Link copied. Send it to your computer.');
      }
    } catch {
      setMessage('You can use the email link instead.');
    }
  }
  return (
    <aside
      className="glass mt-8 rounded-2xl border border-primary/30 p-5 md:hidden"
      aria-label="Start on your phone"
    >
      <h2 className="text-lg font-semibold">On your phone? Start here.</h2>
      <ol className="mt-3 list-inside list-decimal space-y-3 text-sm text-muted-foreground">
        <li>
          <a
            className="underline"
            href="https://accounts.snapchat.com/v2/download-my-data"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request your Snapchat export
          </a>
          . Choose Memories and all time; wait for Snapchat’s download email.
        </li>
        <li>
          Use SnapVault on your Mac, Windows, or Linux computer to process the downloaded archives.
        </li>
      </ol>
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <a
          className="underline"
          href={`mailto:?subject=${encodeURIComponent('Back up your Snapchat Memories')}&body=${encodeURIComponent(`Open ${SITE_URL} on your computer to download SnapVault. Request your export first: https://accounts.snapchat.com/v2/download-my-data`)}`}
        >
          Email the link to your computer
        </a>
        <button type="button" className="underline" onClick={share}>
          Share link
        </button>
      </div>
      <p role="status" className="mt-2 text-sm">
        {message}
      </p>
    </aside>
  );
}
