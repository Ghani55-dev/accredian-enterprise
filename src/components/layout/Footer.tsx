import { Container } from "@/components/ui/Container";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "Programs", href: "#programs" },
  { label: "Framework", href: "#framework" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-300">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_1fr] md:gap-12">
          <div>
            <a href="#home" className="text-lg font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              Accredian <span className="text-slate-400">Enterprise</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Enterprise learning solutions designed to build practical capability and lasting impact.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Explore</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h2>
            <a href="mailto:enterprise@accredian.com" className="mt-4 inline-flex text-sm text-slate-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              enterprise@accredian.com
            </a>
            <address className="mt-3 max-w-xs text-sm not-italic leading-7 text-slate-400">
              4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs leading-6 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Accredian Enterprise reference assignment.</p>
          <p>Built as a frontend engineering assignment based on the Accredian Enterprise reference.</p>
        </div>
      </Container>
    </footer>
  );
}
