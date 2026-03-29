"use client";

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
import { useEffect, useState, type MouseEvent } from "react";

const LIGHT = "#F2EDE4";
const DARK = "#1C1A18";

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

const dropdownLinkSx = {
  py: 1.25,
  px: 2,
  color: DARK,
  fontFamily: '"Antic Didone", serif',
  fontSize: "0.9rem",
  "&:hover": {
    backgroundColor: "rgba(28, 26, 24, 0.06)",
  },
} as const;

export default function HeaderMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBrollopetOpen, setMobileBrollopetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHovered, setHeaderHovered] = useState(false);

  const elevated = scrolled || headerHovered;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navTextColor = elevated ? DARK : "#fff";
  const linkTypographySx = {
    color: navTextColor,
    fontFamily: '"Antic Didone", serif',
    fontSize: "0.95rem",
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
              px: { xs: 1.5, md: 3 },
              py: { xs: 1, md: 1.25 },
              justifyContent: "center",
            }}
          >
            <Box
              onMouseEnter={() => setHeaderHovered(true)}
              onMouseLeave={() => setHeaderHovered(false)}
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 1320,
                mx: "auto",
                display: "flex",
                alignItems: "center",
                minHeight: 56,
                px: { xs: 2, md: 4 },
                py: 1,
                borderRadius: elevated ? { xs: 0, md: "15px" } : 0,
                backgroundColor: elevated ? LIGHT : "transparent",
                boxShadow: elevated
                  ? "0 8px 32px rgba(28, 26, 24, 0.12)"
                  : "none",
                transition:
                  "background-color 0.28s ease, box-shadow 0.28s ease, border-radius 0.28s ease",
              }}
            >
            {/* VÄNSTER SIDA – desktop-nav */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
                alignItems: "center",
              }}
            >
              {navLeftSimple.map((item) => (
                <Button
                  key={item.href}
                  disableRipple
                  component={Link}
                  href={item.href}
                  sx={{
                    textTransform: "none",
                    "&:hover": { backgroundColor: "transparent" },
                    p: 0,
                  }}
                >
                  <Typography sx={linkTypographySx}>{item.label}</Typography>
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
                  sx={{
                    textTransform: "none",
                    "&:hover": { backgroundColor: "transparent" },
                    p: 0,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.15,
                    }}
                  >
                    <Typography component="span" sx={linkTypographySx}>
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
                  {/* Box istället för Paper — inga MUI-skuggor; samma yta som headern */}
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

            {/* HAMBURGER – mobil & tablet */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                ml: "auto",
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

            {/* TITEL – alltid centrerad, klickbar som Hem (start) */}
            <Typography
              component={Link}
              href="/"
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                color: navTextColor,
                fontFamily: '"Italiana", sans-serif',
                fontSize: { xs: "1.4rem", sm: "1.7rem" },
                letterSpacing: "0.08em",
                textTransform: "none",
                whiteSpace: "nowrap",
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.28s ease",
              }}
            >
              Felicia & Sebastian
            </Typography>

            {/* HÖGER SIDA – desktop-nav */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
                ml: "auto",
              }}
            >
              {navRight.map((item) => (
                <Button
                  key={item.href}
                  disableRipple
                  component={Link}
                  href={item.href}
                  sx={{
                    textTransform: "none",
                    "&:hover": { backgroundColor: "transparent" },
                    p: 0,
                  }}
                >
                  <Typography sx={linkTypographySx}>{item.label}</Typography>
                </Button>
              ))}
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
        <Box sx={{ mt: 8 }}>
          <List disablePadding>
            {navLeftSimple.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={handleCloseMobile}
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
                sx={{ pr: 6 }}
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
                      sx={{ pl: 4, py: 1.25 }}
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
      </Drawer>
    </>
  );
}
