import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type EdgeItem = {
  title: string;
  description: string;
};

const edgeItems: EdgeItem[] = [
  {
    title: "Tailored Learning",
    description: "Programs designed around business goals, team maturity, and measurable outcomes.",
  },
  {
    title: "Strategic Guidance",
    description: "Expert advisors shape curriculum and delivery around the realities of enterprise growth.",
  },
  {
    title: "Measured Impact",
    description: "Training is structured to drive adoption, capability uplift, and visible business value.",
  },
];

export function AccredianEdgeSection() {
  return (
    <section id="solutions" className="bg-slate-950 py-20 text-white sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="The Accredian Edge"
              title="Key Aspects of Our Strategic Training"
              description="A practical, enterprise-led learning approach that helps teams elevate capability without losing momentum."
              className="text-left"
            />

            <div className="mt-10 space-y-5">
              {edgeItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/8 p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-[0_30px_90px_-28px_rgba(2,8,23,0.75)] sm:p-6">
              <Image
                src="/images/edge-visual.svg"
                alt=""
                width={800}
                height={640}
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
