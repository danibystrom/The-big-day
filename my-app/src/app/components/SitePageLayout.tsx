"use client";

import SplitSectionLeft from "@/app/components/SplitSectionLeft";
import SplitSectionRight from "@/app/components/SplitSectionRight";
import { Box, Typography } from "@mui/material";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue. Praesent eu accumsan metus. Donec suscipit venenatis placerat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.";

export type SitePageSplitConfig = {
  variant: "left" | "right";
  title: string;
  text: string;
  imageSrc: string;
  imageAlt?: string;
  buttonText: string;
  buttonHref: string;
  bgColor?: "#F2EDE4" | "#1C1A18";
  buttonStyle?: "filled" | "outlined";
};

export type SitePageLayoutProps = {
  heroTitle: string;
  heroSubtitle?: string;
  heroImageSrc?: string;
  sectionTitle?: string;
  sectionBody?: string;
  split: SitePageSplitConfig;
};

export default function SitePageLayout({
  heroTitle,
  heroSubtitle,
  heroImageSrc = "/sectionimg.jpeg",
  sectionTitle,
  sectionBody = LOREM,
  split,
}: SitePageLayoutProps) {
  const Split =
    split.variant === "left" ? SplitSectionLeft : SplitSectionRight;

  return (
    <Box>
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${heroImageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          paddingX: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Italiana", sans-serif',
            color: "#fff",
            textAlign: "center",
            lineHeight: 1,
            mb: heroSubtitle ? 2 : 4,
            fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem" },
            maxWidth: "min(90vw, 900px)",
          }}
        >
          {heroTitle}
        </Typography>
        {heroSubtitle ? (
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Antic Didone", serif',
              color: "#fff",
              fontSize: { xs: "1rem", sm: "1.15rem" },
              maxWidth: "min(90vw, 640px)",
            }}
          >
            {heroSubtitle}
          </Typography>
        ) : null}
      </Box>

      <Box
        component="section"
        sx={{
          minHeight: "70vh",
          backgroundColor: "#F2EDE4",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "85vw",
            px: { xs: 3, sm: 6, md: 8 },
            py: { xs: 6, md: 8 },
          }}
        >
          {sectionTitle ? (
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Italiana", sans-serif',
                color: "#1C1A18",
                textAlign: "left",
                lineHeight: 1.05,
                mb: 3,
                letterSpacing: 0.5,
              }}
            >
              {sectionTitle}
            </Typography>
          ) : null}
          <Typography
            variant="body1"
            sx={{
              fontFamily: '"Antic Didone", serif',
              color: "#1a1a1a",
              fontSize: { xs: 16, sm: 18 },
              lineHeight: 1.35,
            }}
          >
            {sectionBody}
          </Typography>
        </Box>
      </Box>

      <Split
        title={split.title}
        text={split.text}
        imageSrc={split.imageSrc}
        imageAlt={split.imageAlt}
        buttonText={split.buttonText}
        buttonHref={split.buttonHref}
        bgColor={split.bgColor ?? "#F2EDE4"}
        buttonStyle={split.buttonStyle}
      />
    </Box>
  );
}
