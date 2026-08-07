import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ExpertiseArea = {
  title: string;
  image: string;
};

const expertiseAreas: ExpertiseArea[] = [
  { title: "Product & Innovation Hub", image: "/images/expertise/product.svg" },
  { title: "Gen-AI Mastery", image: "/images/expertise/gen-ai.svg" },
  { title: "Leadership Elevation", image: "/images/expertise/leadership.svg" },
  { title: "Tech & Data Insights", image: "/images/expertise/tech-data.svg" },
  { title: "Operations Excellence", image: "/images/expertise/operations.svg" },
  { title: "Digital Enterprise", image: "/images/expertise/digital-enterprise.svg" },
  { title: "Fintech Innovation Lab", image: "/images/expertise/fintech.svg" },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Domain Expertise"
          title="Specialized Programs Designed to Fuel Innovation"
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {expertiseAreas.map((area) => (
            <article
              key={area.title}
              className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_80px_-36px_rgba(15,23,42,0.28)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={area.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {area.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
