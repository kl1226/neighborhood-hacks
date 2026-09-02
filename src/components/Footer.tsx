import Link from "next/link";

const footerLinks = [
  { href: "/prizes", label: "PRIZES" },
  { href: "/sponsors", label: "SPONSORS" },
  { href: "/code-of-conduct", label: "CODE_OF_CONDUCT" },
  { href: "/faq", label: "FAQ" },
];

const externalLinks = [
  { href: "https://discord.gg/rS2nmaqpzG", label: "DISCORD" },
  { href: "https://neighborhood-hacks-2026.devpost.com/", label: "DEVPOST" },
  { href: "#", label: "INSTAGRAM" },
];

export default function Footer() {
  return (
    <footer className="torn-paper-top py-12 px-4 sm:px-8 mt-12">
      <div className="max-w-6xl mx-auto">
        {/* Top section — asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-12">
          {/* Branding — tilted slightly */}
          <div className="tilt-slight">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold text-near-black">
                NEIGHBORHOOD
              </span>
              <br />
              <span className="font-display text-2xl font-bold text-near-black">
                HACKS
              </span>
            </Link>
            <p className="font-hand text-lg text-near-black/60 mt-3">
              Build locally, share globally
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-near-black/50 mb-4 font-semibold">
              PAGES
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-sm text-near-black/70 hover:text-near-black transition-colors font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-near-black/50 mb-4 font-semibold">
              CONNECT
            </h3>
            <ul className="space-y-2">
              {externalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-near-black/70 hover:text-near-black transition-colors font-semibold"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:neighborhoodhacks@gmail.com"
                  className="font-mono text-sm text-near-black/70 hover:text-near-black transition-colors font-semibold [overflow-wrap:anywhere]"
                >
                  neighborhoodhacks@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar — editorial style */}
        <div className="border-t border-near-black/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-near-black/50 font-semibold">
              © {new Date().getFullYear()}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-near-black/50 font-semibold">
              ALL RIGHTS RESERVED
            </span>
          </div>
          <p className="font-hand text-lg text-near-black/60">
            made by students, for students ♡
          </p>
        </div>
      </div>
    </footer>
  );
}
