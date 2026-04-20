const capabilities = [
  "Real-time savings insights across gas, groceries, and subscriptions",
  "Smart, location-aware recommendations tailored to GTA living",
  "Subscription tracking and overspend alerts",
  "Continuous learning — the longer you use it, the smarter it gets",
];

export default function FlagshipProduct() {
  return (
    <section id="centwiseai" className="py-24 bg-[#112240]/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-teal-brand text-sm font-semibold tracking-widest uppercase mb-3">
            04 · Flagship Product
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-2">CentWiseAI</h2>
          <p className="text-gold-brand text-xl font-semibold">
            Find and save money. Every day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — description */}
          <div>
            <div className="section-divider mb-8" />
            <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-6">
              CentWiseAI is an AI-powered financial assistant built specifically for
              residents in the{" "}
              <span className="text-white font-semibold">
                Greater Toronto Area.
              </span>{" "}
              It transforms real-world spending data — gas, groceries, subscriptions —
              into actionable recommendations that save money without the manual work.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-10">
              This product represents the full expression of my mission: embedding
              financial intelligence directly into everyday life, making it accessible
              and effortless for anyone.
            </p>

            {/* Capabilities */}
            <h3 className="text-white font-bold text-base mb-4 uppercase tracking-widest text-xs text-teal-brand">
              Key Capabilities
            </h3>
            <ul className="space-y-3">
              {capabilities.map((cap) => (
                <li key={cap} className="check-item text-white/70 text-sm leading-relaxed">
                  {cap}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="https://centwiseai.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold-brand text-[#0C1B2E] font-bold text-sm px-7 py-3.5 rounded-full hover:bg-gold-light transition-all duration-200 hover:shadow-xl hover:shadow-gold-brand/30 hover:-translate-y-0.5"
              >
                Try CentWiseAI →
              </a>
            </div>
          </div>

          {/* Right — feature highlight card */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-teal-brand/5 rounded-3xl blur-2xl" />

            <div className="relative bg-[#0C1B2E] border border-teal-brand/20 rounded-3xl p-8 teal-glow">
              {/* App header mock */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-teal-brand/20 rounded-xl flex items-center justify-center">
                  <span className="text-teal-brand text-lg">💡</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">CentWiseAI</p>
                  <p className="text-white/40 text-xs">Your Financial Co-pilot</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/40 text-xs">Live</span>
                </div>
              </div>

              {/* Mock insight cards */}
              {[
                {
                  icon: "⛽",
                  label: "Gas Savings",
                  val: "Save $12 this week",
                  sub: "Cheaper station 0.8km away",
                  color: "#00B5B8",
                },
                {
                  icon: "🛒",
                  label: "Grocery Alert",
                  val: "No Frills vs Metro",
                  sub: "Same basket, $18 cheaper",
                  color: "#F5A623",
                },
                {
                  icon: "📱",
                  label: "Subscription",
                  val: "Overspend detected",
                  sub: "3 streaming overlaps found",
                  color: "#00B5B8",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl mb-3 last:mb-0 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/40 text-xs mb-0.5">{item.label}</p>
                    <p className="text-white font-semibold text-sm">{item.val}</p>
                    <p className="text-white/40 text-xs truncate">{item.sub}</p>
                  </div>
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: item.color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Built for GTA callout */}
        <div className="mt-12 bg-gradient-to-r from-teal-brand/10 to-gold-brand/5 border border-teal-brand/20 rounded-2xl p-6 flex gap-4 items-start">
          <span className="text-2xl flex-shrink-0">🏙️</span>
          <div>
            <p className="text-white font-bold mb-1">Built for the GTA. Designed for everyone.</p>
            <p className="text-white/60 text-sm leading-relaxed">
              CentWiseAI isn&apos;t a generic budgeting tool. It&apos;s trained on localized data —
              GTA gas prices, local grocery chains, Canadian subscription plans — so every insight
              is immediately relevant to your real life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
