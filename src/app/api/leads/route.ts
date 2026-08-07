import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/leads/schema";
import { createLeadRecord } from "@/server/leads/service";

export const runtime = "nodejs";

const MAX_BODY_SIZE = 16 * 1024;

function getErrorMessageForStatus(status: number) {
  switch (status) {
    case 400:
      return "Invalid request payload.";
    case 413:
      return "Payload too large.";
    case 415:
      return "Unsupported Media Type.";
    case 422:
      return "Please correct the highlighted fields.";
    case 503:
      return "Unable to submit your enquiry right now.";
    default:
      return "Unable to submit your enquiry right now.";
  }
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { success: false, message: getErrorMessageForStatus(415) },
      { status: 415 },
    );
  }

  const contentLength = request.headers.get("content-length");
  if (contentLength && Number(contentLength) > MAX_BODY_SIZE) {
    return NextResponse.json(
      { success: false, message: getErrorMessageForStatus(413) },
      { status: 413 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: getErrorMessageForStatus(400) },
      { status: 400 },
    );
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return NextResponse.json(
      {
        success: false,
        message: getErrorMessageForStatus(422),
        errors: Object.fromEntries(
          Object.entries(errors).map(([key, value]) => [key, value ?? []]),
        ),
      },
      { status: 422 },
    );
  }

  try {
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      return NextResponse.json(
        { success: false, message: getErrorMessageForStatus(503) },
        { status: 503 },
      );
    }

    await createLeadRecord(parsed.data);
    return NextResponse.json(
      { success: true, message: "Thank you. Your enquiry has been received." },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { success: false, message: getErrorMessageForStatus(500) },
      { status: 500 },
    );
  }
}
