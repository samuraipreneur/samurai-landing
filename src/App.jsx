export default function SamurAILanding() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-red-500/30 selection:text-neutral-50">
      {/* Subtle Japanese-asanoha background pattern */}
      <svg aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-[0.08]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="asanoha" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="white" strokeWidth="0.5"/>
            <path d="M10 0 L10 20 M0 10 L20 10" stroke="white" strokeWidth="0.4"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#asanoha)" />
      </svg>

      {/* NAV */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <LogoMark />
          <span className="font-semibold tracking-widest text-white/90">SamurAI</span>
        </div>
        <a href="#buy" className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur transition hover:border-red-500/40 hover:bg-red-500/10">
          <span>Get the Edge</span>
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </header>

      {/* HERO */}
      <section className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-8 md:grid-cols-2 md:pb-24 md:pt-14">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            <span className="block">Precision.</span>
            <span className="block">Power.</span>
            <span className="block text-transparent bg-gradient-to-r from-red-500 via-red-400 to-rose-300 bg-clip-text">Presence.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
            SamurAI Beard Oil is engineered for discerning men who demand clean ingredients and decisive results. A fast-absorbing blend of natural oils provides deep hydration, a softer beard, and skin comfort—without the shine or residue.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#buy" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(239,68,68,0.8)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-red-400">
              Get the Edge
            </a>
            <span className="text-xs text-neutral-400">Free shipping on first order</span>
          </div>
        </div>

        {/* Product Image */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 -z-10 blur-3xl" aria-hidden="true">
            <div className="mx-auto h-full w-full rounded-full bg-gradient-to-b from-red-600/30 to-transparent" />
          </div>
          <div className="mx-auto w-full max-w-sm">
            <img src="/images/samurai-beard-oil.png" alt="SamurAI Beard Oil" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold tracking-tight">Why it works</h2>
            <ul className="mt-4 space-y-3 text-neutral-300">
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 flex-none" />
                <span><span className="font-medium text-neutral-100">Natural oils</span> — lightweight argan, jojoba, and grapeseed nourish hair and skin.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 flex-none" />
                <span><span className="font-medium text-neutral-100">Deep hydration</span> — locks in moisture to reduce coarseness and flyaways.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 flex-none" />
                <span><span className="font-medium text-neutral-100">Fast absorption</span> — a clean, non-greasy finish that disappears in seconds.</span>
              </li>
            </ul>
          </div>

          <blockquote className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-lg leading-relaxed text-neutral-200">“Two drops and my beard went from rough to refined. No itch, no shine—just control. The subtle scent feels like stepping into focus.”</p>
            <footer className="mt-4 text-sm text-neutral-400">— Kenji R., product designer</footer>
          </blockquote>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-16">
        <h3 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">Benefits</h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <BenefitCard icon={<FeatherIcon />} title="Softens Beard" desc="Tames coarse hair for a smooth, disciplined finish." />
          <BenefitCard icon={<ShieldIcon />} title="Prevents Itch" desc="Calms dry skin and reduces irritation under the beard." />
          <BenefitCard icon={<TrophyIcon />} title="Smells Like Victory" desc="Clean, modern scent with subtle cedar and yuzu notes." />
        </div>
      </section>

      {/* FEATURED IMAGE SECTIONS */}
      <section className="mx-auto max-w-6xl px-6 pb-10 md:pb-16">
        <div className="space-y-8 md:space-y-10">
          <ImageFeature
            title="Precision Blend, Clean Finish"
            paragraph="Our lightweight oil absorbs fast to soften and condition without residue—leaving beard and skin balanced, comfortable, and camera-ready."
            imageSrc="/images/feature-1.png"
            imageAlt="SamurAI Beard Oil feature image 1"
          />
          <ImageFeature
            title="Hydration That Lasts"
            paragraph="Deep, lasting moisture tames coarseness and flyaways so your beard sits neatly all day."
            imageSrc="/images/feature-2.png"
            imageAlt="SamurAI Beard Oil feature image 2"
            reverse
          />
          <ImageFeature
            title="Subtle, Confident Scent"
            paragraph="Clean modern notes with a hint of cedar and yuzu—refined, never overpowering."
            imageSrc="/images/feature-3.png"
            imageAlt="SamurAI Beard Oil feature image 3"
          />
        </div>
      </section>

      {/* CTA / BUY */}
      <section id="buy" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-neutral-900 to-neutral-800 p-6 md:p-8">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.3fr_1fr]">
            <div>
              <h4 className="text-2xl font-semibold tracking-tight md:text-3xl">Get the Edge</h4>
              <p className="mt-2 max-w-prose text-neutral-300">30 ml • Premium blend • Made with care. Elevate your daily ritual and lead with presence.</p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(239,68,68,0.8)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-red-400">
                  Buy Now — $29
                </button>
                <span className="text-xs text-neutral-400">30‑day satisfaction promise</span>
              </div>
            </div>
            <div className="mx-auto hidden w-full max-w-xs md:block">
              <img src="/images/samurai-beard-oil.png" alt="SamurAI Beard Oil" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <LogoMark className="h-5 w-5" />
            <span>© {new Date().getFullYear()} SamurAI Grooming</span>
          </div>
          <nav className="flex items-center gap-5 text-sm text-neutral-400">
            <a href="#" className="transition hover:text-neutral-200">Twitter</a>
            <a href="#" className="transition hover:text-neutral-200">Instagram</a>
            <a href="#" className="transition hover:text-neutral-200">TikTok</a>
            <a href="#" className="transition hover:text-neutral-200">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

/* -----------------------------
 * Reusable components & icons
 * ----------------------------*/
function ImageFeature({ title, paragraph, imageSrc, imageAlt, reverse = false }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
      <div className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2`}>
        <div className={reverse ? 'md:order-2' : ''}>
          <h4 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h4>
          <p className="mt-2 max-w-prose text-neutral-300">{paragraph}</p>
        </div>
        <div className={reverse ? 'md:order-1' : ''}>
          <div className="relative mx-auto w-full max-w-md rounded-xl bg-neutral-900/40 p-2 ring-1 ring-white/10">
            <img src={imageSrc} alt={imageAlt} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-red-500/40 hover:bg-red-500/5">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-neutral-900/70">
        {icon}
      </div>
      <h4 className="text-lg font-semibold tracking-tight">{title}</h4>
      <p className="mt-1 text-sm text-neutral-300">{desc}</p>
    </div>
  );
}

function LogoMark({ className = "h-6 w-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 12c6-6 12-6 18 0" stroke="currentColor" strokeWidth="1.2" opacity=".6"/>
      <path d="M6 18c4-4 8-4 12 0" stroke="currentColor" strokeWidth="1.2" opacity=".5"/>
      <path d="M12 3l2.2 4.2L19 8l-4.2 2.2L12 14l-2.2-3.8L5 8l4.8-.8L12 3z" fill="currentColor"/>
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function FeatherIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 7c0 6-6 12-12 12H4l8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 7l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 4h10v2a4 4 0 01-4 4h-2A4 4 0 017 6V4z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 8c0 3 2 6 6 6s6-3 6-6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 16h4v3H10z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
