"use client";

import SitePageLayout from "@/app/components/SitePageLayout";

const LOREM =
  "Här kommer snart detaljerat program för helgen – vigsel, middag och fest. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin.";

const SPLIT_TEXT =
  "Mer om resa, boende och praktiska tips hittar du under våra andra sidor om bröllopet.";

export default function HelgensProgramPage() {
  return (
    <SitePageLayout
      heroTitle="HELGENS PROGRAM"
      heroSubtitle="Fredag och lördag · mer innehåll läggs in här."
      heroImageSrc="/sectionimg.jpeg"
      sectionTitle="Schema för helgen"
      sectionBody={LOREM}
      split={{
        variant: "right",
        title: "RESA & ANKOMST",
        text: SPLIT_TEXT,
        imageSrc: "/osapage.jpeg",
        imageAlt: "Bröllop",
        buttonText: "Läs mer",
        buttonHref: "/brollopet/resa-ankomst",
        bgColor: "#F2EDE4",
        buttonStyle: "filled",
      }}
    />
  );
}
