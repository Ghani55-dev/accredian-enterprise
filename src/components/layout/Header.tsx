import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Our Solutions", href: "#solutions" },
  { label: "Expertise", href: "#expertise" },
  { label: "Framework", href: "#framework" },
  { label: "How It Works", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="#home" className="flex items-center gap-3 text-slate-950" aria-label="Accredian home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
            A
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Accredian <span className="text-slate-500">Enterprise</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button href="#contact" variant="primary">
              Enquire Now
            </Button>
          </div>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
