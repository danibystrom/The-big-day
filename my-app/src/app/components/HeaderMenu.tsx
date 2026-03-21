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
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState, type MouseEvent } from "react";

/** Undersidor under Bröllopet (samma ordning i desktop-dropdown och mobilmeny) */
export const BROLLOPET_SUBLINKS = [
  { label: "Helgens program", href: "/brollopet/helgens-program" },
  { label: "Resa & ankomst", href: "/brollopet/resa-ankomst" },
  { label: "Bra att veta", href: "/brollopet/bra-att-veta" },
] as const;

const navLeftSimple = [
  { label: "Hem", href: "/" },
  { label: "Vår historia", href: "/var-historia" },
];

const navRight = [
  { label: "Inspiration", href: "/inspiration" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "OSA", href: "/osa" },
];

const linkTypographySx = {
  color: "#fff",
  fontFamily: '"Antic Didone", serif',
  fontSize: "0.95rem",
} as const;

const dropdownLinkSx = {
  py: 1.25,
  px: 2,
  color: "#F2EDE4",
  fontFamily: '"Antic Didone", serif',
  fontSize: "0.9rem",
  "&:hover": {
    backgroundColor: "rgba(242, 237, 228, 0.12)",
  },
};

export default function HeaderMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBrollopetOpen, setMobileBrollopetOpen] = useState(false);

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
      <Box sx={{ flexGrow: 1, zIndex: 1000 }}>
        <AppBar
          position="absolute"
          sx={{
            backgroundColor: "transparent",
            color: "#fff",
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{
              position: "relative",
              minHeight: 72,
              px: { xs: 2, md: 6 },
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
                  <Typography sx={linkTypographySx}>Bröllopet</Typography>
                </Button>
                <Box
                  className="brollopet-dropdown"
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    pt: 1,
                    opacity: 0,
                    visibility: "hidden",
                    pointerEvents: "none",
                    transition: "opacity 0.18s ease, visibility 0.18s ease",
                    zIndex: 1400,
                  }}
                >
                  <Paper
                    elevation={6}
                    sx={{
                      borderRadius: 0,
                      backgroundColor: "rgba(28, 26, 24, 0.97)",
                      border: "1px solid rgba(242, 237, 228, 0.15)",
                      minWidth: 220,
                      py: 0.5,
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
                  </Paper>
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
                  color: "#fff",
                }}
                aria-label="Öppna meny"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* TITEL – alltid centrerad */}
            <Typography
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                color: "#fff",
                fontFamily: '"Italiana", sans-serif',
                fontSize: { xs: "1.4rem", sm: "1.7rem" },
                letterSpacing: "0.08em",
                textTransform: "none",
                whiteSpace: "nowrap",
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
