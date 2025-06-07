import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

export default function ButtonAppBar() {
  return (
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
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <Button disableRipple sx={{
            textTransform: "none", '&:hover': {
              backgroundColor: "transparent"
            }
          }}>
            <Typography
              sx={{ color: "#fff", fontFamily: '"Antic Didone", serif' }}
            >
              Hem
            </Typography>
          </Button>
          <Button disableRipple href="/our-story" sx={{
            textTransform: "none", '&:hover': {
              backgroundColor: "transparent"
            }
          }}>
            <Typography
              sx={{ color: "#fff", fontFamily: '"Antic Didone", serif' }}
            >
              Vår Historia
            </Typography>{" "}
          </Button>
          <Button disableRipple href="/the-wedding" sx={{
            textTransform: "none", '&:hover': {
              backgroundColor: "transparent"
            }
          }}>
            <Typography
              sx={{ color: "#fff", fontFamily: '"Antic Didone", serif' }}
            >
              Bröllopet
            </Typography>
          </Button>
          <Button disableRipple href="/inspiration" sx={{
            textTransform: "none", '&:hover': {
              backgroundColor: "transparent"
            }
          }}>
            <Typography
              sx={{ color: "#fff", fontFamily: '"Antic Didone", serif' }}
            >
              Inspiration
            </Typography>
          </Button>
          <Button disableRipple href="/osa" sx={{
            textTransform: "none", '&:hover': {
              backgroundColor: "transparent"
            }
          }}>
            <Typography
              sx={{ color: "#fff", fontFamily: '"Antic Didone", serif' }}
            >
              OSA
            </Typography>
          </Button>
          <Button disableRipple href="/contact" sx={{
            textTransform: "none", '&:hover': {
              backgroundColor: "transparent"
            }
          }}>
            <Typography
              sx={{ color: "#fff", fontFamily: '"Antic Didone", serif' }}
            >
              Kontakt
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
