import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Partner = {
  name: string;
  src: string;
  alt: string;
};

const partners: Partner[] = [
  { name: "ADP", src: "/images/partners/adp.svg", alt: "ADP" },
  { name: "Bayer", src: "/images/partners/bayer.svg", alt: "Bayer" },
  { name: "Reliance", src: "/images/partners/reliance.svg", alt: "Reliance" },
  { name: "Cisco", src: "/images/partners/cisco.svg", alt: "Cisco" },
  { name: "Microsoft", src: "/images/partners/microsoft.svg", alt: "Microsoft" },
  { name: "Google", src: "/images/partners/google.svg", alt: "Google" },
];

export function PartnersSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Proven Partnerships"
          title="Successful Collaborations With the Industry’s Best"
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-4 rounded-[2rem] border border-slate-200 bg-slate-50/80 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:p-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex min-h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-6 shadow-sm"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={150}
                height={70}
                className="h-10 w-auto object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
