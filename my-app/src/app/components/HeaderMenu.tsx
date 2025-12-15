"use client";

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
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
import { useState } from "react";

const navLeft = [
  { label: "Hem", href: "/start" },
  { label: "Vår historia", href: "/our-story" },
  { label: "Bröllopet", href: "/the-wedding" },
];

const navRight = [
  { label: "Inspiration", href: "/inspiration" },
  { label: "Kontakt", href: "/contact" },
  { label: "OSA", href: "/osa" },
];

export default function HeaderMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggleMobile = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleCloseMobile = () => {
    setMobileOpen(false);
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
              }}
            >
              {navLeft.map((item) => (
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
                  <Typography
                    sx={{
                      color: "#fff",
                      fontFamily: '"Antic Didone", serif',
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Button>
              ))}
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
                  <Typography
                    sx={{
                      color: "#fff",
                      fontFamily: '"Antic Didone", serif',
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.label}
                  </Typography>
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
            backgroundColor: "#cbc4ba",
            color: "#000",
            width: 260,
          },
        }}
      >
        <Box sx={{ mt: 8 }}>
          <List>
            {[...navLeft, ...navRight].map((item) => (
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
