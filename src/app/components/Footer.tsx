import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#07101E]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Image
            src="/images/logo.svg"
            alt="kingadetunji.dev"
            width={160}
            height={42}
            className="h-9 w-auto"
          />

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6 text-white/40 text-sm">
            {["About", "Services", "CentWiseAI", "Why Me", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-teal-brand transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-white/30 text-xs text-center md:text-right">
            © {year} BDA CentWise Technologies
            <br />
            <span className="text-white/20">Office@centwiseai.ca · 647-643-2062</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
