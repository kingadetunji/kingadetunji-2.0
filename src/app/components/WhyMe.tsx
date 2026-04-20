const differentiators = [
  {
    icon: "🎯",
    title: "Product-first mindset",
    desc: "I think about users and business impact before I touch a keyboard.",
  },
  {
    icon: "🧠",
    title: "Finance + technology fluency",
    desc: "A rare combination, powerful in practice. I speak both languages.",
  },
  {
    icon: "✅",
    title: "Proven track record",
    desc: "Live products, real users, measurable savings — not just demos.",
  },
  {
    icon: "📍",
    title: "Ontario-based, community-focused",
    desc: "I understand the market I build for. Local insight drives better outcomes.",
  },
  {
    icon: "🤝",
    title: "Transparent, founder-friendly",
    desc: "No agency overhead, no middlemen. Direct access to me.",
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="py-24 bg-[#112240]/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
          <div>
            <p className="text-teal-brand text-sm font-semibold tracking-widest uppercase mb-3">
              06 · Why Work With Me
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">The Difference</h2>
            <div className="section-divider mb-6" />
            <p className="text-white/60 text-base lg:text-lg leading-relaxed">
              A lot of developers build features.{" "}
              <span className="text-white font-semibold">I build outcomes.</span>
            </p>
          </div>

          {/* Pull stat */}
          <div className="lg:mt-12">
            <div className="bg-gradient-to-br from-teal-brand/10 to-gold-brand/5 border border-teal-brand/20 rounded-2xl p-7">
              <p className="text-white/50 text-sm mb-2 uppercase tracking-widest text-xs">
                My commitment
              </p>
              <p className="text-white text-lg font-semibold leading-relaxed">
                &ldquo;Every engagement I take is a partnership. I don&apos;t disappear after
                launch — I measure, iterate, and make sure the system actually
                delivers.&rdquo;
              </p>
              <p className="text-teal-brand text-sm font-bold mt-4">
                — Adetunji Adeniran
              </p>
            </div>
          </div>
        </div>

        {/* Differentiators grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="card-hover bg-[#0C1B2E] border border-white/10 hover:border-teal-brand/30 rounded-2xl p-6"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}

          {/* Spanning CTA card */}
          <div className="card-hover bg-gradient-to-br from-teal-brand/20 to-gold-brand/10 border border-teal-brand/30 rounded-2xl p-6 sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <div>
              <span className="text-3xl mb-4 block">⚡</span>
              <h3 className="text-white font-bold text-base mb-2">
                Ready to build something that matters?
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Let&apos;s talk about your problem. No commitment, no agency pitch.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-block bg-teal-brand text-[#0C1B2E] font-bold text-sm px-6 py-3 rounded-full text-center hover:bg-teal-light transition-colors"
            >
              Book a Discovery Call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
