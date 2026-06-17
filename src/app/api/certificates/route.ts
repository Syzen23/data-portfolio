import { loadData } from "@/lib/data-loader";
import { successResponse, errorResponse } from "@/lib/api-response";
import { DATA_FILES, ERROR_MESSAGES } from "@/lib/constants";
import type { Certificate } from "@/types";

/**
 * GET /api/certificates
 *
 * Returns all certificates sorted by createdAt descending (newest first).
 */
export async function GET() {
  try {
    const certificates = loadData<Certificate>(DATA_FILES.CERTIFICATES);

    // Sort by createdAt descending (newest first)
    const sorted = certificates.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return successResponse(sorted);
  } catch {
    return errorResponse(ERROR_MESSAGES.INTERNAL_ERROR, 500);
  }
}
