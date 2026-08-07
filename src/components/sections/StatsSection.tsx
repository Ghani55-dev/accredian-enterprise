import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Stat = {
  value: string;
  description: string;
};

const stats: Stat[] = [
  {
    value: "10K+",
    description: "Professionals trained for exceptional career success",
  },
  {
    value: "200+",
    description: "Sessions delivered with unmatched learning excellence",
  },
  {
    value: "5K+",
    description: "Active learners engaged in dynamic courses",
  },
];

export function StatsSection() {
  return (
    <section id="track-record" className="border-t border-slate-200 bg-slate-50/70 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Track Record"
          title="The Numbers Behind Our Success"
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_70px_-32px_rgba(15,23,42,0.24)]"
            >
              <h3 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                {stat.value}
              </h3>
              <p className="mx-auto mt-4 max-w-[18rem] text-base leading-7 text-slate-600">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
