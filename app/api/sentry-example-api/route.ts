import { NextResponse } from "next/server";
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "your_sentry_dsn_here", // Replace with your actual Sentry DSN
});

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  try {
    throw new Error("Sentry Example API Route Error");
  } catch (error) {
    Sentry.captureException(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}