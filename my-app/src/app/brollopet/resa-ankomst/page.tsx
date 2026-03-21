"use client";

import SitePageLayout from "@/app/components/SitePageLayout";

const LOREM =
  "Här samlar vi information om hur ni tar er till platsen, parkering och tips för resande gäster. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin.";

const SPLIT_TEXT =
  "Vill du veta mer om själva helgen? Kika på programmet för bröllopshelgen.";

export default function ResaAnkomstPage() {
  return (
    <SitePageLayout
      heroTitle="RESA & ANKOMST"
      heroSubtitle="Vägbeskrivning och praktiska råd kommer här."
      heroImageSrc="/osapage.jpeg"
      sectionTitle="Hitta hit"
      sectionBody={LOREM}
      split={{
        variant: "left",
        title: "HELGENS PROGRAM",
        text: SPLIT_TEXT,
        imageSrc: "/sectionimg.jpeg",
        imageAlt: "Resa",
        buttonText: "Till programmet",
        buttonHref: "/brollopet/helgens-program",
        bgColor: "#1C1A18",
        buttonStyle: "outlined",
      }}
    />
  );
}
