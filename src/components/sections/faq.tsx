import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Do I need Python, a CLI, or any setup?',
    a: 'No. SnapVault is a native desktop app — install it, point it at your export, and go. FFmpeg and ExifTool ship bundled on macOS and Windows; on Linux you’ll install FFmpeg with your package manager once.',
  },
  {
    q: 'Is any of my data uploaded anywhere?',
    a: 'No. SnapVault never uploads anything you process. Modern zip exports run entirely offline; the older link-based export needs to download each memory directly from Snapchat’s own servers (the same links your export gave you), but nothing you process is ever sent anywhere else. The entire pipeline is open source, so you can verify this yourself rather than take our word for it.',
  },
  {
    q: 'Why don’t my exported memories have the right date or location?',
    a: 'Snapchat strips the original capture date and GPS metadata during export and stamps files with a bare date only — no time, no coordinates. SnapVault recovers what it can from data still present in the export itself; see “How does the GPS/time recovery work?” below for the mechanism.',
  },
  {
    q: 'How does the GPS/time recovery actually work?',
    a: 'Your export’s filenames only carry a date. But each file’s exact capture timestamp is stored inside the zip archive’s own extended-timestamp metadata. SnapVault matches that timestamp against your memories_history.json — if it finds a clean, unambiguous match, it recovers the full time and GPS. If two records collide, it leaves GPS off rather than guess wrong.',
  },
  {
    q: 'Will my restored files show up correctly in Google Photos or Apple Photos?',
    a: 'Yes. SnapVault writes real EXIF date and GPS metadata into the files themselves, so photo library apps that read EXIF will place them chronologically and on the map correctly, the same as any camera photo.',
  },
  {
    q: 'What about My Eyes Only memories?',
    a: 'Snapchat’s own data export doesn’t include My Eyes Only content — it lives in a separate, password-protected vault. That’s a limitation of what Snapchat exports, not something any tool can work around. If you want those memories included, move them out of My Eyes Only before requesting your export.',
  },
  {
    q: 'What happens if some memories fail to process?',
    a: 'Occasionally a memory referenced in your export history no longer exists (deleted content, an expired link, etc.). SnapVault skips items it can’t recover and keeps going — check the log panel after a run to see exactly what was skipped and why.',
  },
  {
    q: 'Which export format does it support?',
    a: 'Both. Modern Snapchat exports arrive as multiple zip archives (recommended, and what most new exports look like) — SnapVault also supports the older link-based HTML/JSON export for anyone still holding on to one.',
  },
  {
    q: 'Is this affiliated with Snapchat?',
    a: 'No. SnapVault is an independent, community-built open-source project. It isn’t affiliated with, endorsed by, or connected to Snap Inc.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-14">
      <div className="mx-auto mb-11 max-w-[620px] text-center">
        <div className="flex justify-center font-mono text-xs font-medium uppercase tracking-wider text-primary-strong">
          Questions
        </div>
        <h2 className="mt-3.5 text-[32px] font-bold">Before you export</h2>
      </div>

      <Accordion type="single" collapsible className="mx-auto flex max-w-[760px] flex-col gap-3">
        {faqs.map((item) => (
          <AccordionItem key={item.q} value={item.q}>
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
