"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const initialState = {
  fullName: "",
  workEmail: "",
  phone: "",
  company: "",
  jobTitle: "",
  teamSize: "",
  trainingRequirement: "",
  website: "",
};

type FieldErrors = Record<string, string[]>;

type FormState = typeof initialState;

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const isSubmitting = status === "submitting";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: [] }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    setStatus("submitting");
    setErrors({});
    setServerMessage("");

    const payload = {
      ...form,
      website: "",
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as
        | {
            success?: boolean;
            message?: string;
            errors?: Record<string, string[]>;
          }
        | null;

      if (response.ok && data?.success) {
        setForm(initialState);
        setStatus("success");
        setServerMessage(data.message ?? "Thank you. Your enquiry has been received.");
        return;
      }

      if (response.status === 422 && data?.errors) {
        setErrors(data.errors);
      } else {
        setErrors({});
      }

      setStatus("error");
      setServerMessage(data?.message ?? "Unable to submit your enquiry right now.");
    } catch {
      setStatus("error");
      setServerMessage("Unable to submit your enquiry right now.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input type="text" name="website" value={form.website} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-700">
            Full Name<span className="ml-1 text-slate-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={handleChange}
            aria-invalid={Boolean(errors.fullName?.length)}
            aria-describedby={errors.fullName?.length ? "fullName-error" : undefined}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
            required
          />
          {errors.fullName?.length ? (
            <p id="fullName-error" className="mt-2 text-sm text-rose-600">
              {errors.fullName[0]}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="workEmail" className="mb-2 block text-sm font-semibold text-slate-700">
            Work Email<span className="ml-1 text-slate-500">*</span>
          </label>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            autoComplete="email"
            value={form.workEmail}
            onChange={handleChange}
            aria-invalid={Boolean(errors.workEmail?.length)}
            aria-describedby={errors.workEmail?.length ? "workEmail-error" : undefined}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
            required
          />
          {errors.workEmail?.length ? (
            <p id="workEmail-error" className="mt-2 text-sm text-rose-600">
              {errors.workEmail[0]}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
            Phone<span className="ml-1 text-slate-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone?.length)}
            aria-describedby={errors.phone?.length ? "phone-error" : undefined}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
            required
          />
          {errors.phone?.length ? (
            <p id="phone-error" className="mt-2 text-sm text-rose-600">
              {errors.phone[0]}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-semibold text-slate-700">
            Company<span className="ml-1 text-slate-500">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            aria-invalid={Boolean(errors.company?.length)}
            aria-describedby={errors.company?.length ? "company-error" : undefined}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
            required
          />
          {errors.company?.length ? (
            <p id="company-error" className="mt-2 text-sm text-rose-600">
              {errors.company[0]}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="jobTitle" className="mb-2 block text-sm font-semibold text-slate-700">
            Job Title
          </label>
          <input
            id="jobTitle"
            name="jobTitle"
            type="text"
            autoComplete="organization-title"
            value={form.jobTitle}
            onChange={handleChange}
            aria-invalid={Boolean(errors.jobTitle?.length)}
            aria-describedby={errors.jobTitle?.length ? "jobTitle-error" : undefined}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
          />
          {errors.jobTitle?.length ? (
            <p id="jobTitle-error" className="mt-2 text-sm text-rose-600">
              {errors.jobTitle[0]}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="teamSize" className="mb-2 block text-sm font-semibold text-slate-700">
            Team Size
          </label>
          <select
            id="teamSize"
            name="teamSize"
            value={form.teamSize}
            onChange={handleChange}
            aria-invalid={Boolean(errors.teamSize?.length)}
            aria-describedby={errors.teamSize?.length ? "teamSize-error" : undefined}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
          >
            <option value="">Select an option</option>
            <option value="1-10">1–10</option>
            <option value="11-50">11–50</option>
            <option value="51-200">51–200</option>
            <option value="201-500">201–500</option>
            <option value="500+">500+</option>
          </select>
          {errors.teamSize?.length ? (
            <p id="teamSize-error" className="mt-2 text-sm text-rose-600">
              {errors.teamSize[0]}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="trainingRequirement" className="mb-2 block text-sm font-semibold text-slate-700">
            Training Requirement<span className="ml-1 text-slate-500">*</span>
          </label>
          <textarea
            id="trainingRequirement"
            name="trainingRequirement"
            rows={5}
            value={form.trainingRequirement}
            onChange={handleChange}
            aria-invalid={Boolean(errors.trainingRequirement?.length)}
            aria-describedby={errors.trainingRequirement?.length ? "trainingRequirement-error" : undefined}
            className="min-h-[140px] w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
            required
          />
          {errors.trainingRequirement?.length ? (
            <p id="trainingRequirement-error" className="mt-2 text-sm text-rose-600">
              {errors.trainingRequirement[0]}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={isSubmitting} className="min-w-[180px] justify-center">
          {isSubmitting ? "Submitting…" : "Submit Enquiry"}
        </Button>
      </div>

      {serverMessage ? (
        <div
          role="status"
          aria-live="polite"
          className={`rounded-2xl border px-4 py-3 text-sm ${status === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-700"}`}
        >
          {serverMessage}
        </div>
      ) : null}

      {status === "error" && !serverMessage ? (
        <p role="alert" className="text-sm text-rose-600">
          Unable to submit your enquiry right now.
        </p>
      ) : null}
    </form>
  );
}
