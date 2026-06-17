import { loadData } from "@/lib/data-loader";
import { successResponse, errorResponse } from "@/lib/api-response";
import { DATA_FILES, ERROR_MESSAGES } from "@/lib/constants";
import type { Project } from "@/types";

/**
 * GET /api/projects
 *
 * Returns all projects sorted by priority ascending.
 * Featured projects (lower priority number) appear first.
 */
export async function GET() {
  try {
    const projects = loadData<Project>(DATA_FILES.PROJECTS);

    // Sort by priority ascending (1 = highest priority)
    const sorted = projects.sort((a, b) => a.priority - b.priority);

    return successResponse(sorted);
  } catch {
    return errorResponse(ERROR_MESSAGES.INTERNAL_ERROR, 500);
  }
}
