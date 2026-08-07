import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ProcessStep = {
  number: number;
  title: string;
  description?: string;
};

const steps: ProcessStep[] = [
  {
    number: 1,
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
  },
  {
    number: 2,
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
  },
  {
    number: 3,
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry and organizational needs.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How We Deliver Results That Matter?"
          title="A Structured Three-Step Approach to Skill Development"
          align="center"
          className="mx-auto"
        />

        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.28)]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-lg font-semibold text-slate-950">
                    {String(step.number).padStart(2, "0")}
                  </span>
                  {index < steps.length - 1 ? (
                    <span className="hidden text-slate-400 lg:block" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">
                  {step.title}
                </h3>
                {step.description ? (
                  <p className="mt-4 text-base leading-8 text-slate-600">{step.description}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
