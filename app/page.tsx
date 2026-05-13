import { FlowLens } from "@/components/FlowLens";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Firemni rentgen",
    description:
          "Firemni rentgen pomaha malym a strednim firmam odhalit, kde ztraci cas, penize a kapacitu lidi.",
    url: "https://www.flowlens.cz",
    logo: "https://www.flowlens.cz/og-image.png",
    serviceType: [
          "Procesni analyza",
          "Datova analytika",
          "Business intelligence",
          "Firemni poradenstvi",
        ],
    areaServed: {
          "@type": "Country",
          name: "Czech Republic",
    },
    offers: {
          "@type": "Offer",
          name: "Firemni rentgen",
          description:
                  "Prehled nad firmou behem 10-14 dni. Zjistite, kde ztraci cas, penize a kapacitu lidi.",
    },
};

export default function Page() {
    return (
          <>
                <script
                          type="application/ld+json"
                          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                        />
                <FlowLens />
          </>
        );
</>
