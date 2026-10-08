import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://ai-pick-alen317.vercel.app/", changeFrequency: "weekly", priority: 1 },
    { url: "https://ai-pick-alen317.vercel.app/tools/fliki", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://ai-pick-alen317.vercel.app/tools/elevenlabs", changeFrequency: "monthly", priority: 0.8 },
  ];
}
