import { neon } from "@neondatabase/serverless";
import type { LeadInput } from "@/lib/leads/schema";

export async function createLead(input: LeadInput) {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  const sql = neon(dbUrl);
  const result = await sql.query(
    "INSERT INTO enterprise_leads (full_name, work_email, phone, company, job_title, team_size, training_requirement) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id",
    [
      input.fullName,
      input.workEmail,
      input.phone,
      input.company,
      input.jobTitle ?? null,
      input.teamSize ?? null,
      input.trainingRequirement,
    ],
  );

  return { id: (result[0] as { id?: number } | undefined)?.id };
}
