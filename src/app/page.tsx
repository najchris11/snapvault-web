import { Nav } from '@/components/nav';
import { Hero } from '@/components/sections/hero';
import { TutorialTeaser } from '@/components/sections/tutorial-teaser';
import { Problem } from '@/components/sections/problem';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Features } from '@/components/sections/features';
import { Trust } from '@/components/sections/trust';
import { Platforms } from '@/components/sections/platforms';
import { Faq } from '@/components/sections/faq';
import { Cta } from '@/components/sections/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(1200px 600px at 15% -10%, hsl(var(--primary) / 0.16), transparent 60%), radial-gradient(900px 500px at 85% 0%, hsl(var(--info) / 0.10), transparent 55%)',
        }}
      />
      <Nav />
      <main className="mx-auto max-w-[1120px] px-6">
        <Hero />
        <TutorialTeaser />
        <Problem />
        <HowItWorks />
        <Features />
        <Trust />
        <Platforms />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
