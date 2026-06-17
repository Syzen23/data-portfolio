export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: "company_profile" | "landing_page" | "kreasi";
  priority: number;
  visibility: "public" | "private";
  screenshots: string[];
  demoUrl: string;
  createdAt: string;
  updatedAt: string;
}
