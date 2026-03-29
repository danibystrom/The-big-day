"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import { BROLLOPET_SUBLINKS } from "./HeaderMenu";

const italiana = '"Italiana", sans-serif';

const navHeadingSx = {
  fontFamily: italiana,
  fontWeight: 400,
  letterSpacing: "0.12em",
  fontSize: "0.78rem",
  color: "#fff",
  textTransform: "uppercase" as const,
  textDecoration: "none",
  display: "block",
  py: 1.25,
  "&:hover": {
    color: "rgba(255,255,255,0.72)",
  },
};

const subLinkSx = {
  fontFamily: italiana,
  fontWeight: 400,
  fontSize: "0.76rem",
  letterSpacing: "0.06em",
  color: "rgba(255,255,255,0.88)",
  textDecoration: "none",
  display: "block",
  py: 0.65,
  pl: 0.5,
  "&:hover": {
    color: "#fff",
  },
};

const columnTitleSx = {
  fontFamily: italiana,
  fontWeight: 400,
  letterSpacing: "0.12em",
  fontSize: "0.78rem",
  color: "#fff",
  textTransform: "uppercase" as const,
  mb: 1.5,
};

const columnBodySx = {
  fontFamily: italiana,
  fontWeight: 400,
  fontSize: "0.8rem",
  letterSpacing: "0.05em",
  lineHeight: 1.65,
  color: "rgba(255,255,255,0.9)",
};

const instagramProfiles = [
  {
    label: "@feliciarosensporre",
    href: "https://www.instagram.com/feliciarosensporre/",
  },
  {
    label: "@sebastianszalai",
    href: "https://www.instagram.com/sebastianszalai/",
  },
] as const;

function BrollopetSubLinks() {
  return (
    <>
      <Link component={NextLink} href="/brollopet" sx={subLinkSx}>
        Översikt
      </Link>
      {BROLLOPET_SUBLINKS.map((sub) => (
        <Link key={sub.href} component={NextLink} href={sub.href} sx={subLinkSx}>
          {sub.label}
        </Link>
      ))}
    </>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1C1A18",
        width: "100%",
        pt: { xs: 4, md: 5 },
        pb: { xs: 4, md: 5 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 3, md: 4 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 120, sm: 140 },
              height: { xs: 48, sm: 56 },
            }}
          >
            <Image
              src="/logo.png"
              alt="Felicia & Sebastian"
              fill
              sizes="140px"
              style={{ objectFit: "contain" }}
              priority={false}
            />
          </Box>
        </Box>

        <Box
          sx={{
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.35)",
            maxWidth: "min(100%, 960px)",
            mx: "auto",
            mb: { xs: 3, md: 4 },
          }}
        />

        {/*
          Samma maxbredd som linjen under loggan (960px), så kolumn 1 linjerar med streckets vänsterkant.
          Grid: 1fr | auto | 1fr — mittenkolumnen (auto) hamnar geometriskt centrerad = under logotypen.
        */}
        <Box
          sx={{
            maxWidth: "min(100%, 960px)",
            mx: "auto",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 1fr) auto minmax(0, 1fr)",
            },
            columnGap: { xs: 0, md: 7 },
            rowGap: { xs: 4, md: 0 },
            alignItems: "start",
          }}
        >
          {/* Kolumn 1 — vänster, i linje med strecket */}
          <Box
            sx={{
              justifySelf: "start",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              maxWidth: 300,
              width: "100%",
            }}
          >
            <Link component={NextLink} href="/" sx={navHeadingSx}>
              Hem
            </Link>

            <Accordion
              defaultExpanded={false}
              disableGutters
              elevation={0}
              square
              sx={{
                width: "100%",
                backgroundColor: "transparent",
                color: "#fff",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "#fff", fontSize: "1.05rem" }} />
                }
                aria-controls="footer-brollopet-panel"
                id="footer-brollopet-header"
                sx={{
                  px: 0,
                  minHeight: 0,
                  width: "100%",
                  justifyContent: "flex-start",
                  "& .MuiAccordionSummary-content": {
                    flexGrow: 0,
                    my: 0,
                    alignItems: "center",
                    marginRight: 0.25,
                  },
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    marginLeft: 0,
                    marginRight: 0,
                    transform: "none",
                    "&.Mui-expanded": {
                      transform: "rotate(180deg)",
                    },
                  },
                }}
              >
                <Typography sx={{ ...navHeadingSx, py: 0 }}>Bröllopet</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pt: 0, pb: 0.5 }}>
                <BrollopetSubLinks />
              </AccordionDetails>
            </Accordion>

            <Link component={NextLink} href="/kontakt" sx={navHeadingSx}>
              Kontakt
            </Link>
            <Link component={NextLink} href="/osa" sx={navHeadingSx}>
              OSA
            </Link>
          </Box>

          {/* Kolumn 2 — centrerad under logotypen */}
          <Box
            sx={{
              justifySelf: { xs: "start", md: "center" },
              textAlign: { xs: "left", md: "center" },
              maxWidth: 280,
              px: { xs: 0, md: 1 },
            }}
          >
            <Typography component="h2" sx={columnTitleSx}>
              Hitta hit
            </Typography>
            <Typography sx={columnBodySx}>
              Villa Strömsfors 1, Svenljunga
            </Typography>
          </Box>

          {/* Kolumn 3 — höger */}
          <Box
            sx={{
              justifySelf: { xs: "start", md: "end" },
              textAlign: { xs: "left", md: "right" },
              maxWidth: 300,
              width: "100%",
            }}
          >
            <Typography component="h2" sx={columnTitleSx}>
              Följ oss
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
                alignItems: { xs: "flex-start", md: "flex-end" },
              }}
            >
              {instagramProfiles.map((ig) => (
                <Link
                  key={ig.href}
                  component={NextLink}
                  href={ig.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    ...columnBodySx,
                    textDecoration: "none",
                    display: "block",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {ig.label}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
