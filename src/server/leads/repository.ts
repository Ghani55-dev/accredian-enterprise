import "server-only";

import { Pool } from "pg";
import type { LeadInput } from "@/lib/leads/schema";

const globalForDatabase = globalThis as typeof globalThis & {
  leadPool?: Pool;
};

function getPool() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  if (!globalForDatabase.leadPool) {
    globalForDatabase.leadPool = new Pool({ connectionString: dbUrl });
  }

  return globalForDatabase.leadPool;
}

export async function createLead(input: LeadInput) {
  const result = await getPool().query<{ id: number }>(
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

  return { id: result.rows[0]?.id };
}
