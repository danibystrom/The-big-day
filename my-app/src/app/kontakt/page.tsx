"use client";

import SitePageLayout from "@/app/components/SitePageLayout";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue. Praesent eu accumsan metus. Donec suscipit venenatis placerat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.";

const SPLIT_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue. Praesent eu accumsan metus. Donec suscipit venenatis placerat.";

export default function KontaktPage() {
  return (
    <SitePageLayout
      heroTitle="KONTAKT"
      heroSubtitle="Har du frågor? Hör gärna av dig – kontaktuppgifter kommer här."
      heroImageSrc="/sectionimg.jpeg"
      sectionTitle="Frågor och svar"
      sectionBody={LOREM}
      split={{
        variant: "right",
        title: "OSA",
        text: SPLIT_TEXT,
        imageSrc: "/osapage.jpeg",
        imageAlt: "OSA",
        buttonText: "Gå till anmälan",
        buttonHref: "/osa",
        bgColor: "#F2EDE4",
        buttonStyle: "outlined",
      }}
    />
  );
}
