const clients = [
  {
    icon: "🚀",
    title: "Startups Building in AI or Fintech",
    desc: "You have an idea — or an early product — and need a technical and strategic co-pilot who's been through the build. I help you move fast without breaking the architecture.",
    tags: ["MVP Development", "AI Integration", "Technical Co-founder"],
  },
  {
    icon: "🤝",
    title: "Community & Non-Profit Organizations",
    desc: "Tight budgets demand smart systems. I help community organizations automate, optimize, and scale operations through accessible AI solutions that don't require an in-house engineering team.",
    tags: ["Process Automation", "Cost Reduction", "Accessible AI"],
  },
  {
    icon: "💼",
    title: "Founders Who Need More Than a Coder",
    desc: "You need someone who thinks about the product, the user, and the business — not just the pull request. I bring strategy, execution, and accountability to every engagement.",
    tags: ["Product Strategy", "Execution", "Direct Access"],
  },
];

export default function IdealClients() {
  return (
    <section id="clients" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-teal-brand text-sm font-semibold tracking-widest uppercase mb-3">
            05 · Ideal Clients
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Who I Work With</h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Client cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client.title}
              className="card-hover bg-[#112240]/60 border border-white/10 hover:border-teal-brand/30 rounded-2xl p-7 flex flex-col"
            >
              <span className="text-4xl mb-5 block">{client.icon}</span>
              <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                {client.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {client.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/10">
                {client.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-teal-brand bg-teal-brand/10 border border-teal-brand/20 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
