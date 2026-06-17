import { loadData } from "@/lib/data-loader";
import { successResponse, errorResponse } from "@/lib/api-response";
import { DATA_FILES, ERROR_MESSAGES } from "@/lib/constants";
import type { GalleryItem } from "@/types";

/**
 * GET /api/gallery
 *
 * Returns all gallery items sorted by createdAt descending (newest first).
 */
export async function GET() {
  try {
    const gallery = loadData<GalleryItem>(DATA_FILES.GALLERY);

    // Sort by createdAt descending (newest first)
    const sorted = gallery.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return successResponse(sorted);
  } catch {
    return errorResponse(ERROR_MESSAGES.INTERNAL_ERROR, 500);
  }
}
