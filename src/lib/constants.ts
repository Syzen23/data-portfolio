/**
 * Application-wide constants.
 */

// Data file names
export const DATA_FILES = {
  PROJECTS: "projects.json",
  CERTIFICATES: "certificates.json",
  GALLERY: "gallery.json",
  CREATIONS: "creations.json",
} as const;

// Valid platform values for creations
export const VALID_PLATFORMS = ["tiktok", "instagram"] as const;

// Error messages
export const ERROR_MESSAGES = {
  NOT_FOUND: "Resource not found",
  INVALID_QUERY: "Invalid query parameter",
  INTERNAL_ERROR: "Internal server error",
} as const;
