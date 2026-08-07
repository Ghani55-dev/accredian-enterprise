import { createLead } from "@/server/leads/repository";
import type { LeadInput } from "@/lib/leads/schema";

export async function createLeadRecord(input: LeadInput) {
  const persisted = await createLead(input);
  return { success: true as const, id: persisted.id };
}
