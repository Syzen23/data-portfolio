import { NextRequest } from "next/server";
import { loadData } from "@/lib/data-loader";
import { successResponse, errorResponse } from "@/lib/api-response";
import { DATA_FILES, ERROR_MESSAGES, VALID_PLATFORMS } from "@/lib/constants";
import type { Creation } from "@/types";

/**
 * GET /api/creations
 * GET /api/creations?platform=tiktok
 * GET /api/creations?platform=instagram
 *
 * Returns creations, optionally filtered by platform.
 * Sorted by createdAt descending (newest first).
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const platform = searchParams.get("platform");

    let creations = loadData<Creation>(DATA_FILES.CREATIONS);

    // Validate and filter by platform if provided
    if (platform) {
      if (
        !VALID_PLATFORMS.includes(platform as (typeof VALID_PLATFORMS)[number])
      ) {
        return errorResponse(ERROR_MESSAGES.INVALID_QUERY, 400);
      }
      creations = creations.filter((c) => c.platform === platform);
    }

    // Sort by createdAt descending (newest first)
    const sorted = creations.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return successResponse(sorted);
  } catch {
    return errorResponse(ERROR_MESSAGES.INTERNAL_ERROR, 500);
  }
}
