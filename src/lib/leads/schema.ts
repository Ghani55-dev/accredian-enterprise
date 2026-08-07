import { z } from "zod";

const trimmedText = (min: number, max: number) =>
  z.string().trim().min(min).max(max);

const optionalText = (max: number) =>
  z.preprocess(
    (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
    z.string().trim().max(max).optional(),
  );

const optionalTeamSize = z.preprocess(
  (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
  z.enum(["1-10", "11-50", "51-200", "201-500", "500+"]).optional(),
);

export const leadSchema = z
  .object({
    fullName: trimmedText(2, 80),
    workEmail: z.string().trim().toLowerCase().email().max(254),
    phone: z
      .string()
      .trim()
      .min(7, "Enter a valid phone number.")
      .max(30)
      .regex(/^[+()0-9.\s-]{7,30}$/, "Enter a valid phone number."),
    company: trimmedText(2, 120),
    jobTitle: optionalText(100),
    teamSize: optionalTeamSize,
    trainingRequirement: z.string().trim().min(20).max(2000),
    website: z.string().trim().max(0).optional(),
  })
  .strict();

export type LeadInput = z.infer<typeof leadSchema>;
