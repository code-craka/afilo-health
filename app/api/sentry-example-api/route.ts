import * as Sentry from "@sentry/nextjs";
import { NextResponse } from "next/server";

Sentry.init({
  dsn: process.env.SENTRY_DSN, // Ensure this is set in your environment variables
  tracesSampleRate: 1.0, // Adjust the sample rate as needed for your application
  debug: true, // Set to true for debugging the setup (remove in production)
});

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  const error = new Error("Sentry Example API Route Error");
  Sentry.captureException(error);
  return NextResponse.json({ error: "An error occurred" }, { status: 500 });
}
