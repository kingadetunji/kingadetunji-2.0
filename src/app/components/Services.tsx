const services = [
  {
    number: "01",
    title: "AI Product Development",
    tagline: "From validated idea to production-ready product.",
    desc: "I design, build, and launch AI-driven platforms that users actually adopt. End-to-end ownership from MVP to launch.",
    items: [
      "MVP scoping and rapid prototyping",
      "AI integration — recommendation engines, predictive models, NLP",
      "Product roadmap strategy and sprint execution",
      "User-centric design and iterative improvement",
    ],
    accent: "#00B5B8",
  },
  {
    number: "02",
    title: "Financial Intelligence Systems",
    tagline: "Raw financial data tells a story. I help you read it — and act on it.",
    desc: "My models surface patterns, flag risks, and power smarter decisions at scale.",
    items: [
      "Spending optimization and cost-reduction models",
      "Predictive analytics (price forecasting, subscription churn)",
      "AI-driven financial dashboards and insight engines",
      "Data-driven decision frameworks for lean organizations",
    ],
    accent: "#F5A623",
  },
  {
    number: "03",
    title: "Technology & IT Consulting",
    tagline: "Strategic guidance for your entire digital journey.",
    desc: "From architecture decisions to AI adoption strategy — the right guidance at the right time.",
    items: [
      "System architecture and cloud infrastructure guidance",
      "Digital transformation planning",
      "AI adoption strategy and change management",
      "Technical advisory for founders and leadership teams",
    ],
    accent: "#00B5B8",
  },
];

const tableRows = [
  {
    service: "AI Product Dev",
    value:
      "End-to-end product design and engineering - from idea to launched, AI-powered application.",
  },
  {
    service: "Financial Intelligence",
    value:
      "Custom models that turn financial data into cost savings, risk signals, and growth opportunities.",
  },
  {
    service: "IT Consulting",
    value:
      "Strategic technology advisory to help you make the right decisions at the right time.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-brand text-sm font-semibold tracking-widest uppercase mb-3">
            Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            How I Can Help You
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-white/60 text-base max-w-xl mx-auto">
            Whether you&apos;re a leader who needs a technical partner, an organization
            seeking digital transformation, or a startup ready to embed AI - here&apos;s
            where we align.
          </p>
        </div>

        {/* Service cards */}
        <div className="space-y-6 mb-16">
          {services.map((svc, i) => (
            <div
              key={svc.number}
              className="card-hover group bg-[#112240]/60 border border-white/10 hover:border-teal-brand/30 rounded-2xl p-8 grid md:grid-cols-[auto_1fr_1fr] gap-8 items-start"
            >
              {/* Number */}
              <span
                className="text-5xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ color: svc.accent }}
              >
                {svc.number}
              </span>

              {/* Left info */}
              <div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: svc.accent }}
                >
                  {svc.title}
                </h3>
                <p className="text-white/60 text-sm italic mb-3">{svc.tagline}</p>
                <p className="text-white/70 text-sm leading-relaxed">{svc.desc}</p>
              </div>

              {/* Right list */}
              <ul className="space-y-2">
                {svc.items.map((item) => (
                  <li key={item} className="arrow-item text-white/60 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* At-a-glance table */}
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-2 bg-[#0C1B2E] border-b border-white/10">
            <div className="px-6 py-3">
              <span className="text-teal-brand text-xs font-bold tracking-widest uppercase">
                Service
              </span>
            </div>
            <div className="px-6 py-3">
              <span className="text-gold-brand text-xs font-bold tracking-widest uppercase">
                What It Means For You
              </span>
            </div>
          </div>
          {tableRows.map((row, i) => (
            <div
              key={row.service}
              className={`grid grid-cols-2 border-b border-white/5 last:border-0 ${i % 2 === 0 ? "bg-[#112240]/40" : "bg-[#0C1B2E]/40"
                }`}
            >
              <div className="px-6 py-4">
                <span className="text-white font-semibold text-sm">{row.service}</span>
              </div>
              <div className="px-6 py-4">
                <span className="text-white/60 text-sm">{row.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
