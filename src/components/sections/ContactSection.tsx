import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-slate-50/80 p-8 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.28)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:p-12">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Contact Us"
              title="Want to learn more about our training solutions?"
              description="Speak with our advisor to discuss the right learning path for your team."
            />

            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <a href="mailto:enterprise@accredian.com" className="mt-1 inline-flex text-slate-700 transition hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2">
                  enterprise@accredian.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Office</p>
                <p className="mt-1">4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Enquire</p>
                <p className="mt-1">Share your learning goals and we will help you shape a practical enterprise training plan.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <LeadForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
