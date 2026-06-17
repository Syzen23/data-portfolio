import { NextResponse } from "next/server";

/**
 * Standardized API response helpers.
 *
 * All endpoints use these helpers to ensure a consistent
 * { success, data/message } envelope across the entire API.
 */

/**
 * Return a success response with data.
 *
 * @param data - The response payload (array or object)
 * @param status - HTTP status code (default: 200)
 */
export function successResponse<T>(data: T, status: number = 200) {
  return NextResponse.json({ success: true, data }, { status });
}

/**
 * Return an error response with a message.
 *
 * @param message - Human-readable error message
 * @param status - HTTP status code (default: 500)
 */
export function errorResponse(message: string, status: number = 500) {
  return NextResponse.json({ success: false, message }, { status });
}
