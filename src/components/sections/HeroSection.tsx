import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const benefits = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
  "Measurable Impact",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 6 8.5 13.5 4 9" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.05),_transparent_50%)] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Next-Gen Expertise
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              for Your <span className="text-slate-700">Enterprise</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Cultivate high-performance teams through expert learning.
            </p>

            <ul className="mt-8 space-y-3" aria-label="Key benefits">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-base text-slate-700">
                  <CheckIcon />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#contact">Enquire Now</Button>
              <Button href="#solutions" variant="secondary">
                Explore Solutions
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-0 rounded-[2rem] bg-slate-950/5 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_-24px_rgba(15,23,42,0.25)] sm:p-6">
              <Image
                src="/images/hero-visual.svg"
                alt=""
                width={800}
                height={720}
                priority
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
