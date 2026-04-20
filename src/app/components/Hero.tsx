"use client";

import Image from "next/image";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-dots overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold-brand/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="order-2 lg:order-1">
            {/* Role tag */}
            <div className="inline-flex items-center gap-2 bg-teal-brand/10 border border-teal-brand/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-teal-brand rounded-full animate-pulse" />
              <span className="text-teal-brand text-sm font-medium tracking-wide">
                AI Product Builder · Financial Intelligence Specialist
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
              Adetunji
              <br />
              <span className="gradient-text">Adeniran</span>
            </h1>

            <p className="text-gold-brand text-xl lg:text-2xl font-semibold mb-6 leading-snug">
              Building AI systems that help people
              <br />
              deliver measurable financial outcomes.
            </p>

            <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10 max-w-lg">
              I operate at the intersection of AI, finance, and product strategy.
              Through CentWise Technologies, I partner with startups and
              community organizations in Ontario to design AI-powered systems that
              deliver measurable financial outcomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#services")}
                className="bg-teal-brand text-[#0C1B2E] font-bold text-base px-8 py-3.5 rounded-full hover:bg-teal-light transition-all duration-200 hover:shadow-xl hover:shadow-teal-brand/30 hover:-translate-y-0.5"
              >
                See My Work →
              </button>
              <button
                onClick={() => scrollTo("#centwiseai")}
                className="border border-teal-brand/50 text-teal-brand font-semibold text-base px-8 py-3.5 rounded-full hover:bg-teal-brand/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                Meet CentWiseAI →
              </button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { val: "3+", label: "AI Products Shipped" },
                { val: "Ontario", label: "Market Focus" },
                { val: "100%", label: "Founder-Direct" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-teal-brand">{stat.val}</p>
                  <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Avatar */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-brand/30 to-gold-brand/20 blur-2xl scale-110" />
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-2 border-teal-brand/30 overflow-hidden bg-[#112240] animate-float">
                <Image
                  src="/images/adetunji.jpg"
                  alt="Adetunji Adeniran"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#112240] border border-teal-brand/30 rounded-2xl px-4 py-2.5 shadow-xl">
                <p className="text-xs text-white/50">Founder</p>
                <p className="text-teal-brand font-bold text-sm">CentWiseAI</p>
              </div>
              {/* Crown accent */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-gold-brand text-3xl drop-shadow-lg">
                👑
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollTo("#about")}
            className="flex flex-col items-center gap-2 text-white/30 hover:text-teal-brand transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </button>
        </div>
      </div>
    </section>
  );
}
