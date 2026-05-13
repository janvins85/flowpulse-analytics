import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.flowlens.cz";
    const now = new Date();

      return [
          {
                url: baseUrl,
                      lastModified: now,
                            changeFrequency: "weekly",
                                  priority: 1.0,
                                      },
                                          {
                                                url: `${baseUrl}/#zjisteni`,
                                                      lastModified: now,
                                                            changeFrequency: "monthly",
                                                                  priority: 0.8,
                                                                      },
                                                                          {
                                                                                url: `${baseUrl}/#penize`,
                                                                                      lastModified: now,
                                                                                            changeFrequency: "monthly",
                                                                                                  priority: 0.8,
                                                                                                      },
                                                                                                          {
                                                                                                                url: `${baseUrl}/#proc`,
                                                                                                                      lastModified: now,
                                                                                                                            changeFrequency: "monthly",
                                                                                                                                  priority: 0.7,
                                                                                                                                      },
                                                                                                                                          {
                                                                                                                                                url: `${baseUrl}/#doporuceni`,
                                                                                                                                                      lastModified: now,
                                                                                                                                                            changeFrequency: "monthly",
                                                                                                                                                                  priority: 0.7,
                                                                                                                                                                      },
                                                                                                                                                                          {
                                                                                                                                                                                url: `${baseUrl}/#spoluprace`,
                                                                                                                                                                                      lastModified: now,
                                                                                                                                                                                            changeFrequency: "monthly",
                                                                                                                                                                                                  priority: 0.8,
                                                                                                                                                                                                      },
                                                                                                                                                                                                          {
                                                                                                                                                                                                                url: `${baseUrl}/#kontakt`,
                                                                                                                                                                                                                      lastModified: now,
                                                                                                                                                                                                                            changeFrequency: "monthly",
                                                                                                                                                                                                                                  priority: 0.6,
                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                url: `${baseUrl}/blog`,
                                                                                                                                                                                                                                                      lastModified: now,
                                                                                                                                                                                                                                                            changeFrequency: "weekly",
                                                                                                                                                                                                                                                                  priority: 0.9,
                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                                url: `${baseUrl}/blog/kde-firmy-ztraci-penize`,
                                                                                                                                                                                                                                                                                      lastModified: now,
                                                                                                                                                                                                                                                                                            changeFrequency: "monthly",
                                                                                                                                                                                                                                                                                                  priority: 0.8,
                                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                                                                url: `${baseUrl}/blog/pretizeny-tym`,
                                                                                                                                                                                                                                                                                                                      lastModified: now,
                                                                                                                                                                                                                                                                                                                            changeFrequency: "monthly",
                                                                                                                                                                                                                                                                                                                                  priority: 0.8,
                                                                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                                                                                                url: `${baseUrl}/blog/chaos-v-pozadavcich`,
                                                                                                                                                                                                                                                                                                                                                      lastModified: now,
                                                                                                                                                                                                                                                                                                                                                            changeFrequency: "monthly",
                                                                                                                                                                                                                                                                                                                                                                  priority: 0.8,
                                                                                                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                                                                                                        ];
                                                                                                                                                                                                                                                                                                                                                                        }
