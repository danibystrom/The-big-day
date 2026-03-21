"use client";

import SitePageLayout from "@/app/components/SitePageLayout";

const LOREM =
  "Här hittar du svar på vanliga frågor, kontakt vid funderingar och annat som är bra att veta inför dagen. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin.";

const SPLIT_TEXT =
  "Glöm inte att OSA i tid så vi vet att ni kommer – vi längtar efter att fira med er.";

export default function BraAttVetaPage() {
  return (
    <SitePageLayout
      heroTitle="BRA ATT VETA"
      heroSubtitle="FAQ och praktisk information uppdateras här."
      heroImageSrc="/cheers.jpeg"
      sectionTitle="Inför bröllopet"
      sectionBody={LOREM}
      split={{
        variant: "right",
        title: "OSA",
        text: SPLIT_TEXT,
        imageSrc: "/sectionimg.jpeg",
        imageAlt: "OSA",
        buttonText: "Anmäl dig här",
        buttonHref: "/osa",
        bgColor: "#F2EDE4",
        buttonStyle: "filled",
      }}
    />
  );
}
