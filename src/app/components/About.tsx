export default function About() {
  return (
    <section id="about" className="py-24 bg-[#112240]/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — content */}
          <div>
            <p className="text-teal-brand text-sm font-semibold tracking-widest uppercase mb-3">
              About
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Who I Am</h2>
            <div className="section-divider mb-8" />

            <div className="space-y-5 text-white/70 text-base lg:text-lg leading-relaxed">
              <p>
                I&apos;m a{" "}
                <span className="text-white font-semibold">
                  Financial Intelligence Specialist and Software Engineer
                </span>{" "}
                who builds AI products that solve real problems — not just proofs of
                concept.
              </p>
              <p>
                My work is grounded in one belief:{" "}
                <span className="text-teal-brand font-medium">
                  data is only valuable when it leads to better decisions.
                </span>
              </p>
              <p>
                From consumer-facing apps like CentWiseAI to strategic technology
                advisory for organizations navigating growth, I bring a
                product-first mindset to every engagement. I don&apos;t just write
                code - I build systems that move the needle.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-10 pl-5 border-l-2 border-gold-brand">
              <p className="text-white/80 text-base italic leading-relaxed">
                &ldquo;I operate at the intersection of AI, finance, and product
                strategy — where complexity meets clarity, and data meets
                decisions.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right — identity cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🤖",
                title: "AI Product Builder",
                desc: "From idea to production-ready AI application.",
              },
              {
                icon: "💰",
                title: "Financial Intelligence",
                desc: "Turning raw data into cost savings, risk signals, and growth.",
              },
              {
                icon: "🏗️",
                title: "Software Engineer",
                desc: "Full-stack Engineer with a bias toward shipping real products.",
              },
              {
                icon: "🚀",
                title: "Founder, CentWiseAI",
                desc: "AI-powered financial assistant for Ontario residents.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="card-hover bg-[#0C1B2E] border border-white/10 rounded-2xl p-6 hover:border-teal-brand/40"
              >
                <span className="text-3xl mb-3 block">{card.icon}</span>
                <h3 className="text-white font-semibold text-base mb-2">
                  {card.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
