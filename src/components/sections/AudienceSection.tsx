import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Audience = {
  title: string;
  description: string;
};

const audiences: Audience[] = [
  {
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, and drive innovation across modern organizations.",
  },
  {
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
  },
  {
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
  },
  {
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
  },
];

export function AudienceSection() {
  return (
    <section id="audience" className="bg-slate-950 py-20 text-white sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Who Should Join?"
          title="Strategic Skill Enhancement"
          description="Designed to help professionals at every level grow with confidence and purpose."
          className="max-w-3xl text-left"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/8 p-8 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {audience.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{audience.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
