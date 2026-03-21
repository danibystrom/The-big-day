"use client";

import SitePageLayout from "@/app/components/SitePageLayout";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue. Praesent eu accumsan metus. Donec suscipit venenatis placerat. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.";

const SPLIT_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue. Praesent eu accumsan metus. Donec suscipit venenatis placerat.";

export default function InspirationPage() {
  return (
    <SitePageLayout
      heroTitle="INSPIRATION"
      heroSubtitle="Stämning, färger och idéer – mer kommer här."
      heroImageSrc="/cheers.jpeg"
      sectionTitle="Stil och atmosfär"
      sectionBody={LOREM}
      split={{
        variant: "left",
        title: "VÅR HISTORIA",
        text: SPLIT_TEXT,
        imageSrc: "/sectionimg.jpeg",
        imageAlt: "Inspiration",
        buttonText: "Läs mer om oss",
        buttonHref: "/var-historia",
        bgColor: "#1C1A18",
        buttonStyle: "outlined",
      }}
    />
  );
}
