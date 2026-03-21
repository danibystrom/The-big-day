"use client";

import SitePageLayout from "@/app/components/SitePageLayout";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue. Praesent eu accumsan metus. Donec suscipit venenatis placerat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.";

const SPLIT_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue. Praesent eu accumsan metus. Donec suscipit venenatis placerat.";

export default function BrollopetPage() {
  return (
    <SitePageLayout
      heroTitle="BRÖLLOPPET"
      heroSubtitle="Datum, plats och praktisk information – uppdateras löpande."
      heroImageSrc="/osapage.jpeg"
      sectionTitle="Viktig information för gäster"
      sectionBody={LOREM}
      split={{
        variant: "right",
        title: "OSA TILL BRÖLLOPPET",
        text: SPLIT_TEXT,
        imageSrc: "/sectionimg.jpeg",
        imageAlt: "Bröllop",
        buttonText: "Anmäl dig här",
        buttonHref: "/osa",
        bgColor: "#F2EDE4",
        buttonStyle: "filled",
      }}
    />
  );
}
