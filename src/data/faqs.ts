export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  label: string;
  items: FaqItem[];
  emptyMessage?: string;
};

export const faqCategories: FaqCategory[] = [
  {
    id: "about-the-course",
    label: "About the Course",
    items: [
      {
        id: "training-programs",
        question: "What types of corporate training programs does Accredian offer?",
        answer:
          "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
      },
      {
        id: "domain-specializations",
        question: "What domain specializations are available?",
        answer:
          "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
      },
    ],
  },
  {
    id: "about-the-delivery",
    label: "About the Delivery",
    items: [],
    emptyMessage: "No verified FAQ answers were exposed for this category in the current reference pass.",
  },
  {
    id: "miscellaneous",
    label: "Miscellaneous",
    items: [],
    emptyMessage: "No verified FAQ answers were exposed for this category in the current reference pass.",
  },
];
