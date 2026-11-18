import Link from 'next/link';
import type { Guide } from '@/lib/guides';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

export function GuideArticle({ guide }: { guide: Guide }) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="text-sm text-primary-strong">
          ← SnapVault
        </Link>
        <h1 className="mt-6 text-balance text-4xl font-bold leading-tight">{guide.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{guide.description}</p>
        <p className="mt-3 text-xs text-muted-foreground">
          Reviewed November 6, 2026. Features described may require the latest development build.
        </p>
        {guide.sections.map((section) => (
          <section className="mt-10" key={section.title}>
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <aside className="mt-10 rounded-xl border border-border p-5">
          <h2 className="font-semibold">Sources and further reading</h2>
          <ul className="mt-3 space-y-2">
            {guide.sources.map((source) => (
              <li key={source.url}>
                <a
                  className="text-sm underline"
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <div className="mt-10 flex gap-6">
          <Link className="text-primary-strong underline" href="/#download">
            Choose your installer
          </Link>
          <Link className="underline" href="/tutorial">
            Follow the tutorial
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
