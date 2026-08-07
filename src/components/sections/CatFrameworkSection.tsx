import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CatFrameworkSection() {
  return (
    <section id="framework" className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="The CAT Framework"
          title="Our Proven Approach to Learning Excellence"
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-38px_rgba(15,23,42,0.26)] sm:p-8 lg:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div className="order-2 lg:order-1">
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 sm:p-6">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <Image
                    src="/images/framework/cat-framework.svg"
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 45vw, (min-width: 768px) 65vw, 100vw"
                    className="object-contain p-4 sm:p-6"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 max-w-xl">
              <div className="rounded-[1.75rem] border border-cyan-100 bg-cyan-50/80 p-8 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-700">
                  Framework in Practice
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  A structured learning model designed for enterprise relevance.
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  The framework is presented as a deliberate visual system that connects capability build-out with practical implementation and measurable learning outcomes.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  This section keeps the emphasis on clarity, progression, and a strong visual narrative rather than generic academic labels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
