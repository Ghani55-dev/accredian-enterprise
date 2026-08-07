import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CourseSegment = {
  title: string;
  image: string;
};

const segments: CourseSegment[] = [
  { title: "Program Specific", image: "/images/segmentation/program-specific.svg" },
  { title: "Industry Specific", image: "/images/segmentation/industry-specific.svg" },
  { title: "Topic Specific", image: "/images/segmentation/topic-specific.svg" },
  { title: "Level Specific", image: "/images/segmentation/level-specific.svg" },
];

export function CourseSegmentationSection() {
  return (
    <section id="programs" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Tailored Course Segmentation"
          title="Explore Custom-fit Courses Designed to Address Every Professional Focus"
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {segments.map((segment) => (
            <article
              key={segment.title}
              className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.28)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <Image
                  src={segment.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {segment.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
