"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqCategories } from "@/data/faqs";

export function FaqSection() {
  const [activeCategoryId, setActiveCategoryId] = useState(faqCategories[0]?.id ?? "about-the-course");
  const [openItemId, setOpenItemId] = useState<string | null>(faqCategories[0]?.items[0]?.id ?? null);

  const activeCategory = useMemo(
    () => faqCategories.find((category) => category.id === activeCategoryId) ?? faqCategories[0],
    [activeCategoryId],
  );

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const nextCategory = faqCategories.find((category) => category.id === categoryId);
    setOpenItemId(nextCategory?.items[0]?.id ?? null);
  };

  return (
    <section id="faq" className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Answers that help teams move forward with confidence"
              description="A compact set of practical questions and answers that support the learning journey from the first conversation onward."
            />
            <div className="mt-8">
              <Button href="#contact" variant="secondary" className="w-full justify-center sm:w-auto">
                Enquire Now
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.28)] sm:p-8">
            <div className="flex flex-wrap gap-3" role="group" aria-label="FAQ categories">
              {faqCategories.map((category) => {
                const isActive = category.id === activeCategoryId;

                return (
                  <button
                    key={category.id}
                    type="button"
                    aria-pressed={isActive}
                    className={[
                      "rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2",
                      isActive
                        ? "border-slate-950 bg-slate-950 text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                    ].join(" ")}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 space-y-4" aria-label={activeCategory?.label ?? "FAQ"}>
              {activeCategory?.items.length ? (
                activeCategory.items.map((item) => {
                  const isOpen = openItemId === item.id;
                  const panelId = `${item.id}-panel`;
                  const triggerId = `${item.id}-trigger`;

                  return (
                    <div key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50/80">
                      <h3 className="text-base font-semibold text-slate-950">
                        <button
                          id={triggerId}
                          type="button"
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-slate-950 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpenItemId(isOpen ? null : item.id)}
                        >
                          <span>{item.question}</span>
                          <span className="text-xl font-normal text-slate-500" aria-hidden="true">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                      </h3>
                      {isOpen ? (
                        <div id={panelId} role="region" aria-labelledby={triggerId} className="px-5 pb-5">
                          <p className="text-sm leading-7 text-slate-600">{item.answer}</p>
                        </div>
                      ) : null}
                    </div>
                  );
                })
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 px-5 py-6 text-sm leading-7 text-slate-600">
                  {activeCategory?.emptyMessage ?? "No verified FAQ content was exposed for this category in the current reference pass."}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
