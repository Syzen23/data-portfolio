import { NextRequest } from "next/server";
import { loadData } from "@/lib/data-loader";
import { successResponse, errorResponse } from "@/lib/api-response";
import { DATA_FILES, ERROR_MESSAGES } from "@/lib/constants";
import type { Project } from "@/types";

/**
 * GET /api/projects/[slug]
 *
 * Returns a single project by slug.
 * Returns full project details including screenshots and external links.
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const projects = loadData<Project>(DATA_FILES.PROJECTS);
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
      return errorResponse(ERROR_MESSAGES.NOT_FOUND, 404);
    }

    return successResponse(project);
  } catch {
    return errorResponse(ERROR_MESSAGES.INTERNAL_ERROR, 500);
  }
}
