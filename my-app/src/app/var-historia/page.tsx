"use client";

import SitePageLayout from "@/app/components/SitePageLayout";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue. Praesent eu accumsan metus. Donec suscipit venenatis placerat. Integer vitae libero vel nisi tincidunt facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.";

const SPLIT_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue. Praesent eu accumsan metus. Donec suscipit venenatis placerat.";

export default function VarHistoriaPage() {
  return (
    <SitePageLayout
      heroTitle="VÅR HISTORIA"
      heroSubtitle="En kort berättelse om oss – mer innehåll kommer snart."
      heroImageSrc="/sectionimg.jpeg"
      sectionTitle="Hur vi träffades"
      sectionBody={LOREM}
      split={{
        variant: "left",
        title: "OM VÅRT BRÖLLOP…",
        text: SPLIT_TEXT,
        imageSrc: "/cheers.jpeg",
        imageAlt: "Skål",
        buttonText: "Till bröllopet",
        buttonHref: "/brollopet",
        bgColor: "#1C1A18",
        buttonStyle: "outlined",
      }}
    />
  );
}
