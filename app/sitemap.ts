import type { MetadataRoute } from "next";

const baseUrl = "https://ai-pick-alen317.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/tools`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/tools/fliki`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tools/elevenlabs`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guides/best-free-ai-video-generators-youtube-india`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guides/make-youtube-videos-with-ai-zero-budget`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guides/fliki-vs-elevenlabs`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/affiliate-disclosure`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
