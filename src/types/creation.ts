export type Platform = "tiktok" | "instagram";

export interface Creation {
  id: string;
  platform: Platform;
  title: string;
  thumbnail: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}
