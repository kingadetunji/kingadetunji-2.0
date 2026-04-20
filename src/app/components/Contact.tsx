"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:Office@centwiseai.ca?subject=Discovery Call Request from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <p className="text-teal-brand text-sm font-semibold tracking-widest uppercase mb-3">
              07 · Contact
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Let&apos;s Build Something Impactful
            </h2>
            <div className="section-divider mb-8" />

            <p className="text-white/65 text-base lg:text-lg leading-relaxed mb-10">
              If you&apos;re working on a problem at the intersection of AI, finance, and
              real-world impact — I&apos;d love to hear about it. Whether it&apos;s a discovery
              call, a project brief, or just an idea you want to stress-test, reach
              out.
            </p>

            {/* Contact methods */}
            <div className="space-y-4">
              {[
                {
                  icon: "✉️",
                  label: "Email",
                  value: "Office@centwiseai.ca",
                  href: "mailto:Office@centwiseai.ca",
                },
                {
                  icon: "📞",
                  label: "Phone",
                  value: "647-643-2062",
                  href: "tel:+16476432062",
                },
                {
                  icon: "🌐",
                  label: "Website",
                  value: "kingadetunji.dev",
                  href: "https://kingadetunji.dev",
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#112240]/60 border border-white/10 hover:border-teal-brand/40 rounded-xl transition-all group"
                >
                  <span className="text-2xl">{contact.icon}</span>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">{contact.label}</p>
                    <p className="text-white font-medium text-sm group-hover:text-teal-brand transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="mailto:Office@centwiseai.ca?subject=Discovery Call Request"
                className="bg-teal-brand text-[#0C1B2E] font-bold text-sm px-7 py-3.5 rounded-full hover:bg-teal-light transition-all hover:shadow-xl hover:shadow-teal-brand/30 hover:-translate-y-0.5"
              >
                Book a Discovery Call →
              </a>
              <a
                href="https://centwiseai.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold-brand/50 text-gold-brand font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-gold-brand/10 transition-all hover:-translate-y-0.5"
              >
                Try CentWiseAI →
              </a>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="bg-[#112240]/60 border border-white/10 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <span className="text-5xl mb-4 block">✅</span>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-white/60 text-sm">
                  Your email client should have opened. I&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-white font-bold text-lg mb-6">
                  Send me a message
                </h3>

                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wide mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full bg-[#0C1B2E] border border-white/10 focus:border-teal-brand/60 outline-none rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wide mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full bg-[#0C1B2E] border border-white/10 focus:border-teal-brand/60 outline-none rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wide mb-2 block">
                    Tell me about your project
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="I'm working on a fintech startup and need help with..."
                    className="w-full bg-[#0C1B2E] border border-white/10 focus:border-teal-brand/60 outline-none rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-brand text-[#0C1B2E] font-bold text-sm py-3.5 rounded-xl hover:bg-teal-light transition-colors hover:shadow-lg hover:shadow-teal-brand/20"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
