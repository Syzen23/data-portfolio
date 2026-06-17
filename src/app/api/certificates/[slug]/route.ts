import { NextRequest } from "next/server";
import { loadData } from "@/lib/data-loader";
import { successResponse, errorResponse } from "@/lib/api-response";
import { DATA_FILES, ERROR_MESSAGES } from "@/lib/constants";
import type { Certificate } from "@/types";

/**
 * GET /api/certificates/[slug]
 *
 * Returns a single certificate by slug.
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const certificates = loadData<Certificate>(DATA_FILES.CERTIFICATES);
    const certificate = certificates.find((c) => c.slug === slug);

    if (!certificate) {
      return errorResponse(ERROR_MESSAGES.NOT_FOUND, 404);
    }

    return successResponse(certificate);
  } catch {
    return errorResponse(ERROR_MESSAGES.INTERNAL_ERROR, 500);
  }
}
