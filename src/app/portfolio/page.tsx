import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio — Adetunji Adeniran | Products & Startups",
  description:
    "A showcase of startups and projects designed by Adetunji Adeniran — from AI-powered fintech to structural engineering platforms and rental management software.",
};

const startups = [
  {
    name: "RentSDK Canada",
    tagline: "Rental Management, Simplified.",
    description:
      "Helping independent landlords simplify and automate their rentals — from tenant onboarding and lease management to payment tracking and maintenance requests.",
    logo: "/images/RentSDK_logo.jpeg",
    href: "https://rentsdk.ca",
    tag: "PropTech · Canada",
    accentColor: "#4F8EF7",
    bg: "from-blue-900/20 to-blue-800/10",
    border: "border-blue-500/20",
    tagBg: "bg-blue-500/10 text-blue-300",
  },
  {
    name: "CentWiseAI",
    tagline: "Find and save money. Every day.",
    description:
      "Helping every day shoppers find and save money on gas, groceries, and subscriptions through AI-powered, location-aware financial insights built for Ontario living.",
    logo: "/images/centwiseai_logo.png",
    href: "https://centwiseai.ca",
    tag: "FinTech · Ontario",
    accentColor: "#00B5B8",
    bg: "from-teal-900/20 to-teal-800/10",
    border: "border-teal-500/20",
    tagBg: "bg-teal-500/10 text-teal-300",
  },
  {
    name: "StructStackAI",
    tagline: "Engineering intelligence, end to end.",
    description:
      "A full-stack AI-powered Structural Engineering platform simplifying workflows for engineers, architects, and developers globally — from design to documentation.",
    logo: "/images/structstackai_logo.jpeg",
    href: "https://structstack.ai/",
    tag: "AEC Tech · Global",
    accentColor: "#A78BFA",
    bg: "from-purple-900/20 to-purple-800/10",
    border: "border-purple-500/20",
    tagBg: "bg-purple-500/10 text-purple-300",
  },
  {
    name: "Darta Technologies Ltd",
    tagline: "Software that works for African schools.",
    description:
      "A Nigeria-based Software Engineering startup helping private and public schools simplify and automate academic workflows — from admissions to results management.",
    logo: "/images/Darta_logo.jpeg",
    href: "https://www.dartatech.com/",
    tag: "EdTech · Nigeria",
    accentColor: "#F97316",
    bg: "from-orange-900/20 to-orange-800/10",
    border: "border-orange-500/20",
    tagBg: "bg-orange-500/10 text-orange-300",
  },
  {
    name: "SimpleSchools",
    tagline: "School management, made simple.",
    description:
      "A modern school management platform helping educators and administrators streamline operations — from student enrolment and scheduling to communications and reporting.",
    logo: "/images/SimpleSchools_logo.jpeg",
    href: "https://simpleschools.xyz/",
    tag: "EdTech · Global",
    accentColor: "#3B82F6",
    bg: "from-sky-900/20 to-sky-800/10",
    border: "border-sky-500/20",
    tagBg: "bg-sky-500/10 text-sky-300",
  },
  {
    name: "Ade Law",
    tagline: "Your legal advisor & advocate.",
    description:
      "A Canadian law practice providing personalized legal advice and advocacy — helping clients navigate complex legal matters with clarity, confidence, and care.",
    logo: "/images/Ade_Law_logo.jpeg",
    href: "https://www.adelaw.ca/",
    tag: "Legal Services · Canada",
    accentColor: "#F59E0B",
    bg: "from-amber-900/20 to-amber-800/10",
    border: "border-amber-500/20",
    tagBg: "bg-amber-500/10 text-amber-300",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0C1B2E] text-white">
      {/* Back nav */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-teal-brand text-sm font-medium transition-colors duration-200"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 text-center">
        <p className="text-teal-brand text-sm font-semibold tracking-widest uppercase mb-4">
          Startups & Products
        </p>
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          My Portfolio
        </h1>
        <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
          A collection of products and companies that I have served — solving real
          problems across industries and borders through technology.
        </p>
        <div className="mt-8 w-16 h-1 bg-teal-brand mx-auto rounded-full" />
      </section>

      {/* Cards grid */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 gap-8">
          {startups.map((startup) => (
            <a
              key={startup.name}
              href={startup.href}
              target={startup.href !== "#" ? "_blank" : undefined}
              rel={startup.href !== "#" ? "noopener noreferrer" : undefined}
              className={`group relative flex flex-col bg-gradient-to-br ${startup.bg} border ${startup.border} rounded-3xl p-8 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer`}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                style={{ background: `${startup.accentColor}15` }}
              />

              {/* Tag */}
              <span
                className={`inline-flex self-start text-xs font-semibold px-3 py-1 rounded-full mb-6 ${startup.tagBg}`}
              >
                {startup.tag}
              </span>

              {/* Logo */}
              <div className="mb-6 flex items-center justify-center w-24 h-24 rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                <Image
                  src={startup.logo}
                  alt={`${startup.name} logo`}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1 group-hover:text-white transition-colors">
                  {startup.name}
                </h2>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: startup.accentColor }}
                >
                  {startup.tagline}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  {startup.description}
                </p>
              </div>

              {/* Visit link indicator */}
              {startup.href !== "#" && (
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: startup.accentColor }}>
                  Visit website →
                </div>
              )}
              {startup.href === "#" && (
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-white/30">
                  Coming soon
                </div>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#07101E]">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <p className="text-white/60 text-base mb-6">
            Interested in collaborating or building something together?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-teal-brand text-[#0C1B2E] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-teal-light transition-all duration-200 hover:shadow-xl hover:shadow-teal-brand/30 hover:-translate-y-0.5"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </main>
  );
}
