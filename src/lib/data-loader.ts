import fs from "fs";
import path from "path";

/**
 * Load and parse a JSON data file from src/data/.
 *
 * Uses fs.readFileSync for server-side route handlers.
 * The generic type parameter ensures type safety on the consumer side.
 *
 * @param filename - The JSON filename (e.g., "projects.json")
 * @returns Parsed array of typed data
 * @throws Error if file is missing or contains invalid JSON
 */
export function loadData<T>(filename: string): T[] {
  const filePath = path.join(process.cwd(), "src", "data", filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent) as T[];
}
