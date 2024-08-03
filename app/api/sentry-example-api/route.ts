/* eslint-disable no-unreachable */
import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  // Capture the error with Sentry
  Sentry.captureException(new Error("Sentry Example API Route Error"));
  throw new Error("Sentry Example API Route Error");
  return NextResponse.json({ data: "Testing Sentry Error..." });
}