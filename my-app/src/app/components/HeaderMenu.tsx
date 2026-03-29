"use client";

import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {
  useLayoutEffect,
  useState,
  useSyncExternalStore,
  type MouseEvent,
} from "react";

const LIGHT = "#F2EDE4";
const DARK = "#1C1A18";

/** Desktop pill (md+) — ska matcha befintlig header-stil */
const PILL_MAX_WIDTH_PX = 1320;
const PILL_BORDER_RADIUS_PX = 15;
/** Pill-bakgrund lite bredare än länkcontainern så inget hamnar utanför linne-ytan */
const PILL_BACKDROP_MAX_EXTRA_PX = 64;
/** Luft mellan pill och skärmkant (hover / ej scrollat) */
const PILL_SIDE_MARGIN_MD_PX = 24;
const PILL_SIDE_MARGIN_XS_PX = 16;
const HEADER_SHAPE_TRANSITION = {
  duration: 0.4,
  ease: "easeInOut" as const,
};
/** Mobil: längre varaktighet + mjuk kurva så statiskt ↔ scrollat känns lugnt. */
const HEADER_SHAPE_TRANSITION_MOBILE = {
  duration: 0.62,
  ease: [0.22, 1, 0.36, 1] as const,
};
const TOOLBAR_PT_TRANSITION_DESKTOP = "padding-top 0.4s ease-in-out";
const TOOLBAR_PT_TRANSITION_MOBILE =
  "padding-top 0.62s cubic-bezier(0.22, 1, 0.36, 1)";
const LINEN_SHADOW = "0 8px 32px rgba(28, 26, 24, 0.12)";

const MD_UP_MEDIA_QUERY = "(min-width: 900px)";

function subscribeMdUp(onChange: () => void) {
  const mq = window.matchMedia(MD_UP_MEDIA_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getMdUpSnapshot() {
  return window.matchMedia(MD_UP_MEDIA_QUERY).matches;
}

/** Samma som MUI md men utan hydration mismatch (server + första klient-render = false). */
function useHydrationSafeMdUp() {
  return useSyncExternalStore(subscribeMdUp, getMdUpSnapshot, () => false);
}

/** Undersidor under Bröllopet (samma ordning i desktop-dropdown och mobilmeny) */
export const BROLLOPET_SUBLINKS = [
  { label: "Helgens program", href: "/brollopet/helgens-program" },
  { label: "Resa & ankomst", href: "/brollopet/resa-ankomst" },
  { label: "Bra att veta", href: "/brollopet/bra-att-veta" },
] as const;

const navLeftSimple = [
  { label: "Hem", href: "/" },
  // { label: "Vår historia", href: "/var-historia" },
];

const navRight = [
  // { label: "Inspiration", href: "/inspiration" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "OSA", href: "/osa" },
];

const headerNavLinkLabelClass = "header-nav-link-label";

const underlineOnHover = {
  textDecoration: "underline",
  textUnderlineOffset: "0.22em",
  textDecorationThickness: "max(1px, 0.05em)",
} as const;

/** Desktop: endast understrykning på etiketten, inte t.ex. chevron. */
const desktopNavLinkButtonSx = {
  textTransform: "none" as const,
  p: 0,
  "&:hover": {
    backgroundColor: "transparent",
    [`& .${headerNavLinkLabelClass}`]: underlineOnHover,
  },
};

const dropdownLinkSx = {
  py: 1.25,
  px: 2,
  color: DARK,
  fontFamily: '"Antic Didone", serif',
  fontSize: "0.9rem",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "transparent",
    ...underlineOnHover,
  },
} as const;

/** Mobil drawer: samma hover som desktop (ingen grå bakgrund). */
const drawerNavLinkButtonSx = {
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:hover .MuiListItemText-primary": underlineOnHover,
} as const;

export default function HeaderMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBrollopetOpen, setMobileBrollopetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHovered, setHeaderHovered] = useState(false);

  const { scrollY } = useScroll();
  const isMdUp = useHydrationSafeMdUp();

  useLayoutEffect(() => {
    setScrolled(window.scrollY > 0);
  }, []);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 0);
  });

  const elevated = scrolled || headerHovered;

  const headerBackdropTransition = isMdUp
    ? HEADER_SHAPE_TRANSITION
    : HEADER_SHAPE_TRANSITION_MOBILE;
  const toolbarPtTransition = isMdUp
    ? TOOLBAR_PT_TRANSITION_DESKTOP
    : TOOLBAR_PT_TRANSITION_MOBILE;

  const navTextColor = elevated ? DARK : "#fff";
  const linkTypographySx = {
    color: navTextColor,
    fontFamily: '"Antic Didone", serif',
    fontSize: "0.95rem",
    textDecoration: "none",
  } as const;

  const handleToggleMobile = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleCloseMobile = () => {
    setMobileOpen(false);
    setMobileBrollopetOpen(false);
  };

  const toggleMobileBrollopet = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileBrollopetOpen((prev) => !prev);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, zIndex: 1300 }}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "transparent",
            color: elevated ? DARK : "#fff",
            boxShadow: "none",
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              position: "relative",
              minHeight: { xs: 72, md: 88 },
              px: 0,
              /* Vid scroll: ingen padding-top så linne-baren ligger kant i kant med viewport (samma 0.4s som bakgrundsformen) */
              pt: scrolled ? 0 : { xs: 1, md: 1.25 },
              pb: { xs: 1, md: 1.25 },
              transition: toolbarPtTransition,
              display: "flex",
              /* center = luftig rad över heron; stretch vid scroll så inget vertikalt glapp ovanför bakgrunden */
              alignItems: scrolled ? "stretch" : "center",
              justifyContent: "center",
            }}
          >
            <Box
              onMouseEnter={() => setHeaderHovered(true)}
              onMouseLeave={() => setHeaderHovered(false)}
              sx={{
                position: "relative",
                width: "100%",
                flex: 1,
                display: "flex",
                alignItems: scrolled ? "stretch" : "center",
                alignSelf: scrolled ? "stretch" : "auto",
                minHeight: scrolled ? 0 : { xs: 56, md: 64 },
              }}
            >
              {/* Bara denna yta animeras vid scroll; länkar ligger i fast container under */}
              <motion.div
                aria-hidden
                initial={false}
                animate={{
                  left: scrolled
                    ? "0px"
                    : isMdUp
                      ? `${PILL_SIDE_MARGIN_MD_PX}px`
                      : `${PILL_SIDE_MARGIN_XS_PX}px`,
                  right: scrolled
                    ? "0px"
                    : isMdUp
                      ? `${PILL_SIDE_MARGIN_MD_PX}px`
                      : `${PILL_SIDE_MARGIN_XS_PX}px`,
                  borderRadius: scrolled
                    ? 0
                    : isMdUp
                      ? PILL_BORDER_RADIUS_PX
                      : 0,
                  backgroundColor: elevated ? LIGHT : "transparent",
                  boxShadow: elevated ? LINEN_SHADOW : "none",
                }}
                transition={headerBackdropTransition}
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  width: "auto",
                  marginLeft: "auto",
                  marginRight: "auto",
                  zIndex: 0,
                  pointerEvents: "none",
                  boxSizing: "border-box",
                  WebkitBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                  /* maxWidth i animate + "none" får Framer att tweena mot 0 — kollaps. Pill: tak, scrollat: ingen begränsning */
                  maxWidth: scrolled
                    ? undefined
                    : `${PILL_MAX_WIDTH_PX + PILL_BACKDROP_MAX_EXTRA_PX}px`,
                }}
              />
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: PILL_MAX_WIDTH_PX,
                mx: "auto",
                minHeight: 56,
                py: 1,
                height: scrolled ? "100%" : "auto",
                display: { xs: "flex", md: "grid" },
                alignItems: "center",
                flexDirection: { xs: "row" },
                justifyContent: { xs: "flex-end" },
                gridTemplateColumns: { md: "1fr auto 1fr" },
                columnGap: { md: 2 },
                px: { xs: 2, sm: 2.5, md: 4 },
              }}
            >
            {/* VÄNSTER SIDA – desktop-nav */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
                alignItems: "center",
                justifySelf: "start",
                minWidth: 0,
              }}
            >
              {navLeftSimple.map((item) => (
                <Button
                  key={item.href}
                  disableRipple
                  component={Link}
                  href={item.href}
                  sx={desktopNavLinkButtonSx}
                >
                  <Typography
                    className={headerNavLinkLabelClass}
                    sx={linkTypographySx}
                  >
                    {item.label}
                  </Typography>
                </Button>
              ))}

              {/* Bröllopet + hover-dropdown */}
              <Box
                sx={{
                  position: "relative",
                  "&:hover .brollopet-dropdown": {
                    opacity: 1,
                    visibility: "visible",
                    pointerEvents: "auto",
                  },
                  "&:hover .brollopet-chevron": {
                    transform: "rotate(180deg)",
                  },
                }}
              >
                <Button
                  disableRipple
                  component={Link}
                  href="/brollopet"
                  sx={desktopNavLinkButtonSx}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.15,
                    }}
                  >
                    <Typography
                      component="span"
                      className={headerNavLinkLabelClass}
                      sx={linkTypographySx}
                    >
                      Bröllopet
                    </Typography>
                    <ExpandMoreIcon
                      className="brollopet-chevron"
                      aria-hidden
                      sx={{
                        color: navTextColor,
                        fontSize: "1.05rem",
                        transition:
                          "transform 0.2s ease, color 0.28s ease",
                      }}
                    />
                  </Box>
                </Button>
                <Box
                  className="brollopet-dropdown"
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    pt: 0,
                    mt: -0.5,
                    opacity: 0,
                    visibility: "hidden",
                    pointerEvents: "none",
                    transition: "opacity 0.18s ease, visibility 0.18s ease",
                    zIndex: 1400,
                  }}
                >
                 
                  <Box
                    sx={{
                      backgroundColor: LIGHT,
                      border: "none",
                      borderRadius: "0 0 16px 16px",
                      boxShadow: "none",
                      marginTop: 1,
                      minWidth: 220,
                      py: 1.5,
                    }}
                  >
                    <List component="nav" dense disablePadding>
                      {BROLLOPET_SUBLINKS.map((sub) => (
                        <ListItem key={sub.href} disablePadding>
                          <ListItemButton
                            component={Link}
                            href={sub.href}
                            sx={dropdownLinkSx}
                          >
                            {sub.label}
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* HAMBURGER – mobil & tablet (deltar ej i desktop-grid) */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                ml: "auto",
                zIndex: 1,
              }}
            >
              <IconButton
                edge="end"
                onClick={handleToggleMobile}
                size="large"
                sx={{
                  color: navTextColor,
                  transition: "color 0.28s ease",
                }}
                aria-label="Öppna meny"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* TITEL – mobil: absolut centrum; desktop: grid kolumn 2 */}
            <Typography
              component={Link}
              href="/"
              sx={{
                position: { xs: "absolute", md: "relative" },
                left: { xs: "50%", md: "auto" },
                transform: { xs: "translateX(-50%)", md: "none" },
                justifySelf: { md: "center" },
                textAlign: { md: "center" },
                width: { md: "max-content" },
                maxWidth: { md: "min(100%, 90vw)" },
                color: navTextColor,
                fontFamily: '"Italiana", sans-serif',
                fontSize: { xs: "1.4rem", sm: "1.7rem" },
                letterSpacing: "0.08em",
                textTransform: "none",
                whiteSpace: "nowrap",
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.28s ease",
                zIndex: 0,
              }}
            >
              Felicia & Sebastian
            </Typography>

            {/* HÖGER SIDA – desktop-nav */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
                alignItems: "center",
                justifySelf: "end",
                minWidth: 0,
              }}
            >
              {navRight.map((item) => (
                <Button
                  key={item.href}
                  disableRipple
                  component={Link}
                  href={item.href}
                  sx={desktopNavLinkButtonSx}
                >
                  <Typography
                    className={headerNavLinkLabelClass}
                    sx={linkTypographySx}
                  >
                    {item.label}
                  </Typography>
                </Button>
              ))}
            </Box>
            </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* MOBILMENY */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleCloseMobile}
        PaperProps={{
          sx: {
            backgroundColor: "#F2EDE4",
            color: "#1C1A18",
            width: 280,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            pt: "max(12px, env(safe-area-inset-top, 0px))",
          }}
        >
          <Box
            sx={{
              flexShrink: 0,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              px: 0.5,
              pb: 0.5,
              minHeight: 48,
            }}
          >
            <IconButton
              onClick={handleCloseMobile}
              size="large"
              edge="end"
              aria-label="Stäng meny"
              sx={{
                color: "#1C1A18",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        <Box sx={{ flex: 1, overflow: "auto" }}>
          <List disablePadding>
            {navLeftSimple.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={handleCloseMobile}
                  sx={drawerNavLinkButtonSx}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: {
                        fontFamily: '"Antic Didone", serif',
                        fontSize: "1rem",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            {/* Bröllopet med expand-ikon */}
            <ListItem
              disablePadding
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={toggleMobileBrollopet}
                  aria-expanded={mobileBrollopetOpen}
                  aria-label={
                    mobileBrollopetOpen
                      ? "Dölj undersidor för Bröllopet"
                      : "Visa undersidor för Bröllopet"
                  }
                  sx={{
                    color: "#1C1A18",
                    mr: 0.5,
                  }}
                >
                  <ExpandMoreIcon
                    sx={{
                      transform: mobileBrollopetOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </IconButton>
              }
              sx={{ pr: 0 }}
            >
              <ListItemButton
                component={Link}
                href="/brollopet"
                onClick={handleCloseMobile}
                sx={{ pr: 6, ...drawerNavLinkButtonSx }}
              >
                <ListItemText
                  primary="Bröllopet"
                  primaryTypographyProps={{
                    sx: {
                      fontFamily: '"Antic Didone", serif',
                      fontSize: "1rem",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>

            <Collapse in={mobileBrollopetOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ bgcolor: "rgba(28, 26, 24, 0.04)" }}>
                {BROLLOPET_SUBLINKS.map((sub) => (
                  <ListItem key={sub.href} disablePadding>
                    <ListItemButton
                      component={Link}
                      href={sub.href}
                      onClick={handleCloseMobile}
                      sx={{ pl: 4, py: 1.25, ...drawerNavLinkButtonSx }}
                    >
                      <ListItemText
                        primary={sub.label}
                        primaryTypographyProps={{
                          sx: {
                            fontFamily: '"Antic Didone", serif',
                            fontSize: "0.95rem",
                            color: "#1C1A18",
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>

            {navRight.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={handleCloseMobile}
                  sx={drawerNavLinkButtonSx}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: {
                        fontFamily: '"Antic Didone", serif',
                        fontSize: "1rem",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        </Box>
      </Drawer>
    </>
  );
}
