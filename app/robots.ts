import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
          rules: [
                  {
                            userAgent: "*",
                            allow: "/",
                            disallow: [],
                          },
                ],
          sitemap: "https://www.flowlens.cz/sitemap.xml",
          host: "https://www.flowlens.cz",
        };
  }
