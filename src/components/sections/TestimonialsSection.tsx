import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Testimonial = {
  company: string;
  quote: string;
  logo: string;
};

const testimonials: Testimonial[] = [
  {
    company: "ADP",
    quote:
      '"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."',
    logo: "/images/partners/adp.svg",
  },
  {
    company: "Bayer",
    quote:
      '"Accredian\'s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."',
    logo: "/images/partners/bayer.svg",
  },
  {
    company: "Reliance",
    quote:
      '"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."',
    logo: "/images/partners/reliance.svg",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials from Our Partners"
          title="What Our Clients Are Saying"
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.company}
              className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.28)]"
            >
              <div className="flex min-h-20 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4">
                <Image src={testimonial.logo} alt={testimonial.company} width={150} height={64} className="h-12 w-auto object-contain" />
              </div>
              <blockquote className="mt-8 flex-1 text-base leading-8 text-slate-700">
                {testimonial.quote}
              </blockquote>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
